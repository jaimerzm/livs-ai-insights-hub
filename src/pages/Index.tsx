
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
import { ChatWidget } from '@/components/ChatWidget';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <meta name="lovable:disable-badge" content="true" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Visual separator between dark and light sections */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <IntroSection />
        
        {/* Section separator */}
        <div className="h-8 bg-gradient-to-b from-black to-gray-50"></div>
        
        <div id="beneficios" className="py-8">
          <BenefitsSection />
        </div>
        
        {/* Section separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
        
        <div id="servicios" className="py-8">
          <ServicesSection />
        </div>
        
        {/* Section separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
        
        <div id="futuros-testimonios" className="py-8">
          <TestimonialsSection />
        </div>
        
        {/* Section separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
        
        <div id="certificados" className="py-8">
          <CertificatesSection />
        </div>
        
        {/* Section separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
        
        <div id="nosotros" className="py-8">
          <AboutSection />
        </div>
        
        {/* Section separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
        
        <div id="contacto" className="py-8">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
