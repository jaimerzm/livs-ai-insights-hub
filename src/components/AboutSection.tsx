
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const AboutSection = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Sobre Nosotros
            </h2>
            <p className="text-gray-700 mb-4">
              Con una amplia experiencia en el desarrollo e implementación de soluciones de IA para empresas multinacionales. Especialista en aprendizaje automático y procesamiento del lenguaje natural.
            </p>
            
            <p className="text-gray-700 mb-4">
              Nuestra misión es ayudar a las empresas a aprovechar al máximo el potencial de la inteligencia artificial, ofreciendo soluciones innovadoras y personalizadas que impulsen su crecimiento y eficiencia.
            </p>
            <Button 
              onClick={() => setShowFullBio(!showFullBio)}
              variant="default"
              size="default"
            >
              {showFullBio ? "Leer menos" : "Leer más"}
              <ChevronDown className={`-me-1 ms-2 opacity-60 transition-transform ${showFullBio ? 'rotate-180' : ''}`} size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </div>
          <div className="order-first md:order-none">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Nuestro equipo" 
              className="rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </div>

        {showFullBio && (
          <div className="animate-fade-in space-y-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-10">
              Nuestro Equipo Fundador
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-black text-xl md:text-2xl">Manuel Talón</CardTitle>
                  <CardDescription className="text-black/70 font-medium">Visionario Emprendedor</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Manuel Talón es un empresario innovador con una trayectoria probada en la identificación de oportunidades de mercado emergentes. 
                    Como cofundador de LIVS, aporta su experiencia en desarrollo de negocios y su pasión por conectar tecnologías disruptivas con 
                    necesidades empresariales concretas.
                  </p>
                  <p>
                    Su visión estratégica ha sido fundamental para posicionar a LIVS como un puente entre la complejidad de la inteligencia 
                    artificial y las necesidades prácticas de las empresas. Manuel comprende los desafíos que enfrentan las organizaciones en su 
                    transformación digital y se especializa en traducir soluciones tecnológicas avanzadas en beneficios tangibles para nuestros clientes.
                  </p>
                  <p>
                    Con su liderazgo, LIVS se ha comprometido a democratizar el acceso a la información sobre IA, permitiendo que empresas de todos 
                    los tamaños aprovechen esta poderosa tecnología para impulsar su crecimiento.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-black text-xl md:text-2xl">Jaime Ruiz</CardTitle>
                  <CardDescription className="text-black/70 font-medium">Experto en Inteligencia Artificial</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Jaime Ruiz es un especialista en inteligencia artificial con amplia experiencia en el desarrollo e implementación de 
                    soluciones tecnológicas avanzadas. Su profundo conocimiento técnico y su capacidad para mantenerse a la vanguardia de 
                    las últimas innovaciones en IA constituyen el núcleo tecnológico de LIVS.
                  </p>
                  <p>
                    Como cofundador, Jaime ha diseñado nuestra metodología exclusiva para evaluar y recomendar implementaciones de IA 
                    adaptadas a las necesidades específicas de cada cliente. Su enfoque combina rigor técnico con practicidad, asegurando 
                    que nuestras recomendaciones sean tanto innovadoras como implementables.
                  </p>
                  <p>
                    Su experiencia abarca desde sistemas de procesamiento de lenguaje natural hasta análisis predictivo, habiendo 
                    colaborado con empresas de diversos sectores para transformar sus operaciones mediante la aplicación estratégica 
                    de tecnologías de IA.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-black font-medium text-lg mt-10">
              Juntos, Manuel y Jaime han creado en LIVS una empresa que no solo proporciona información sobre inteligencia artificial, 
              sino que ofrece la orientación experta necesaria para convertir esa información en ventajas competitivas reales para 
              nuestros clientes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
