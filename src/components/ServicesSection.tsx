
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, TrendingUp, LineChart, Database, Code, Users } from 'lucide-react';

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

  return (
    <section id="servicios" className="py-20 bg-livs-gray-light">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-livs-gray-dark text-lg">
              Ofrecemos un conjunto completo de servicios de consultoría en inteligencia artificial
              adaptados a las necesidades específicas de su organización.
            </p>
          </div>

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
      </div>
    </section>
  );
};

export default ServicesSection;
