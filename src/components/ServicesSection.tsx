import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, TrendingUp, Database, Code, BarChart, Phone, Building2 } from 'lucide-react';
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
    icon: <Code className="h-10 w-10 mb-4 text-livs-purple" />,
    title: "Páginas Web",
    description: "Desarrollo de landing pages profesionales y páginas web optimizadas para conversión y experiencia de usuario.",
    showDemo: false,
    demoType: 'web'
  }, {
    icon: <motion.div animate={{
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1
    }}>
          <TrendingUp className="h-10 w-10 mb-4 text-livs-purple" />
        </motion.div>,
    title: "Videos con IA",
    description: "Creamos contenido de video con inteligencia artificial para ayudar a las empresas a generar contenido atractivo para redes sociales.",
    showDemo: false,
    demoType: 'video-ia'
  }];
  const chatbotSuccessStories = [{
    company: "Sephora",
    result: "Aumentó un 11% las reservas de citas con su chatbot de belleza",
    industry: "Retail"
  }, {
    company: "Domino's Pizza",
    result: "50% de pedidos online se realizan a través de su chatbot Dom",
    industry: "Alimentación"
  }, {
    company: "Bank of America",
    result: "Erica, su chatbot, gestiona +1.5 mil millones de interacciones",
    industry: "Banca"
  }, {
    company: "H&M",
    result: "Redujo un 70% las consultas repetitivas con su asistente virtual",
    industry: "Moda"
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
              Especializados en cuatro áreas clave:
              <br /><br />
              • <strong className="text-livs-blue">Llamadas automatizadas inteligentes</strong>
              <br />
              • <strong className="text-livs-blue">Chatbots empresariales 24/7</strong>
              <br />
              • <strong className="text-livs-blue">Desarrollo de páginas web</strong>
              <br />
              • <strong className="text-livs-blue">Videos con IA para redes sociales</strong>
              <br /><br />
              Implementamos soluciones de IA adaptadas a tus necesidades específicas para automatizar procesos y mejorar la atención al cliente.
            </p>
            
            <div className="mt-8 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-left mb-6">
                  Cada proyecto es único. Trabajamos contigo para crear una solución personalizada que se adapte perfectamente a las necesidades de tu empresa.
                </p>
                
                
                
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

        {/* Casos de éxito con chatbots */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-livs-blue text-center mb-4">Empresas que Triunfan con Chatbots</h3>
          <p className="text-livs-gray-dark text-center mb-8 max-w-2xl mx-auto">
            Grandes empresas ya están obteniendo resultados increíbles con la implementación de chatbots inteligentes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chatbotSuccessStories.map((story, index) => <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-livs-purple">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="h-5 w-5 text-livs-purple" />
                  <Badge variant="secondary" className="bg-livs-purple/10 text-livs-purple">
                    {story.industry}
                  </Badge>
                </div>
                <h4 className="font-bold text-livs-blue text-lg mb-2">{story.company}</h4>
                <p className="text-livs-gray-dark text-sm">{story.result}</p>
              </div>)}
          </div>
        </div>

        {/* Servicios detallados */}
        <div id="servicios-detallados">
          <h3 className="text-2xl font-bold text-livs-blue text-center mb-8">Nuestros Servicios</h3>
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