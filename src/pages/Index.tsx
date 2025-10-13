
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
      
      {/* Chatbot Widget */}
      <iframe 
        src="TU_DOMINIO_PUBLICADO/chatbot-embed?user_id=9d812369-08b7-46f9-a445-20d7560b4a2c"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '400px',
          height: '600px',
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          zIndex: 9999
        }}
        title="Chatbot Assistant"
      />
    </div>
  );
};

export default Index;
