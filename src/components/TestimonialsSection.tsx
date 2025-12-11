import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquareQuote, Clock } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="casos" className="py-20 bg-livs-gray-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">
            Testimonios de Nuestros Clientes
          </h2>
          <p className="text-livs-gray-dark text-lg">
            Próximamente compartiremos las experiencias de empresas y profesionales 
            de León y Castilla y León que confían en nuestras soluciones de inteligencia artificial.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-white shadow-md max-w-md w-full">
            <div className="flex items-center justify-center h-24 bg-gradient-to-r from-livs-blue/10 to-livs-purple/10 rounded-t-lg">
              <MessageSquareQuote className="h-12 w-12 text-livs-blue/50" />
            </div>
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-livs-purple" />
                <span className="text-livs-purple font-semibold">Próximamente</span>
              </div>
              <p className="text-livs-gray-dark">
                Estamos trabajando en proyectos increíbles. Pronto podrás conocer 
                las opiniones de nuestros primeros clientes satisfechos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
