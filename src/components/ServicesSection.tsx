
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, TrendingUp, LineChart, Database, Code, Users, Video, BarChart, FileText, Bell, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import BotpressChat from '@/components/ui/botpress-chat';
import { PixelTrailDemo } from '@/components/ui/pixel-trail-demo';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <BrainCircuit className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Chatbot Empresarial",
      description: "Chatbot personalizado con la información específica de tu empresa para atender consultas 24/7.",
      difficulty: "Media"
    },
    {
      icon: <Database className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Gestor de Reservas",
      description: "Sistema automatizado de gestión de reservas que optimiza la disponibilidad y confirmaciones.",
      difficulty: "Alta"
    },
    {
      icon: (
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Phone className="h-10 w-10 mb-4 text-livs-purple" />
        </motion.div>
      ),
      title: "Gestor de Llamadas",
      description: "Automatización inteligente de llamadas entrantes y salientes con registro y seguimiento.",
      difficulty: "Media"
    },
    {
      icon: <FileText className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Gestor de Correos",
      description: "Gestión automática de correos electrónicos con clasificación por urgencia y respuestas automáticas.",
      difficulty: "Media"
    },
    {
      icon: <Code className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Página Web",
      description: "Desarrollo de landing pages profesionales y páginas web optimizadas para conversión.",
      difficulty: "Fácil"
    },
    {
      icon: <TrendingUp className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Automatización de Redes Sociales",
      description: "Respuestas automáticas a usuarios, generación de descripciones para posts y gestión de contenido.",
      difficulty: "Media"
    }
  ];

  const benefits = [
    {
      icon: <BarChart className="h-6 w-6 text-livs-purple" />,
      title: "Optimización de procesos"
    },
    {
      icon: <Database className="h-6 w-6 text-livs-purple" />,
      title: "Análisis avanzado de datos"
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-livs-purple" />,
      title: "Automatización inteligente"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-livs-purple" />,
      title: "Ventaja competitiva"
    }
  ];

  const packs = [
    {
      icon: <Badge className="h-12 w-12 mb-4 text-livs-purple" />,
      title: "Pack Completo",
      description: "Solución integral con todos nuestros servicios de automatización con IA, incluyendo implementación y soporte continuo.",
      price: "400€",
      maintenance: "90€/mes",
      realValue: "1200€ + 149€/mes",
      features: [
        "Implementación inicial completa",
        "Mantenimiento mensual de todos los sistemas",
        "Actualizaciones y mejoras periódicas",
        "Soporte técnico prioritario",
        "Formación personalizada del equipo"
      ],
      highlighted: true
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-livs-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="text-livs-gray-dark text-lg mb-8">
            <p className="mb-6">
              <strong className="text-xl text-livs-blue block mb-3">Consultoría en Inteligencia Artificial para Empresas</strong>
              Ofrecemos conocimiento especializado en IA para transformar su negocio. Nosotros, mano a mano, le ayudaremos  a implementar soluciones tecnológicas adaptadas a sus necesidades específicas, LE ENSEÑAREMOS A USAR LAS MEJORES IAS DE FORMA SENCILLA, ES MÁS FÁCIL Y RÁPIDO DE LO QUE CREE.
            </p>
            
            <div className="mt-8 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-livs-blue flex items-center mb-3">
                  <Video className="h-6 w-6 mr-2 text-livs-purple" />
                  Aprendizaje por Videollamada
                </h3>
                <p className="text-left">
                  Formación interactiva y personalizada mediante sesiones virtuales que permiten capacitación 
                  directa y resolución de dudas en tiempo real.
                </p>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-livs-blue mb-3">Beneficios</h4>
                  <div className="grid grid-cols-2 gap-4 pl-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        {benefit.icon}
                        <span className="ml-2">{benefit.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pack destacado */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-livs-blue text-center mb-8">Nuestra Oferta</h3>
          <div className="max-w-2xl mx-auto">
            {packs.map((pack, index) => (
              <Card 
                key={index} 
                className="border-livs-purple border-2 bg-white hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0">
                  <Badge className="bg-livs-purple text-white rounded-none rounded-bl-md px-3 py-1 text-xs">
                    Oferta Especial
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex flex-col items-start">
                    {pack.icon}
                    <CardTitle className="text-2xl font-semibold text-livs-blue mb-2">
                      {pack.title}
                    </CardTitle>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-livs-purple">{pack.price}</span>
                        <span className="text-sm text-gray-600">precio inicial</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-livs-purple">{pack.maintenance}</span>
                        <span className="text-sm text-gray-600">mantenimiento mensual (opcional)</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <span className="text-sm text-gray-500 line-through">Valor real: {pack.realValue}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-livs-gray-dark text-base mb-4">
                    {pack.description}
                  </CardDescription>
                  <div className="mt-6">
                    <h4 className="font-medium text-livs-blue mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-livs-gray-light flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <div className="h-2 w-2 rounded-full bg-livs-purple"></div>
                          </div>
                          <span className="text-sm text-livs-gray-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Servicios detallados */}
        <div>
          <h3 className="text-2xl font-bold text-livs-blue text-center mb-8">Servicios Disponibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-livs-gray bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex flex-col items-start">
                    {service.icon}
                    <CardTitle className="text-xl font-semibold text-livs-blue">
                      {service.title}
                    </CardTitle>
                    <Badge variant="outline" className="mt-2 text-xs">
                      Dificultad: {service.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-livs-gray-dark text-base mb-4">
                    {service.description}
                  </CardDescription>
                  {index === 0 && (
                    <div className="mt-6 flex justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-livs-purple hover:bg-livs-purple/90 text-white">
                            Probar DEMO
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[700px] border-none bg-transparent p-0">
                          <BotpressChat />
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                  {index === 4 && (
                    <div className="mt-6 flex justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-livs-purple hover:bg-livs-purple/90 text-white">
                            Probar DEMO
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-fit border-none bg-transparent p-0">
                          <PixelTrailDemo />
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
