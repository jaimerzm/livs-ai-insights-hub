import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TrendingDown, Clock, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const results = [
    {
      icon: <TrendingDown className="h-8 w-8" />,
      stat: "40%",
      label: "Reducción de costes operativos",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      stat: "24/7",
      label: "Atención sin interrupciones",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      stat: "3x",
      label: "Más leads cualificados",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      stat: "<1 min",
      label: "Tiempo de respuesta medio",
      color: "from-amber-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Resultados que puedes esperar
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Empresas como Sephora, Domino's o Bank of America ya automatizan su atención con IA. 
              Estos son los resultados típicos.
            </p>
          </div>

          {/* Grid de resultados */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${result.color} text-white mb-4`}>
                  {result.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {result.stat}
                </div>
                <div className="text-sm text-white/60">
                  {result.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mensaje de cierre */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/20 text-center">
            <p className="text-white text-lg md:text-xl font-medium">
              ¿Tu equipo está saturado atendiendo llamadas y consultas repetitivas?
            </p>
            <p className="text-white/70 mt-2">
              Descubre cómo automatizar sin perder la calidad de atención.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Beams Effect */}
      <div className="opacity-20">
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default IntroSection;
