
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
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden max-w-full pt-20 md:pt-24">
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
            {/* Text overlay with improved positioning and contrast */}
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8 font-bold text-center lg:text-left text-white">
                Le ayudaremos a transformar su empresa con inteligencia artificial
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <HoverButton onClick={() => scrollToSection('contacto')} className="bg-white hover:bg-white/90 text-black font-bold shadow-lg text-lg px-8 py-4">
                  Solicitar consulta gratuita
                </HoverButton>
                <GradientButton onClick={() => scrollToSection('servicios')} className="flex items-center gap-2 shadow-lg text-lg px-8 py-4">
                  Conocer servicios <ArrowRight className="ml-2 h-5 w-5" />
                </GradientButton>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-base">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-xl text-white">+85%</span>
                  </div>
                  <span className="text-gray-100 font-medium text-lg">Aumento de eficiencia<br />promedio</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <span className="font-bold text-xl text-white">-30%</span>
                  </div>
                  <span className="text-gray-100 font-medium text-lg">Reducción de costes<br />operativos</span>
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
