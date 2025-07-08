
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificatesSection from '@/components/CertificatesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Helmet>
        <meta name="lovable:disable-badge" content="true" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Visual separator between sections */}
        <div className="section-separator"></div>
        
        <div className="section-dark">
          <IntroSection />
        </div>
        
        {/* Section separator */}
        <div className="h-8 bg-gradient-to-b from-[#030303] to-[#030303]"></div>
        
        <div id="beneficios" className="py-8 section-dark">
          <BenefitsSection />
        </div>
        
        {/* Section separator */}
        <div className="section-separator my-8"></div>
        
        <div id="servicios" className="py-8 section-dark">
          <ServicesSection />
        </div>
        
        {/* Section separator */}
        <div className="section-separator my-8"></div>
        
        <div id="futuros-testimonios" className="py-8 section-dark">
          <TestimonialsSection />
        </div>
        
        {/* Section separator */}
        <div className="section-separator my-8"></div>
        
        <div id="certificados" className="py-8 section-dark">
          <CertificatesSection />
        </div>
        
        {/* Section separator */}
        <div className="section-separator my-8"></div>
        
        <div id="nosotros" className="py-8 section-dark">
          <AboutSection />
        </div>
        
        {/* Section separator */}
        <div className="section-separator my-8"></div>
        
        <div id="contacto" className="py-8 section-dark">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
