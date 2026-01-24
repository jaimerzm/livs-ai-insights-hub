import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientButton } from '@/components/ui/gradient-button';
import { HoverButton } from '@/components/ui/hover-button';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Componente ElegantShape integrado
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]"
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return <motion.div initial={{
    opacity: 0,
    y: -150,
    rotate: rotate - 15
  }} animate={{
    opacity: 1,
    y: 0,
    rotate: rotate
  }} transition={{
    duration: 2.4,
    delay,
    ease: "easeOut",
    opacity: {
      duration: 1.2
    }
  }} className={cn("absolute", className)}>
            <motion.div animate={{
      y: [0, 15, 0]
    }} transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }} style={{
      width,
      height
    }} className="relative">
                <div className={cn("absolute inset-0 rounded-full", "bg-gradient-to-r to-transparent", gradient, "backdrop-blur-[2px] border-2 border-white/[0.15]", "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]", "after:absolute after:inset-0 after:rounded-full", "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]")} />
            </motion.div>
        </motion.div>;
}
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
  return <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-20 md:pt-24">
      {/* Fondo con gradientes */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Formas geométricas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />

        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />

        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />

        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />

        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]" className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeOut"
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12">
            <Circle className="h-2 w-2 fill-blue-500/80" />
            <span className="text-sm text-white/60 tracking-wide">
              Especialistas en Inteligencia Artificial
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7,
          duration: 1,
          ease: "easeOut"
        }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-10 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Le ayudaremos a transformar
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                su empresa con IA
              </span>
            </h1>
          </motion.div>

          {/* Botones de acción */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.9,
          duration: 1,
          ease: "easeOut"
        }} className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 justify-center">
            <HoverButton onClick={() => scrollToSection('contacto')} className="bg-white hover:bg-white/90 text-black font-bold shadow-lg text-lg px-8 py-4">
              Solicitar consulta gratuita
            </HoverButton>
            <GradientButton onClick={() => scrollToSection('servicios')} className="flex items-center gap-2 shadow-lg text-lg px-8 py-4">
              Conocer servicios <ArrowRight className="ml-2 h-5 w-5" />
            </GradientButton>
          </motion.div>

          {/* Estadísticas */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.1,
          duration: 1,
          ease: "easeOut"
        }} className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center">
            
            
          </motion.div>
        </div>
      </div>

      {/* Gradiente de transición */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>;
};
export default HeroSection;