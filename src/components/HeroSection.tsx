
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SplashCursor } from '@/components/ui/splash-cursor';
import { RobotScene } from '@/components/ui/robot-scene';
import { Link } from 'react-router-dom';
import { GradientButton } from '@/components/ui/gradient-button';
import { HoverButton } from '@/components/ui/hover-button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="relative bg-black min-h-[90vh] flex items-center overflow-hidden max-w-full">
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
            <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight mb-4 font-bold text-center text-white pt-24 md:pt-0">
              Transformamos su empresa con inteligencia artificial
            </h1>
            <p className="text-base md:text-xl mb-8 text-gray-300 opacity-90 max-w-xl">
              En Livs, combinamos experiencia en IA con conocimiento empresarial para optimizar sus operaciones, 
              reducir costes y aumentar la rentabilidad con soluciones inteligentes adaptadas a su negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <HoverButton 
                onClick={() => scrollToSection('contacto')} 
                className="bg-white hover:bg-white/90 text-black font-bold"
              >
                Solicitar consulta gratuita
              </HoverButton>
              <GradientButton onClick={() => scrollToSection('servicios')} className="flex items-center gap-2">
                Conocer servicios <ArrowRight className="ml-2 h-4 w-4" />
              </GradientButton>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-xl">+85%</span>
                </div>
                <span>Aumento de eficiencia<br />promedio</span>
              </div>
              <div className="flex items-center gap-2">
                
                
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
    </section>
  );
};

export default HeroSection;
