
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, TrendingUp, LineChart, Database, Code, Users, Video, BarChart, FileText, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  const services = [
    {
      icon: <BrainCircuit className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Estrategia de IA",
      description: "Desarrollamos un plan estratégico de implementación de IA alineado con sus objetivos empresariales y cultura organizacional."
    },
    {
      icon: <TrendingUp className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Automatización Inteligente",
      description: "Identificamos y automatizamos procesos repetitivos mediante algoritmos inteligentes que aprenden y mejoran con el tiempo."
    },
    {
      icon: <LineChart className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Análisis Predictivo",
      description: "Utilizamos aprendizaje automático para analizar datos históricos y predecir tendencias futuras con alto nivel de precisión."
    },
    {
      icon: <Database className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Gestión de Datos",
      description: "Optimizamos el almacenamiento, procesamiento y visualización de datos para identificar insights valiosos para su negocio."
    },
    {
      icon: <Code className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Desarrollo de Soluciones",
      description: "Creamos aplicaciones y sistemas personalizados utilizando las últimas tecnologías en IA y aprendizaje automático."
    },
    {
      icon: <Users className="h-10 w-10 mb-4 text-livs-purple" />,
      title: "Formación de Equipos",
      description: "Capacitamos a sus equipos para comprender, utilizar y mantener las soluciones de IA implementadas en su empresa."
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
      icon: <FileText className="h-12 w-12 mb-4 text-livs-purple" />,
      title: "Pack Información Completa de IAs",
      description: "Acceso a un completo catálogo con información detallada sobre todas las IAs disponibles en el mercado, actualizado hasta el momento de adquirir el servicio.",
      features: [
        "Guía completa de herramientas de IA por categorías",
        "Comparativas de prestaciones y capacidades",
        "Casos de uso recomendados para cada herramienta",
        "Tutoriales prácticos de configuración",
        "Evaluación de costes y planes de precios"
      ],
      highlighted: false
    },
    {
      icon: <Bell className="h-12 w-12 mb-4 text-livs-purple" />,
      title: "Pack IA Básico + Actualizaciones Mensuales",
      description: "Incluye el pack básico de información sobre IAs más importantes, con actualizaciones mensuales sobre nuevas herramientas y funcionalidades.",
      features: [
        "Información esencial sobre las IAs más relevantes",
        "Boletín mensual con novedades del sector",
        "Alertas sobre lanzamientos importantes",
        "Acceso a webinars exclusivos sobre nuevas IAs",
        "Asesoramiento sobre implementación de nuevas herramientas"
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

        {/* Packs destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-livs-blue text-center mb-8">Packs de Información</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packs.map((pack, index) => (
              <Card 
                key={index} 
                className={`border ${pack.highlighted ? 'border-livs-purple border-2' : 'border-livs-gray'} 
                bg-white hover:shadow-lg transition-shadow duration-300 h-full relative overflow-hidden`}
              >
                {pack.highlighted && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-livs-purple text-white rounded-none rounded-bl-md px-3 py-1 text-xs">
                      Recomendado
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex flex-col items-start">
                    {pack.icon}
                    <CardTitle className="text-xl font-semibold text-livs-blue">
                      {pack.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-livs-gray-dark text-base mb-4">
                    {pack.description}
                  </CardDescription>
                  <div className="mt-4">
                    <h4 className="font-medium text-livs-blue mb-2">Incluye:</h4>
                    <ul className="space-y-2">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-livs-gray-light flex items-center justify-center mr-2 mt-0.5">
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

        {/* Servicios regulares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-livs-gray bg-white hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="flex flex-col items-start">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold text-livs-blue">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-livs-gray-dark text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
