import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
const AboutSection = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
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
            <Button onClick={() => setShowFullBio(!showFullBio)} variant="default" size="default">
              {showFullBio ? "Leer menos" : "Leer más"}
              <ChevronDown className={`-me-1 ms-2 opacity-60 transition-transform ${showFullBio ? 'rotate-180' : ''}`} size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </div>
          <div className="order-first md:order-none flex justify-center">
            <img alt="Nuestro equipo" className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 w-10/12 md:w-3/4" src="/lovable-uploads/85ae4eb3-7ef5-4537-bbcc-8d5c31f6904f.jpg" />
          </div>
        </div>

        {showFullBio && <div className="animate-fade-in mt-2 p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
              <span className="relative">
                Nuestro Equipo Fundador
                <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-500 rounded-full"></span>
              </span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 shadow-md hover:shadow-xl transition-shadow bg-white transform hover:-translate-y-1 duration-300">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-black text-xl md:text-2xl">Manuel Talón</CardTitle>
                  <CardDescription className="text-black/70 font-medium">Visionario Emprendedor</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Manuel Talón es un emprendedor innovador , como cofundador de LIVS, aporta su  su pasión por conectar tecnologías disruptivas con necesidades empresariales concretas.
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

              <Card className="border-2 border-blue-200 shadow-md hover:shadow-xl transition-shadow bg-white transform hover:-translate-y-1 duration-300">
                <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50">
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
                    Como cofundador, Jaime ha aportado sus conocimientos de IA  para adaptadarlas a las necesidades específicas de cada cliente. Su enfoque combina rigor técnico con practicidad, asegurando que nuestras recomendaciones sean tanto innovadoras como implementables.
                  </p>
                  <p>
                    ​Aparte, es fundador de Sera VFX, ya que es Editor de Video Profesional &amp; Artista VFX.
Transformando ideas en experiencias visuales extraordinarias con precisión técnica y visión creativa.       
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-black font-medium text-lg mt-8 p-4 bg-white rounded-lg border border-blue-200 shadow-sm">
              Juntos, Manuel y Jaime han creado en LIVS una empresa que no solo proporciona información sobre inteligencia artificial, 
              sino que ofrece la orientación experta necesaria para convertir esa información en ventajas competitivas reales para 
              nuestros clientes.
            </p>
          </div>}
      </div>
    </section>;
};
export default AboutSection;