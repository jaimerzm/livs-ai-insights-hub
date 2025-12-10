
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { MessageSquareQuote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "María García Fernández",
    role: "Directora de Operaciones",
    company: "Distribuciones León S.L.",
    location: "León",
    content: "Gracias al chatbot de LIVS, hemos reducido un 40% las consultas repetitivas de nuestros clientes. El equipo entendió perfectamente las necesidades de nuestra empresa de distribución.",
    rating: 5
  },
  {
    name: "Carlos Martínez Álvarez",
    role: "CEO",
    company: "Bodegas Tierra de Campos",
    location: "Valladolid",
    content: "Las llamadas automatizadas nos han permitido gestionar reservas y consultas de forma eficiente. Ahora podemos atender a más clientes sin aumentar personal.",
    rating: 5
  },
  {
    name: "Elena Rodríguez Pérez",
    role: "Gerente",
    company: "Clínica Dental Ponferrada",
    location: "Ponferrada, León",
    content: "La página web que nos desarrollaron es moderna y funcional. Nuestros pacientes ahora pueden solicitar citas online fácilmente. Muy profesionales.",
    rating: 5
  },
  {
    name: "Javier López Santos",
    role: "Director Comercial",
    company: "Embutidos Guijuelo Premium",
    location: "Salamanca",
    content: "El sistema de atención telefónica automatizada ha revolucionado nuestra gestión de pedidos. Los clientes están encantados con la rapidez del servicio.",
    rating: 4
  },
  {
    name: "Ana Isabel Díaz Crespo",
    role: "Propietaria",
    company: "Hotel Rural La Encina",
    location: "Astorga, León",
    content: "Desde que implementamos el chatbot, las reservas han aumentado un 25%. Responde consultas las 24 horas y nuestros huéspedes lo valoran mucho.",
    rating: 5
  },
  {
    name: "Roberto Sánchez Blanco",
    role: "Administrador",
    company: "Talleres Mecánicos Castilla",
    location: "Burgos",
    content: "La web que nos crearon refleja perfectamente la calidad de nuestro trabajo. El diseño es limpio y profesional, justo lo que necesitábamos.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return <section id="casos" className="py-20 bg-livs-gray-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Testimonios de Nuestros Clientes</h2>
          <p className="text-livs-gray-dark text-lg">
            Empresas y profesionales de León y Castilla y León ya confían en nuestras soluciones 
            de inteligencia artificial para impulsar sus negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="flex items-center justify-center h-24 bg-gradient-to-r from-livs-blue/10 to-livs-purple/10 rounded-t-lg">
                <MessageSquareQuote className="h-12 w-12 text-livs-blue/50" />
              </div>
              <CardContent className="pt-6 flex-1">
                <p className="text-livs-gray-dark mb-4 italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
              <CardFooter className="mt-auto border-t pt-4">
                <div className="w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="block font-bold text-livs-blue">{testimonial.name}</span>
                      <span className="block text-sm text-livs-gray-dark">{testimonial.role}</span>
                      <span className="block text-sm text-livs-purple font-medium">{testimonial.company}</span>
                      <span className="block text-xs text-livs-gray">{testimonial.location}</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          strokeWidth={1.5} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};

export default TestimonialsSection;
