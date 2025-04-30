
import React from 'react';
import { Card } from '@/components/ui/card';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';

const IntroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground 
        Breathing={true}
        gradientColors={[
          "#000000",
          "#0c2b5e", 
          "#154288", 
          "#1e5ab3", 
          "#5682c7"
        ]}
        gradientStops={[0, 30, 50, 70, 100]}
        startingGap={130}
        topOffset={-10}
        breathingRange={8}
        animationSpeed={0.03}
      />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Transformando Empresas con Inteligencia Artificial
          </h2>
          
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

            <Card className="p-6 bg-blue-900/30 border-blue-800 backdrop-blur-sm">
              <p className="text-blue-100">
                Sabemos que usted busca soluciones reales, como las que han permitido a Zara reducir su 
                exceso de inventario en un 50%, o a Banco Santander disminuir fraudes en un 70% ahorrando millones.
              </p>
            </Card>

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

            <Card className="p-6 bg-purple-900/30 border-purple-800 backdrop-blur-sm">
              <p className="text-purple-100">
                No se trata solo de tecnología, sino de convertir su información en conocimiento accionable 
                que potencie lo que hace único a su negocio. Permítanos proporcionarle esas herramientas y 
                ese saber hacer que transformarán su empresa.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
