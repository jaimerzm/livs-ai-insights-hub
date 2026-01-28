import React from 'react';
import { Check, TrendingUp, BarChart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const mainBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      stat: "40%",
      title: "Reducción de costes",
      description: "Menos personal necesario para tareas repetitivas de atención",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      stat: "85%",
      title: "Más productividad",
      description: "Tu equipo se enfoca en tareas de alto valor mientras la IA atiende",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      stat: "24/7",
      title: "Atención continua",
      description: "Nunca pierdas un lead por no contestar fuera de horario",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const additionalBenefits = [
    "Escalabilidad inmediata sin contratar",
    "Respuestas consistentes y de calidad",
    "Integración con tus herramientas actuales",
    "Datos y métricas en tiempo real",
    "Cualificación automática de leads",
    "Reducción de errores humanos"
  ];

  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Resultados medibles para tu negocio
          </h2>
          <p className="text-gray-600">
            No vendemos tecnología, vendemos resultados. 
            Esto es lo que consiguen empresas como la tuya.
          </p>
        </div>

        {/* Beneficios principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-4`}>
                {benefit.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {benefit.stat}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Beneficios adicionales */}
        <div className="bg-gradient-to-br from-livs-blue to-livs-purple rounded-xl p-8 text-white max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Y además...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {additionalBenefits.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
