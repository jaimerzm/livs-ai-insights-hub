
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MessageSquareQuote, Users, Star } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const TestimonialsSection = () => {
  return <section id="casos" className="py-20 bg-livs-gray-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Futuros Testimonios</h2>
          <p className="text-livs-gray-dark text-lg">
            Estamos iniciando nuestro camino y pronto este espacio se llenará con las experiencias 
            de nuestros clientes. ¡Sé uno de los primeros en aprovechar nuestras soluciones!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Tarjeta de "Próximamente" */}
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex items-center justify-center h-40 bg-gradient-to-r from-livs-blue/10 to-livs-blue/5 rounded-t-lg">
              <MessageSquareQuote className="h-16 w-16 text-livs-blue/30" />
            </div>
            <CardContent className="pt-6">
              <h3 className="font-bold text-livs-blue text-xl mb-3">Tu experiencia aquí</h3>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </CardContent>
            <CardFooter className="mt-auto border-t pt-4">
              <div className="w-full flex justify-between items-center">
                <span className="text-sm text-zinc-950">Futuras reseñas</span>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
                  ))}
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Tarjeta de "En colaboración" */}
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex items-center justify-center h-40 bg-gradient-to-r from-livs-blue/5 to-livs-blue/10 rounded-t-lg">
              <Users className="h-16 w-16 text-livs-blue/30" />
            </div>
            <CardContent className="pt-6">
              <h3 className="font-bold text-livs-blue text-xl mb-3">Colaboración futura</h3>
              <p className="text-livs-gray-dark mb-4">
                Nos encantaría trabajar con su empresa para crear soluciones personalizadas 
                de IA que impulsen su negocio hacia el futuro.
              </p>
            </CardContent>
            <CardFooter className="mt-auto border-t pt-4">
              <div className="text-sm text-livs-gray">
                <span className="block text-zinc-950">¿Interesado en ser uno de nuestros primeros casos de éxito?</span>
                <span className="block mt-1 text-livs-purple">Contáctenos hoy mismo.</span>
              </div>
            </CardFooter>
          </Card>

          {/* Tarjeta de "Visión" */}
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex items-center justify-center h-40 bg-gradient-to-r from-livs-blue/10 to-livs-blue/5 rounded-t-lg">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30"></div>
                <div className="relative bg-white rounded-full p-3">
                  <MessageSquareQuote className="h-10 w-10 text-livs-blue" />
                </div>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="font-bold text-livs-blue text-xl mb-3">Nuestra promesa</h3>
              <p className="text-livs-gray-dark mb-4">
                Nos comprometemos a ofrecer soluciones innovadoras de IA que transformen 
                positivamente su negocio, con resultados medibles y un enfoque personalizado.
              </p>
            </CardContent>
            <CardFooter className="mt-auto border-t pt-4">
              <div className="w-full text-center">
                <span className="text-livs-blue font-medium">Pronto compartiremos historias de éxito reales</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>;
};

export default TestimonialsSection;
