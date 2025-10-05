
import React from 'react';
import { Card } from '@/components/ui/card';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Brain } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Content Container with better spacing */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="bg-gradient-to-r from-blue-600/40 to-purple-600/40 p-6 rounded-full mb-6 shadow-xl border border-blue-500/30">
              <Brain size={48} className="text-blue-300" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center leading-tight">
              Transformando Empresas con <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Inteligencia Artificial</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="space-y-8 text-white text-lg leading-relaxed">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <p className="animate-fade-in text-gray-100">
                Hoy en día, el activo más valioso que existe es la información. En un mundo donde los datos 
                se generan a cada segundo, nuestra empresa quiere ayudarle a transformar su negocio utilizando 
                esta riqueza a través del poder de la inteligencia artificial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <Card className="p-8 bg-blue-950 border-blue-600/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-2xl">
                <p className="text-blue-50 leading-relaxed">
                  Sabemos que usted busca soluciones reales, como las que han permitido a <span className="font-semibold text-blue-200">Zara</span> reducir su 
                  exceso de inventario en un <span className="font-bold text-blue-300">50%</span>, o a <span className="font-semibold text-blue-200">Banco Santander</span> disminuir fraudes en un <span className="font-bold text-blue-300">70%</span> ahorrando millones.
                </p>
              </Card>
              
              <Card className="p-8 bg-gradient-to-br from-purple-900/60 to-purple-800/40 border-purple-600/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-2xl">
                <p className="text-purple-50 leading-relaxed">
                  No se trata solo de tecnología, sino de convertir su información en conocimiento accionable 
                  que potencie lo que hace único a su negocio.
                </p>
              </Card>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <p className="text-gray-100 mb-6">
                También hemos visto cómo empresas que apenas eran conocidas se han transformado completamente 
                gracias a la IA:
              </p>

              <ul className="space-y-6 pl-6 list-none">
                <li className="flex items-start gap-4 hover:bg-white/5 p-4 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-blue-300 text-xl">Stitch Fix</span>
                    <p className="text-gray-200 mt-1">pasó de ser una pequeña startup a una compañía valorada en miles de millones 
                    gracias a sus algoritmos de recomendación personalizada de ropa</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 hover:bg-white/5 p-4 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-purple-300 text-xl">Lemonade</span>
                    <p className="text-gray-200 mt-1">revolucionó el sector de seguros procesando reclamaciones en segundos en lugar 
                    de semanas</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 hover:bg-white/5 p-4 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-green-300 text-xl">Duolingo</span>
                    <p className="text-gray-200 mt-1">se convirtió en líder mundial del aprendizaje de idiomas utilizando IA para 
                    personalizar la experiencia educativa de cada usuario</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <p className="text-gray-100">
                Estamos aquí para acompañarle en este viaje: analizaremos juntos sus necesidades específicas, 
                implementaremos estrategias personalizadas y capacitaremos a su equipo.
              </p>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-10 rounded-2xl border border-blue-500/30 shadow-2xl backdrop-blur-sm">
              <p className="text-white font-semibold text-center text-xl leading-relaxed">
                Permítanos proporcionarle esas herramientas y ese saber hacer que transformarán su empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Beams Effect with reduced intensity */}
      <div className="opacity-30">
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default IntroSection;
