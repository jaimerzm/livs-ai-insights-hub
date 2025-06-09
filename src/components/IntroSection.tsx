
import React from 'react';
import ScrollFloat from '@/components/ui/scroll-float';
import AnimatedSection from '@/components/ui/animated-section';

const IntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection
          title="¿Por qué elegir inteligencia artificial para su empresa?"
          subtitle="La IA no es solo el futuro, es el presente. Las empresas que la adoptan hoy liderarán el mercado mañana."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <ScrollFloat 
                element="h3"
                containerClassName="text-xl font-semibold mb-3"
                scrollStart="center bottom+=20%"
              >
                Velocidad sin precedentes
              </ScrollFloat>
              <ScrollFloat 
                element="p"
                containerClassName="text-gray-600"
                scrollStart="center bottom+=10%"
                stagger={0.01}
              >
                Automatice procesos que antes tomaban horas en segundos. La IA procesa información y toma decisiones a velocidades imposibles para los humanos.
              </ScrollFloat>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <ScrollFloat 
                element="h3"
                containerClassName="text-xl font-semibold mb-3"
                scrollStart="center bottom+=20%"
              >
                Precisión matemática
              </ScrollFloat>
              <ScrollFloat 
                element="p"
                containerClassName="text-gray-600"
                scrollStart="center bottom+=10%"
                stagger={0.01}
              >
                Elimine los errores humanos. La IA analiza datos con precisión absoluta, identifica patrones y predice resultados con base científica.
              </ScrollFloat>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <ScrollFloat 
                element="h3"
                containerClassName="text-xl font-semibold mb-3"
                scrollStart="center bottom+=20%"
              >
                ROI comprobado
              </ScrollFloat>
              <ScrollFloat 
                element="p"
                containerClassName="text-gray-600"
                scrollStart="center bottom+=10%"
                stagger={0.01}
              >
                Vea resultados medibles desde el primer día. Nuestros clientes reportan incrementos de eficiencia del 85% y reducción de costos del 30%.
              </ScrollFloat>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IntroSection;
