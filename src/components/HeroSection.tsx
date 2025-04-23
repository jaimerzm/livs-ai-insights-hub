
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-livs-blue via-livs-blue-light to-livs-purple min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full bg-livs-cyan opacity-10 blur-3xl"></div>
        <div className="absolute top-[40%] right-[15%] w-64 h-64 rounded-full bg-livs-purple opacity-10 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[20%] w-48 h-48 rounded-full bg-livs-cyan opacity-10 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
               backgroundSize: '30px 30px' 
             }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Transformamos su empresa con inteligencia artificial
            </h1>
            <p className="text-lg md:text-xl mb-8 text-livs-gray-light opacity-90 max-w-xl">
              En Livs, combinamos experiencia en IA con conocimiento empresarial para optimizar sus operaciones, 
              reducir costes y aumentar la rentabilidad con soluciones inteligentes adaptadas a su negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-livs-cyan hover:bg-livs-cyan/90 text-livs-blue font-medium">
                Solicitar consulta gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Conocer servicios <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-xl">+85%</span>
                </div>
                <span>Aumento de eficiencia<br/>promedio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-xl">+50</span>
                </div>
                <span>Proyectos de IA<br/>implementados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-xl">-30%</span>
                </div>
                <span>Reducción de costes<br/>operativos</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-livs-cyan rounded-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-livs-purple rounded-xl"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-lg p-6">
                <div className="aspect-video bg-livs-gray-dark rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                    alt="Inteligencia Artificial" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
