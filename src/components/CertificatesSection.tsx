import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Clock, BookOpen } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Google: Inteligencia Artificial y productividad",
      provider: "Google",
      duration: "22 Horas",
      modules: "8 Módulos",
      image: "/lovable-uploads/3e45451c-8744-47a5-9d58-767ef5d137b2.png",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Microsoft Copilot",
      provider: "Microsoft",
      duration: "8 Horas",
      modules: "2 Módulos",
      image: "/lovable-uploads/08113367-c8c5-4621-8e44-51ba7a1c2856.png",
      color: "bg-cyan-500"
    },
    {
      id: 3,
      title: "IA Generativa - MIT",
      provider: "MIT",
      duration: "28 Horas",
      modules: "8 Módulos",
      image: "/lovable-uploads/bcd8e88c-295c-4f45-a8b5-fd6591a27968.png",
      color: "bg-red-500"
    },
    {
      id: 4,
      title: "ChatGPT Avanzado",
      provider: "OpenAI",
      duration: "8 Horas",
      modules: "2 Módulos",
      image: "/lovable-uploads/081e55fa-b2f9-4560-b36d-858fee78e963.png",
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Prompting Responsable para Negocios",
      provider: "Microsoft",
      duration: "12 Horas",
      modules: "2 Módulos",
      image: "/lovable-uploads/3bdd4743-262a-4f97-b152-18e56a0d199a.png",
      color: "bg-purple-500"
    }
  ];

  // Mostrar solo los primeros 4 en desktop, todos en móvil con scroll
  const featuredCerts = certificates.slice(0, 4);

  return (
    <section id="certificados" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header compacto */}
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-3">
            <Award className="w-3 h-3 mr-1" />
            Formación Certificada
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Respaldados por los líderes en IA
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Formación continua en Google, Microsoft, MIT y OpenAI para garantizar soluciones de vanguardia.
          </p>
        </div>

        {/* Grid de certificaciones - más compacto y visual */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {featuredCerts.map((cert) => (
            <div 
              key={cert.id} 
              className="group relative bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Indicador de color */}
              <div className={`absolute top-0 left-4 right-4 h-1 ${cert.color} rounded-b-full opacity-60`} />
              
              {/* Imagen del certificado */}
              <div className="aspect-[4/3] mb-3 overflow-hidden rounded-lg bg-white border border-gray-100">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div>
                <Badge variant="secondary" className="mb-2 text-xs">
                  {cert.provider}
                </Badge>
                <h3 className="font-medium text-sm text-gray-900 line-clamp-2 mb-2">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {cert.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer de confianza */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            +{certificates.length * 10} horas de formación certificada en IA empresarial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
