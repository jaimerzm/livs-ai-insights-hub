
import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      stat: "40%",
      title: "Reducción de costes operativos",
      description: "Nuestros clientes experimentan una reducción promedio del 40% en costes operativos tras implementar nuestras soluciones de IA."
    },
    {
      stat: "85%",
      title: "Aumento en la productividad",
      description: "Las soluciones de automatización inteligente aumentan la productividad de sus equipos hasta en un 85%."
    },
    {
      stat: "60%",
      title: "Mejora en la toma de decisiones",
      description: "Los sistemas de análisis predictivo mejoran la precisión de las decisiones estratégicas en un 60%."
    },
    {
      stat: "90%",
      title: "Satisfacción de clientes",
      description: "El 90% de los usuarios finales reporta una mayor satisfacción con los servicios mejorados por IA."
    }
  ];

  const additionalBenefits = [
    "Reducción significativa de errores humanos",
    "Escalabilidad inmediata de operaciones",
    "Identificación de oportunidades de mercado no evidentes",
    "Personalización avanzada para clientes",
    "Optimización de la cadena de suministro",
    "Detección temprana de problemas y riesgos"
  ];

  return (
    <section id="beneficios" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-livs-gray-light opacity-50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Beneficios Cuantificables</h2>
          <p className="text-livs-gray-dark text-lg">
            Nuestras soluciones de inteligencia artificial ofrecen resultados medibles
            que impactan directamente en su rentabilidad y crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-livs-purple hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-livs-purple mb-2">{benefit.stat}</div>
              <h3 className="text-xl font-semibold text-livs-blue mb-3">{benefit.title}</h3>
              <p className="text-livs-gray-dark">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-livs-blue to-livs-purple rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Más Allá de los Números</h3>
              <p className="mb-6 text-white/90">
                Además de los beneficios cuantificables, nuestras soluciones de IA aportan ventajas 
                estratégicas que posicionan a su empresa por delante de la competencia:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {additionalBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-livs-cyan mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-full h-64 bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-white/20">
                  <div className="h-40 bg-livs-blue/30">
                    <div className="h-full flex items-end">
                      <div className="w-1/4 h-[20%] bg-livs-cyan ml-8"></div>
                      <div className="w-1/4 h-[40%] bg-white/60 ml-4"></div>
                      <div className="w-1/4 h-[75%] bg-livs-purple ml-4"></div>
                      <div className="w-1/4 h-[90%] bg-livs-cyan/80 ml-4 mr-8"></div>
                    </div>
                  </div>
                  <div className="p-4 text-center font-medium">
                    Crecimiento con Implementación de IA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
