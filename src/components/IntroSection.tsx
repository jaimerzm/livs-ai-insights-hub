
import React from 'react';
import { Card } from '@/components/ui/card';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Brain } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-blue-600/30 p-4 rounded-full mb-4">
              <Brain size={40} className="text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
              Transformando Empresas con <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Inteligencia Artificial</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p className="animate-fade-in">
              Hoy en día, el activo más valioso que existe es la información. En un mundo donde los datos 
              se generan a cada segundo, nuestra empresa quiere ayudarle a transformar su negocio utilizando 
              esta riqueza a través del poder de la inteligencia artificial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card className="p-6 bg-blue-900/30 border-blue-800 backdrop-blur-sm hover:scale-105 transition-transform">
                <p className="text-blue-100">
                  Sabemos que usted busca soluciones reales, como las que han permitido a Zara reducir su 
                  exceso de inventario en un 50%, o a Banco Santander disminuir fraudes en un 70% ahorrando millones.
                </p>
              </Card>
              
              <Card className="p-6 bg-purple-900/30 border-purple-800 backdrop-blur-sm hover:scale-105 transition-transform">
                <p className="text-purple-100">
                  No se trata solo de tecnología, sino de convertir su información en conocimiento accionable 
                  que potencie lo que hace único a su negocio.
                </p>
              </Card>
            </div>

            <p>
              También hemos visto cómo empresas que apenas eran conocidas se han transformado completamente 
              gracias a la IA:
            </p>

            <ul className="space-y-4 pl-6 list-disc marker:text-blue-400">
              <li className="hover:text-white transition-colors">
                <span className="font-medium text-blue-300">Stitch Fix</span> pasó de ser una pequeña startup a una compañía valorada en miles de millones 
                gracias a sus algoritmos de recomendación personalizada de ropa
              </li>
              <li className="hover:text-white transition-colors">
                <span className="font-medium text-blue-300">Lemonade</span> revolucionó el sector de seguros procesando reclamaciones en segundos en lugar 
                de semanas
              </li>
              <li className="hover:text-white transition-colors">
                <span className="font-medium text-blue-300">Duolingo</span> se convirtió en líder mundial del aprendizaje de idiomas utilizando IA para 
                personalizar la experiencia educativa de cada usuario
              </li>
            </ul>

            <p>
              Estamos aquí para acompañarle en este viaje: analizaremos juntos sus necesidades específicas, 
              implementaremos estrategias personalizadas y capacitaremos a su equipo.
            </p>
            
            <div className="mt-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-800/50">
              <p className="text-white font-medium text-center text-xl">
                Permítanos proporcionarle esas herramientas y ese saber hacer que transformarán su empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Beams Effect */}
      <BackgroundBeams />
    </section>
  );
};

export default IntroSection;
