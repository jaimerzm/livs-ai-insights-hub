
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, TrendingUp, LineChart, Database, Code, Users, Video, BarChart, FileText, Bell, Zap, Cog, Bot, Workflow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Automatización de Procesos",
      description: "Transformamos sus tareas repetitivas en procesos automatizados inteligentes que funcionan 24/7, liberando tiempo valioso para actividades estratégicas."
    },
    {
      icon: <Bot className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Asistentes Virtuales IA",
      description: "Implementamos chatbots y asistentes inteligentes que atienden a sus clientes, gestionan consultas y procesan solicitudes automáticamente."
    },
    {
      icon: <Workflow className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Flujos de Trabajo Inteligentes",
      description: "Diseñamos workflows que conectan todas sus herramientas y sistemas, automatizando completamente procesos complejos de negocio."
    },
    {
      icon: <Database className="h-10 w-10 mb-4 text-blue-600" />,
      title: "Automatización de Datos",
      description: "Automatizamos la recolección, procesamiento y análisis de datos para generar reportes y insights sin intervención manual."
    }
  ];

  const automationBenefits = [
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Potencial de ahorro del 70-90%"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Reducción de errores humanos"
    },
    {
      icon: <Cog className="h-6 w-6 text-blue-600" />,
      title: "Operación 24/7 sin descanso"
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: "ROI proyectado en 30-90 días"
    }
  ];

  const packs = [
    {
      icon: <Bot className="h-12 w-12 mb-4 text-blue-600" />,
      title: "Pack Automatización Básica",
      description: "Solución integral para automatizar sus primeros procesos empresariales con herramientas de IA de última generación.",
      features: [
        "Análisis completo de procesos automatizables",
        "Implementación de 3-5 automatizaciones clave",
        "Configuración de chatbot básico para atención al cliente",
        "Capacitación práctica del equipo (4 sesiones)",
        "Soporte técnico durante 3 meses",
        "Garantía de funcionamiento y optimización"
      ],
      highlighted: false,
      savings: "Objetivo: 15-20 horas semanales ahorradas"
    },
    {
      icon: <Workflow className="h-12 w-12 mb-4 text-blue-600" />,
      title: "Pack Automatización Avanzada + Seguimiento",
      description: "Transformación completa con automatizaciones complejas, integraciones avanzadas y seguimiento continuo para maximizar resultados.",
      features: [
        "Automatización completa de workflows complejos",
        "Integración entre todas sus herramientas de trabajo",
        "Asistente IA personalizado para su sector",
        "Dashboard de métricas y rendimiento en tiempo real",
        "Optimización mensual de automatizaciones",
        "Soporte prioritario 24/7 durante 12 meses",
        "Nuevas automatizaciones según necesidades"
      ],
      highlighted: true,
      savings: "Objetivo: 30-40 horas semanales ahorradas"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">Automatizaciones que Transforman su Negocio</h2>
          <div className="text-gray-700 text-lg mb-8">
            <p className="mb-6">
              <strong className="text-xl text-black block mb-3">Especialistas en Automatización Empresarial con IA</strong>
              Somos una empresa nueva y especializada en liberar a su equipo de tareas repetitivas implementando automatizaciones inteligentes que trabajan 24/7. 
              <span className="font-semibold text-blue-600"> Nos comprometemos a ayudarle a ahorrar entre 15-40 horas semanales</span> con resultados 
              medibles desde el primer mes.
            </p>
            
            <div className="mt-8 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-black flex items-center mb-3">
                  <Video className="h-6 w-6 mr-2 text-blue-600" />
                  Implementación Guiada Paso a Paso
                </h3>
                <p className="text-left mb-4 text-gray-700">
                  Le acompañamos en videollamadas personalizadas durante todo el proceso de automatización, 
                  desde el análisis inicial hasta la implementación final y capacitación de su equipo. 
                  <strong className="text-blue-600"> Garantizamos resultados o devolvemos su inversión.</strong>
                </p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-black mb-3">Beneficios Proyectados</h4>
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
                <strong>Compromiso de transparencia:</strong> Somos una empresa nueva en este sector, pero contamos con un equipo especializado 
                y tecnología de vanguardia. Nos comprometemos a entregar resultados concretos o reembolsamos su inversión.
              </p>
            </div>
          </div>
        </div>

        {/* Packs de automatización destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black text-center mb-8">Paquetes de Automatización</h3>
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
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex flex-col items-start">
                    {pack.icon}
                    <CardTitle className="text-xl font-semibold text-black mb-2">
                      {pack.title}
                    </CardTitle>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {pack.savings}
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
          <h3 className="text-2xl font-bold text-black text-center mb-8">Nuestros Servicios de Automatización</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-300 bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex flex-col items-start">
                    {service.icon}
                    <CardTitle className="text-xl font-semibold text-black">
                      {service.title}
                    </CardTitle>
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
