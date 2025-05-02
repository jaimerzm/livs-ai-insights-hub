
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SplashCursor } from '@/components/ui/splash-cursor';
import { RobotScene } from '@/components/ui/robot-scene';
import { Link } from 'react-router-dom';
import { RainbowButton } from '@/components/ui/rainbow-button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };

  return <section className="relative bg-black min-h-[90vh] flex items-center overflow-hidden">
      {/* Fluid Background Animation */}
      <SplashCursor BACK_COLOR={{
        r: 0.0,
        g: 0.0,
        b: 0.0
      }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Transformamos su empresa con inteligencia artificial
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 opacity-90 max-w-xl">
              En Livs, combinamos experiencia en IA con conocimiento empresarial para optimizar sus operaciones, 
              reducir costes y aumentar la rentabilidad con soluciones inteligentes adaptadas a su negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white hover:bg-white/90 text-black font-medium"
                onClick={() => scrollToSection('contacto')}
              >
                Solicitar consulta gratuita
              </Button>
              <RainbowButton
                onClick={() => scrollToSection('servicios')}
                className="flex items-center gap-2"
              >
                Conocer servicios <ArrowRight className="ml-2 h-4 w-4" />
              </RainbowButton>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-xl">+85%</span>
                </div>
                <span>Aumento de eficiencia<br />promedio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-xl">+50</span>
                </div>
                <span>Proyectos de IA<br />implementados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-xl">-30%</span>
                </div>
                <span>Reducción de costes<br />operativos</span>
              </div>
            </div>
          </div>

          <div className="lg:block">
            <RobotScene />
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
