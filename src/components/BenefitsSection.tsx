
import React from 'react';
import { CheckCircle, TrendingUp, Zap, DollarSign, Users, BarChart3 } from 'lucide-react';
import ScrollFloat from '@/components/ui/scroll-float';
import AnimatedSection from '@/components/ui/animated-section';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de Productividad",
      description: "Incrementa la eficiencia operativa hasta en un 85% automatizando tareas repetitivas y optimizando procesos.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: DollarSign,
      title: "Reducción de Costos",
      description: "Disminuye los gastos operativos hasta un 30% mediante la optimización inteligente de recursos y procesos.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Zap,
      title: "Decisiones Más Rápidas",
      description: "Toma decisiones basadas en datos en tiempo real con análisis predictivo y procesamiento instantáneo.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Users,
      title: "Mejor Experiencia del Cliente",
      description: "Ofrece atención personalizada 24/7 con chatbots inteligentes y sistemas de recomendación avanzados.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Análisis Predictivo",
      description: "Anticipa tendencias del mercado y comportamientos de clientes para mantenerse siempre un paso adelante.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: CheckCircle,
      title: "Ventaja Competitiva",
      description: "Mantén tu empresa a la vanguardia tecnológica y supera a la competencia con soluciones innovadoras.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection
          title="Beneficios Transformadores de la IA"
          subtitle="Descubra cómo la inteligencia artificial puede revolucionar cada aspecto de su negocio con resultados medibles y sostenibles."
          titleClassName="text-livs-blue text-3xl md:text-4xl font-bold mb-4"
          subtitleClassName="text-livs-gray-dark text-lg mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <ScrollFloat 
                    element="h3"
                    containerClassName="text-xl font-bold text-livs-blue mb-4"
                    scrollStart="center bottom+=30%"
                    stagger={0.02}
                  >
                    {benefit.title}
                  </ScrollFloat>
                  <ScrollFloat 
                    element="p"
                    containerClassName="text-livs-gray-dark leading-relaxed"
                    scrollStart="center bottom+=20%"
                    stagger={0.01}
                  >
                    {benefit.description}
                  </ScrollFloat>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BenefitsSection;
