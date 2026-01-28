import React from 'react';
import { ArrowRight, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';
import { HoverButton } from '@/components/ui/hover-button';
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
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: "easeOut",
        opacity: { duration: 1.2 }
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const keyBenefits = [
    "Reduce costes operativos hasta un 40%",
    "Atención 24/7 sin ampliar plantilla",
    "Más leads cualificados automáticamente"
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-20 md:pt-24">
      {/* Fondo con gradientes */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Formas geométricas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <ElegantShape delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge con iconos de servicios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] mb-8 md:mb-10"
          >
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-indigo-400" />
              <span className="text-sm text-white/70">Llamadas IA</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-rose-400" />
              <span className="text-sm text-white/70">Chatbots 24/7</span>
            </div>
          </motion.div>

          {/* Título principal - Mensaje concreto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Automatiza tu atención al cliente
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                sin ampliar plantilla
              </span>
            </h1>
          </motion.div>

          {/* Subtítulo con propuesta de valor */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 1, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8"
          >
            Llamadas inteligentes y chatbots que captan leads, atienden clientes y reducen costes. 
            Para PYMEs que quieren escalar sin complicaciones.
          </motion.p>

          {/* Beneficios clave */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 1, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <HoverButton
              onClick={() => scrollToSection('contacto')}
              className="bg-white hover:bg-white/90 text-black font-bold shadow-lg text-lg px-8 py-4"
            >
              Solicitar consulta gratuita
            </HoverButton>
            <GradientButton
              onClick={() => scrollToSection('servicios')}
              className="flex items-center gap-2 shadow-lg text-lg px-8 py-4"
            >
              Ver cómo funciona <ArrowRight className="ml-2 h-5 w-5" />
            </GradientButton>
          </motion.div>

          {/* Indicador de confianza */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-10 text-sm text-white/40"
          >
            Consulta gratuita · Sin compromiso · Resultados en semanas
          </motion.p>
        </div>
      </div>

      {/* Gradiente de transición */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
};

export default HeroSection;