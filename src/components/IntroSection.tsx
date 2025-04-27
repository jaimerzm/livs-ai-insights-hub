
import React from 'react';
import { Card } from '@/components/ui/card';
import { StarBorder } from '@/components/ui/star-border';
import { RocketAnimation } from '@/components/ui/rocket-animation';

const IntroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <RocketAnimation className="absolute inset-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <StarBorder color="#6B46C1" speed="5s" className="w-full mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Transformando Empresas con Inteligencia Artificial
            </h2>
          </StarBorder>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Hoy en día, el activo más valioso que existe es la información. En un mundo donde los datos 
              se generan a cada segundo, nuestra empresa quiere ayudarle a transformar su negocio utilizando 
              esta riqueza a través del poder de la inteligencia artificial.
            </p>

            <p>
              Con las herramientas correctas y el conocimiento para utilizarlas adecuadamente, su negocio 
              puede despegar enormemente, alcanzando niveles de eficiencia y crecimiento antes inimaginables.
            </p>

            <StarBorder as="div" color="#0BC5EA" speed="6s" className="w-full">
              <Card className="p-6 bg-blue-900/30 border-blue-800">
                <p className="text-blue-100">
                  Sabemos que usted busca soluciones reales, como las que han permitido a Zara reducir su 
                  exceso de inventario en un 50%, o a Banco Santander disminuir fraudes en un 70% ahorrando millones.
                </p>
              </Card>
            </StarBorder>

            <p>
              También hemos visto cómo empresas que apenas eran conocidas se han transformado completamente 
              gracias a la IA:
            </p>

            <ul className="space-y-4 pl-6 list-disc">
              <li>
                Stitch Fix pasó de ser una pequeña startup a una compañía valorada en miles de millones 
                gracias a sus algoritmos de recomendación personalizada de ropa
              </li>
              <li>
                Lemonade revolucionó el sector de seguros procesando reclamaciones en segundos en lugar 
                de semanas
              </li>
              <li>
                Duolingo se convirtió en líder mundial del aprendizaje de idiomas utilizando IA para 
                personalizar la experiencia educativa de cada usuario
              </li>
            </ul>

            <p>
              Estamos aquí para acompañarle en este viaje: analizaremos juntos sus necesidades específicas, 
              implementaremos estrategias personalizadas y capacitaremos a su equipo.
            </p>

            <StarBorder as="div" color="#6B46C1" speed="7s" className="w-full">
              <Card className="p-6 bg-purple-900/30 border-purple-800">
                <p className="text-purple-100">
                  No se trata solo de tecnología, sino de convertir su información en conocimiento accionable 
                  que potencie lo que hace único a su negocio. Permítanos proporcionarle esas herramientas y 
                  ese saber hacer que transformarán su empresa.
                </p>
              </Card>
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
