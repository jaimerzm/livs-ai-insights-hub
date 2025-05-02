
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [{
    quote: "Las soluciones de IA implementadas por Livs nos permitieron reducir nuestros costes operativos en un 35% y aumentar la satisfacción de nuestros clientes significativamente.",
    author: "María González",
    position: "CEO, TechSolutions Inc.",
    stars: 5,
    company: "Tecnología"
  }, {
    quote: "El análisis predictivo desarrollado por el equipo de Livs revolucionó nuestra gestión de inventario, reduciendo el exceso de stock en un 42% en solo tres meses.",
    author: "Carlos Rodríguez",
    position: "Director de Operaciones, LogiTrans",
    stars: 5,
    company: "Logística"
  }, {
    quote: "Su enfoque personalizado y profundo conocimiento técnico nos ayudó a implementar una estrategia de IA que realmente se alinea con nuestros objetivos comerciales.",
    author: "Ana Martínez",
    position: "Directora de Innovación, HealthPlus",
    stars: 5,
    company: "Sector Salud"
  }];

  return <section id="casos" className="py-20 bg-livs-gray-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Testimonios</h2>
          <p className="text-livs-gray-dark text-lg">
            Descubra lo que dicen nuestros clientes sobre nuestras soluciones de IA
            y cómo han transformado sus negocios.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-livs-gray-dark mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="font-bold text-livs-blue">{testimonial.author}</div>
                  <div className="text-sm text-livs-gray">{testimonial.position}</div>
                  <div className="text-xs text-livs-gray-light mt-1">{testimonial.company}</div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default TestimonialsSection;
