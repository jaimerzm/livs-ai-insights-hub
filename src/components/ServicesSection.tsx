
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, TrendingUp, LineChart, Database, Code, Users, Video, BarChart, FileText, Bell, Zap, Cog, Bot, Workflow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Chatbot Empresarial con IA",
      description: "Chatbot inteligente personalizado con la información específica de su empresa. Atiende consultas 24/7 y mejora la experiencia de sus clientes.",
      difficulty: "Media"
    },
    {
      icon: <Database className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Gestor de Reservas",
      description: "Sistema completo de gestión de reservas automatizado. Control total de disponibilidad, confirmaciones automáticas y recordatorios.",
      difficulty: "Alta"
    },
    {
      icon: <Bell className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Gestor de Llamadas",
      description: "Sistema inteligente para gestionar y clasificar llamadas. Prioriza contactos importantes y automatiza respuestas básicas.",
      difficulty: "Media"
    },
    {
      icon: <FileText className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Gestor de Correos Electrónicos",
      description: "Clasificación automática de correos por urgencia. Prioriza mensajes importantes y automatiza respuestas frecuentes.",
      difficulty: "Media"
    },
    {
      icon: <Code className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Desarrollo Web",
      description: "Creación de páginas web y landing pages profesionales. Diseño responsive y optimizado para conversión.",
      difficulty: "Fácil"
    },
    {
      icon: <TrendingUp className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Automatización de Redes Sociales",
      description: "Respuestas automáticas a usuarios, generación de descripciones para posts y programación de contenido.",
      difficulty: "Media"
    }
  ];

  const automationBenefits = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Soluciones personalizadas"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Implementación rápida"
    },
    {
      icon: <Cog className="h-6 w-6 text-blue-600" />,
      title: "Mantenimiento continuo"
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: "Soporte técnico incluido"
    }
  ];

  const packs = [
    {
      icon: <Zap className="h-12 w-12 mb-4 text-blue-600" />,
      title: "Solución Completa de Automatización",
      description: "Implementamos las soluciones de IA y automatización que su negocio necesita para optimizar procesos y mejorar la eficiencia.",
      features: [
        "Seleccione los servicios que necesita de nuestro catálogo",
        "Implementación profesional y personalizada",
        "Configuración completa y puesta en marcha",
        "Documentación detallada del sistema",
        "Formación del equipo para uso efectivo",
        "Garantía de funcionamiento"
      ],
      highlighted: false,
      price: "400€",
      realValue: "Valor real: 1.200€",
      savings: "Ahorro de 800€"
    },
    {
      icon: <Workflow className="h-12 w-12 mb-4 text-blue-600" />,
      title: "Solución Completa + Mantenimiento Mensual",
      description: "La solución completa más mantenimiento continuo, actualizaciones mensuales y soporte prioritario para garantizar el máximo rendimiento.",
      features: [
        "Todo lo incluido en la Solución Completa",
        "Mantenimiento continuo del sistema",
        "Pequeñas actualizaciones mensuales",
        "Optimización y mejoras constantes",
        "Soporte prioritario",
        "Monitoreo proactivo 24/7",
        "Nuevas funcionalidades según necesidades"
      ],
      highlighted: true,
      price: "400€ + 90€/mes",
      realValue: "Valor real: 1.200€ + 149€/mes",
      savings: "Ahorro de 800€ iniciales + 59€/mes"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">Soluciones de IA y Automatización para su Negocio</h2>
          <div className="text-gray-700 text-lg mb-8">
            <p className="mb-6">
              <strong className="text-xl text-black block mb-3">Transformamos su Negocio con Inteligencia Artificial</strong>
              Implementamos soluciones de automatización e inteligencia artificial personalizadas que optimizan sus procesos empresariales. 
              <span className="font-semibold text-blue-600"> Chatbots inteligentes, gestión automatizada y presencia digital profesional</span> para hacer crecer su negocio.
            </p>
            
            <div className="mt-8 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-black flex items-center mb-3">
                  <Video className="h-6 w-6 mr-2 text-blue-600" />
                  Proceso de Implementación Profesional
                </h3>
                <p className="text-left mb-4 text-gray-700">
                  Trabajamos estrechamente con usted para implementar las soluciones que su negocio necesita. 
                  Desde el análisis inicial hasta la capacitación de su equipo.
                  <strong className="text-blue-600"> Garantizamos el funcionamiento óptimo de cada solución.</strong>
                </p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-black mb-3">¿Por qué elegirnos?</h4>
                  <div className="grid grid-cols-2 gap-4 pl-6">
                    {automationBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        {benefit.icon}
                        <span className="ml-2 text-sm font-medium text-gray-700">{benefit.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium text-center">
                <strong>Precios especiales de lanzamiento:</strong> Ofrecemos soluciones de IA por 400€ (valor real 1.200€). 
                Incluye implementación completa, formación y garantía de funcionamiento.
              </p>
            </div>
          </div>
        </div>

        {/* Packs de automatización destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black text-center mb-8">Nuestras Soluciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packs.map((pack, index) => (
              <Card 
                key={index} 
                className={`border ${pack.highlighted ? 'border-blue-600 border-2 shadow-lg' : 'border-gray-300'} 
                bg-white hover:shadow-lg transition-all duration-300 h-full relative overflow-hidden`}
              >
                {pack.highlighted && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-blue-600 text-white rounded-none rounded-bl-md px-3 py-1 text-xs">
                      Recomendado
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex flex-col items-start">
                    {pack.icon}
                    <CardTitle className="text-xl font-semibold text-black mb-2">
                      {pack.title}
                    </CardTitle>
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-lg font-bold">
                        {pack.price}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="line-through">{pack.realValue}</span>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {pack.savings}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base mb-4">
                    {pack.description}
                  </CardDescription>
                  <div className="mt-4">
                    <h4 className="font-medium text-black mb-2">Incluye:</h4>
                    <ul className="space-y-2">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mr-2 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Servicios de automatización */}
        <div>
          <h3 className="text-2xl font-bold text-black text-center mb-8">Catálogo de Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-300 bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex flex-col items-start">
                    {service.icon}
                    <div className="flex items-center justify-between w-full mb-2">
                      <CardTitle className="text-xl font-semibold text-black">
                        {service.title}
                      </CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Dificultad: {service.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">
                    {service.description}
                  </CardDescription>
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
