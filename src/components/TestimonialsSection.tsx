
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Empresa de Logística',
      position: 'CEO',
      text: 'La implementación de IA en nuestra cadena de suministro ha reducido nuestros costes operativos en un 28% y ha mejorado significativamente la precisión de nuestras previsiones de inventario.',
      rating: 5,
      image: '/lovable-uploads/f8abbaef-fae8-4fec-9576-57ea3f4cce0f.png'
    },
    {
      id: 2,
      name: 'Compañía Manufacturera',
      position: 'Director de Operaciones',
      text: 'Gracias a las soluciones de IA implementadas por Livs, hemos optimizado nuestros procesos de producción, reduciendo el tiempo de inactividad en un 35% y mejorando la calidad del producto.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Empresa de Retail',
      position: 'CMO',
      text: 'La personalización impulsada por IA ha transformado nuestra estrategia de marketing, aumentando las conversiones en un 42% y mejorando significativamente la retención de clientes.',
      rating: 5,
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600">
            Empresas de diversos sectores han experimentado resultados excepcionales gracias a nuestras soluciones de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <div className="flex items-center justify-center h-40 bg-gradient-to-r from-livs-blue/5 to-livs-blue/10 rounded-t-lg">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full object-contain"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Quote size={24} className="text-livs-purple/80" />
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="italic mb-4 text-gray-700">{testimonial.text}</blockquote>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.position}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
