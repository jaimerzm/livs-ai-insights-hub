
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <div id="beneficios">
          <BenefitsSection />
        </div>
        <div id="servicios">
          <ServicesSection />
        </div>
        <div id="futuros-testimonios">
          <TestimonialsSection />
        </div>
        <div id="nosotros">
          <AboutSection />
        </div>
        <div id="contacto">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
