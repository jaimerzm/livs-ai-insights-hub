import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, BrainCircuit, Code, Video, GraduationCap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  // Servicios principales - Automatización
  const mainServices = [
    {
      icon: <Phone className="h-12 w-12 text-livs-purple" />,
      title: "Llamadas Automatizadas con IA",
      description: "Sistema inteligente que responde llamadas, cualifica leads y registra información automáticamente. Ideal para empresas con alto volumen de llamadas.",
      benefits: ["Atención 24/7", "Cualificación automática", "Integración con CRM"],
      showDemo: true,
      demoType: 'video'
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-livs-purple" />,
      title: "Chatbots Empresariales",
      description: "Chatbot personalizado con el conocimiento de tu empresa. Atiende consultas, agenda citas y captura leads mientras tu equipo descansa.",
      benefits: ["Reducción de consultas repetitivas", "Captura de leads 24/7", "Escalable sin límite"],
      showDemo: true,
      demoType: 'chat'
    }
  ];

  // Servicios complementarios
  const complementaryServices = [
    {
      icon: <Video className="h-8 w-8 text-livs-purple" />,
      title: "Videos con IA",
      description: "Contenido de video generado con IA para redes sociales y marketing digital.",
    },
    {
      icon: <Code className="h-8 w-8 text-livs-purple" />,
      title: "Landing Pages Optimizadas",
      description: "Páginas web diseñadas para convertir visitantes en clientes.",
    }
  ];

  // Sectores objetivo (ICP)
  const targetSectors = [
    { name: "Clínicas y salud", problem: "Reciben muchas llamadas para citas" },
    { name: "Inmobiliarias", problem: "Consultas de propiedades 24/7" },
    { name: "E-commerce", problem: "Soporte y seguimiento de pedidos" },
    { name: "Academias", problem: "Gestión de matrículas y consultas" },
    { name: "Servicios profesionales", problem: "Cualificación de leads entrantes" },
    { name: "Hoteles y turismo", problem: "Reservas y atención multiidioma" }
  ];

  const scrollToContact = () => {
    const section = document.getElementById('contacto');
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-livs-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-livs-purple/10 text-livs-purple border-livs-purple/20">
            Especialistas en Automatización
          </Badge>
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">
            Automatiza la atención y captación de clientes
          </h2>
          <p className="text-livs-gray-dark text-lg">
            Reduce costes operativos y escala tu negocio sin ampliar plantilla. 
            Soluciones probadas para empresas que ya facturan y quieren optimizar.
          </p>
        </div>

        {/* Servicios Principales */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-livs-blue text-center mb-8 flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-livs-purple/30"></span>
            Servicios Principales
            <span className="w-12 h-px bg-livs-purple/30"></span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-2 border-livs-purple/20 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-livs-purple/10 rounded-xl">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-livs-blue mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-livs-gray-dark text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-sm text-livs-gray-dark bg-gray-50 px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {service.demoType === 'chat' && (
                      <Button 
                        className="bg-livs-purple hover:bg-livs-purple/90 text-white"
                        onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
                      >
                        Probar Demo
                      </Button>
                    )}
                    {service.demoType === 'video' && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-livs-purple hover:bg-livs-purple/90 text-white">
                            Ver Demo
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full">
                          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <video 
                              controls 
                              className="absolute top-0 left-0 w-full h-full rounded-lg" 
                              src="/demo-videos/call-manager-demo.mp4"
                            >
                              Tu navegador no soporta la reproducción de video.
                            </video>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    <Button 
                      variant="outline" 
                      className="border-livs-purple text-livs-purple hover:bg-livs-purple/5"
                      onClick={scrollToContact}
                    >
                      Solicitar información
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sectores objetivo (ICP) */}
        <div className="mb-16 bg-gradient-to-br from-livs-blue to-livs-purple rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">¿Es tu empresa como estas?</h3>
            <p className="text-white/80">Ayudamos a empresas que enfrentan estos desafíos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetSectors.map((sector, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <h4 className="font-semibold text-lg mb-1">{sector.name}</h4>
                <p className="text-white/70 text-sm">{sector.problem}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              onClick={scrollToContact}
              className="bg-white text-livs-purple hover:bg-white/90 font-semibold px-8 py-3"
            >
              Cuéntanos tu caso <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Servicios Complementarios */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-livs-blue text-center mb-8 flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-livs-purple/30"></span>
            Servicios Complementarios
            <span className="w-12 h-px bg-livs-purple/30"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {complementaryServices.map((service, index) => (
              <Card key={index} className="border border-livs-gray bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-livs-purple/10 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-livs-blue mb-1">{service.title}</h4>
                      <p className="text-livs-gray-dark text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Refuerzo de autoridad */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-livs-gray">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-livs-purple" />
                <span className="text-livs-gray-dark">Consultoría especializada</span>
              </div>
              <div className="w-px h-6 bg-gray-200 hidden md:block" />
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-livs-purple" />
                <span className="text-livs-gray-dark">Formación para equipos</span>
              </div>
            </div>
            <Button 
              variant="link" 
              className="text-livs-purple hover:text-livs-purple/80"
              onClick={() => {
                const section = document.getElementById('certificados');
                if (section) {
                  window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
                }
              }}
            >
              Ver certificaciones <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
