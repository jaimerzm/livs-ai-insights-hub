import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import CertificatesSection from '@/components/CertificatesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>LIVS - Automatización de Atención al Cliente con IA | Chatbots y Llamadas Inteligentes</title>
        <meta name="description" content="Automatiza tu atención al cliente sin ampliar plantilla. Llamadas inteligentes y chatbots 24/7 para PYMEs. Reduce costes hasta un 40%. Consulta gratuita." />
        <meta name="lovable:disable-badge" content="true" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <IntroSection />
        
        <div id="servicios">
          <ServicesSection />
        </div>
        
        <div id="beneficios">
          <BenefitsSection />
        </div>
        
        <div id="certificados">
          <CertificatesSection />
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
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
