
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Clock, BookOpen } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Google: Inteligencia Artificial y productividad",
      institution: "Google",
      issuer: "Santander Open Academy",
      completionDate: "27 de enero de 2025",
      duration: "22 Horas",
      modules: "8 Módulos",
      serialNumber: "OA-2025-041100100906",
      image: "/lovable-uploads/3e45451c-8744-47a5-9d58-767ef5d137b2.png",
      provider: "Google",
      color: "from-blue-500 to-green-500"
    },
    {
      id: 2,
      title: "Copilot",
      institution: "Microsoft",
      issuer: "Santander Open Academy", 
      completionDate: "22 de abril de 2025",
      duration: "8 Horas",
      modules: "2 Módulos",
      serialNumber: "OA-2025-042200103255Z",
      image: "/lovable-uploads/08113367-c8c5-4621-8e44-51ba7a1c2856.png",
      provider: "Microsoft",
      color: "from-blue-600 to-cyan-500"
    },
    {
      id: 3,
      title: "IA Generativa",
      institution: "MIT Professional Education",
      issuer: "Santander Open Academy",
      completionDate: "2 de febrero de 2025", 
      duration: "28 Horas",
      modules: "8 Módulos",
      serialNumber: "OA-2025-020200783310",
      image: "/lovable-uploads/bcd8e88c-295c-4f45-a8b5-fd6591a27968.png",
      provider: "MIT",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 4,
      title: "Curso de ChatGPT",
      institution: "OpenAI",
      issuer: "Santander Open Academy",
      completionDate: "3 de febrero de 2025",
      duration: "8 Horas", 
      modules: "2 Módulos",
      serialNumber: "OA-2025-020300786108",
      image: "/lovable-uploads/081e55fa-b2f9-4560-b36d-858fee78e963.png",
      provider: "OpenAI",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 5,
      title: "Prompting responsable: maximiza la IA en tu negocio",
      institution: "Microsoft Founderz",
      issuer: "Santander Open Academy",
      completionDate: "22 de abril de 2025",
      duration: "12 Horas",
      modules: "2 Módulos", 
      serialNumber: "OA-2025-042200103264Z",
      image: "/lovable-uploads/3bdd4743-262a-4f97-b152-18e56a0d199a.png",
      provider: "Microsoft",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certificaciones Profesionales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Formación continua en las últimas tecnologías de inteligencia artificial y herramientas empresariales más avanzadas del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <Card key={cert.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white">
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="mb-2">
                    <Award className="w-3 h-3 mr-1" />
                    {cert.provider}
                  </Badge>
                </div>

                <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {cert.issuer}
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Completado: {cert.completionDate}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{cert.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{cert.modules}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400">
                      Nº serie: {cert.serialNumber}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Formación certificada por las principales instituciones tecnológicas mundiales
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
