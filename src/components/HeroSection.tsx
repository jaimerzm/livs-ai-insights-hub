
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SplashCursor } from '@/components/ui/splash-cursor';
import { RobotScene } from '@/components/ui/robot-scene';
import { Link } from 'react-router-dom';
import { GradientButton } from '@/components/ui/gradient-button';
import { HoverButton } from '@/components/ui/hover-button';
import { useIsMobile } from '@/hooks/use-mobile';
import ScrollFloat from '@/components/ui/scroll-float';

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
  return <section className="relative bg-black min-h-[90vh] flex items-center overflow-hidden max-w-full">
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
            <ScrollFloat 
              element="h1"
              containerClassName="text-2xl md:text-4xl lg:text-5xl leading-tight mb-4 font-bold text-center text-white pt-24 md:pt-0"
              animationDuration={1.2}
              ease="power1.out"
              stagger={0.015}
            >
              Le ayudaremos a transformar su empresa con inteligencia artificial
            </ScrollFloat>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <HoverButton onClick={() => scrollToSection('contacto')} className="bg-white hover:bg-white/90 text-black font-bold">
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
    </section>;
};
export default HeroSection;
