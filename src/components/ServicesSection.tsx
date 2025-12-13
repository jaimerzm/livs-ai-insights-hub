import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, TrendingUp, Database, Code, Video, BarChart, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { PixelTrailDemo } from '@/components/ui/pixel-trail-demo';
import { motion } from 'framer-motion';
const ServicesSection = () => {
  const services = [{
    icon: <motion.div animate={{
      rotate: [0, 15, -15, 0]
    }} transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2
    }}>
          <Phone className="h-10 w-10 mb-4 text-livs-purple" />
        </motion.div>,
    title: "Llamadas Automatizadas",
    description: "Llamadas automáticas inteligentes que responden a clientes, recogen información y registran datos de cada conversación en tiempo real.",
    showDemo: true,
    demoType: 'video'
  }, {
    icon: <BrainCircuit className="h-10 w-10 mb-4 text-livs-purple" />,
    title: "Chatbot Empresarial",
    description: "Chatbot personalizado con la información específica de tu empresa para atender consultas 24/7 y mejorar la atención al cliente.",
    showDemo: true,
    demoType: 'chat'
  }, {
    icon: <Video className="h-10 w-10 mb-4 text-livs-purple" />,
    title: "Videos con IA",
    description: "Creación de contenido de video con inteligencia artificial para potenciar la presencia de tu empresa en redes sociales.",
    showDemo: false,
    demoType: 'none'
  }, {
    icon: <Code className="h-10 w-10 mb-4 text-livs-purple" />,
    title: "Páginas Web",
    description: "Desarrollo de landing pages profesionales y páginas web optimizadas para conversión y experiencia de usuario.",
    showDemo: false,
    demoType: 'web'
  }];
  const benefits = [{
    icon: <BarChart className="h-6 w-6 text-livs-purple" />,
    title: "Optimización de procesos"
  }, {
    icon: <Database className="h-6 w-6 text-livs-purple" />,
    title: "Análisis avanzado de datos"
  }, {
    icon: <BrainCircuit className="h-6 w-6 text-livs-purple" />,
    title: "Automatización inteligente"
  }, {
    icon: <TrendingUp className="h-6 w-6 text-livs-purple" />,
    title: "Ventaja competitiva"
  }];
  return <section id="servicios" className="py-20 bg-livs-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="text-livs-gray-dark text-lg mb-8">
            <p className="mb-6">
              <strong className="text-xl text-livs-blue block mb-3">Soluciones de IA Personalizadas para Tu Empresa</strong>
              Especializados en tres áreas clave:
              <br /><br />
              • <strong className="text-livs-blue">Llamadas automatizadas inteligentes</strong>
              <br />
              • <strong className="text-livs-blue">Chatbots empresariales</strong>
              <br />
              • <strong className="text-livs-blue">Videos con IA para redes sociales</strong>
              <br />
              • <strong className="text-livs-blue">Desarrollo de páginas web</strong>
              <br /><br />
              Implementamos soluciones de IA adaptadas a tus necesidades específicas para automatizar procesos y mejorar la atención al cliente.
            </p>
            
            <div className="mt-8 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-left mb-6">
                  Cada proyecto es único. Trabajamos contigo para crear una solución personalizada que se adapte perfectamente a las necesidades de tu empresa.
                </p>
                
                <div className="flex justify-center mb-6">
                  <a 
                    href="mailto:soporte.livs.business@gmail.com?subject=Solicitud%20de%20información%20-%20LIVS"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-livs-purple to-livs-blue text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Contact Sales
                  </a>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-lg font-medium text-livs-blue mb-3 text-center">Beneficios</h4>
                  <div className="grid grid-cols-2 gap-4 pl-6">
                    {benefits.map((benefit, index) => <div key={index} className="flex items-center">
                        {benefit.icon}
                        <span className="ml-2">{benefit.title}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios detallados */}
        <div id="servicios-detallados">
          <h3 className="text-2xl font-bold text-livs-blue text-center mb-8">Servicios Disponibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <Card key={index} className="border border-livs-gray bg-white hover:shadow-lg transition-shadow duration-300 h-full overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col items-start">
                    {service.icon}
                    <CardTitle className="text-xl font-semibold text-livs-blue">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-livs-gray-dark text-base mb-4">
                    {service.description}
                  </CardDescription>
                  
                  {/* Video animación para páginas web */}
                  {service.demoType === 'web' && <div className="mt-6 -mx-6 -mb-6">
                      <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{
                  paddingBottom: '56.25%'
                }}>
                        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover" src="/demo-videos/web-intro.mp4">
                          Tu navegador no soporta la reproducción de video.
                        </video>
                      </div>
                    </div>}
                  
                  {service.showDemo && <div className="mt-6 flex justify-center">
                      {service.demoType === 'chat' && <Button className="bg-livs-purple hover:bg-livs-purple/90 text-white" onClick={() => {
                  window.dispatchEvent(new CustomEvent('openChat'));
                }}>
                          Probar DEMO
                        </Button>}
                      {service.demoType === 'video' && <Dialog>
                          <DialogTrigger asChild>
                            <Button className="bg-livs-purple hover:bg-livs-purple/90 text-white">
                              Ver DEMO
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full">
                            <div className="relative w-full" style={{
                      paddingBottom: '56.25%'
                    }}>
                              <video controls className="absolute top-0 left-0 w-full h-full rounded-lg" src="/demo-videos/call-manager-demo.mp4">
                                Tu navegador no soporta la reproducción de video.
                              </video>
                            </div>
                          </DialogContent>
                        </Dialog>}
                    </div>}
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;