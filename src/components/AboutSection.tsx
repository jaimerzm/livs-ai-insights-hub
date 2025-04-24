import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-livs-blue">
              Sobre Nosotros
            </h2>
            <p className="text-livs-gray-dark mb-4">
              Con una amplia experiencia en el desarrollo e implementación de soluciones de IA para empresas multinacionales. Especialista en aprendizaje automático y procesamiento del lenguaje natural.
            </p>
            
            <p className="text-livs-gray-dark mb-4">
              Nuestra misión es ayudar a las empresas a aprovechar al máximo el potencial de la inteligencia artificial, ofreciendo soluciones innovadoras y personalizadas que impulsen su crecimiento y eficiencia.
            </p>
            <Button size="lg" className="bg-livs-purple hover:bg-livs-purple/90 text-white font-medium">
              Leer más
            </Button>
          </div>
          <div className="order-first md:order-none">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Nuestro equipo" 
              className="rounded-xl shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
