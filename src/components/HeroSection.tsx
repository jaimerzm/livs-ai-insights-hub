
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SplashCursor } from '@/components/ui/splash-cursor';
import { OptimizedRobotScene } from '@/components/ui/optimized-robot-scene';
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
            {/* Text overlay for better contrast */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h1 className="text-2xl md:text-4xl lg:text-5xl leading-tight mb-6 font-bold text-center lg:text-left text-white">
                Le ayudaremos a transformar su empresa con inteligencia artificial
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <HoverButton onClick={() => scrollToSection('contacto')} className="bg-white hover:bg-white/90 text-black font-bold shadow-lg">
                  Solicitar consulta gratuita
                </HoverButton>
                <GradientButton onClick={() => scrollToSection('servicios')} className="flex items-center gap-2 shadow-lg">
                  Conocer servicios <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-xl text-white">+85%</span>
                  </div>
                  <span className="text-gray-100 font-medium">Aumento de eficiencia<br />promedio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-xl text-white">-30%</span>
                  </div>
                  <span className="text-gray-100 font-medium">Reducción de costes<br />operativos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:block">
            <OptimizedRobotScene />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
