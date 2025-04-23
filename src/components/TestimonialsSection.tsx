
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Las soluciones de IA implementadas por Livs nos permitieron reducir nuestros costes operativos en un 35% y aumentar la satisfacción de nuestros clientes significativamente.",
      author: "María González",
      position: "CEO, TechSolutions Inc.",
      stars: 5,
      company: "Tecnología"
    },
    {
      quote: "El análisis predictivo desarrollado por el equipo de Livs revolucionó nuestra gestión de inventario, reduciendo el exceso de stock en un 42% en solo tres meses.",
      author: "Carlos Rodríguez",
      position: "Director de Operaciones, LogiTrans",
      stars: 5,
      company: "Logística"
    },
    {
      quote: "Su enfoque personalizado y profundo conocimiento técnico nos ayudó a implementar una estrategia de IA que realmente se alinea con nuestros objetivos comerciales.",
      author: "Ana Martínez",
      position: "Directora de Innovación, HealthPlus",
      stars: 5,
      company: "Sector Salud"
    }
  ];

  const caseStudies = [
    {
      industry: "Retail",
      title: "Optimización de Inventario con IA",
      results: [
        "52% de reducción en exceso de inventario",
        "29% de aumento en la rotación de existencias",
        "Incremento del 18% en margen bruto"
      ],
      bgColor: "bg-livs-blue"
    },
    {
      industry: "Financiero",
      title: "Detección de Fraude Automatizada",
      results: [
        "73% de mejora en la detección de fraudes",
        "Reducción del 68% en falsos positivos",
        "Ahorro anual de €1.2M"
      ],
      bgColor: "bg-livs-purple"
    },
    {
      industry: "Manufactura",
      title: "Mantenimiento Predictivo",
      results: [
        "86% de precisión en la predicción de fallos",
        "41% de reducción en tiempo de inactividad",
        "ROI del 315% en el primer año"
      ],
      bgColor: "bg-livs-cyan"
    }
  ];

  return (
    <section id="casos" className="py-20 bg-livs-gray-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-livs-gray-dark text-lg">
            Descubra cómo hemos ayudado a empresas como la suya a transformar sus operaciones
            y alcanzar resultados excepcionales con nuestras soluciones de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className={`${study.bgColor} rounded-xl text-white p-6 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="mb-3 font-medium text-sm opacity-80">{study.industry}</div>
              <h3 className="text-xl font-bold mb-4">{study.title}</h3>
              <ul className="space-y-2">
                {study.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-livs-gray bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-livs-purple text-livs-purple" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="italic text-livs-gray-dark">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start pt-2">
                  <div className="font-semibold text-livs-blue">{testimonial.author}</div>
                  <div className="text-sm text-livs-gray-dark">{testimonial.position}</div>
                  <div className="text-xs bg-livs-gray px-2 py-1 rounded mt-2">{testimonial.company}</div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
