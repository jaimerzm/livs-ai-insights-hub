import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToBlogButton from '@/components/BackToBlogButton';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet';

const IAGenerativaMarketing2025 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IA Generativa en el Marketing Digital: Revolucionando la Creatividad Empresarial | LIVS</title>
        <meta name="description" content="Descubre cómo la IA generativa está transformando las estrategias de marketing digital y creando nuevas oportunidades de negocio en 2025." />
        <meta name="keywords" content="IA generativa, marketing digital, creatividad empresarial, consultoría IA, automatización marketing" />
        <meta property="og:title" content="IA Generativa en el Marketing Digital: Revolucionando la Creatividad Empresarial" />
        <meta property="og:description" content="Explora cómo la IA generativa está transformando las estrategias de marketing digital y creando nuevas oportunidades de negocio." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href="https://livs.es/blog/ia-generativa-marketing-digital-2025" />
      </Helmet>

      <Navbar />
      <BackToBlogButton />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="IA Generativa en Marketing Digital"
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">IA Generativa</span>
                    <span className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">Marketing Digital</span>
                    <span className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">Creatividad</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    IA Generativa en el Marketing Digital: Revolucionando la Creatividad Empresarial
                  </h1>
                  
                  <div className="flex items-center gap-6 text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Laura García</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>20 de Enero, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>7 min lectura</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-400 italic mb-4">
                    *Los casos y ejemplos mencionados en este artículo, incluidas las referencias a personas, son ficticios y se utilizan únicamente con fines ilustrativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  La inteligencia artificial generativa está revolucionando el marketing digital de formas que parecían imposibles hace apenas unos años. En 2025, las empresas que adopten estas tecnologías tendrán una ventaja competitiva significativa.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">¿Qué es la IA Generativa en Marketing?</h2>
                <p className="text-gray-700 mb-6">
                  La IA generativa en marketing se refiere al uso de algoritmos de inteligencia artificial capaces de crear contenido original: desde textos publicitarios hasta imágenes, videos y campañas completas. Esta tecnología permite a las empresas generar contenido personalizado a escala masiva.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Principales Aplicaciones en 2025</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Creación de Contenido Personalizado</h3>
                <p className="text-gray-700 mb-4">
                  Las empresas pueden generar miles de variaciones de anuncios, emails y publicaciones en redes sociales adaptados a diferentes segmentos de audiencia.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Generación de Imágenes y Videos</h3>
                <p className="text-gray-700 mb-4">
                  La IA puede crear assets visuales únicos para cada campaña, reduciendo costes de producción y acelerando el time-to-market.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Optimización de Campañas en Tiempo Real</h3>
                <p className="text-gray-700 mb-6">
                  Los algoritmos analizan el rendimiento y generan automáticamente nuevas variaciones de contenido para mejorar los resultados.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Beneficios Cuantificables</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">Reducción del 70% en tiempo de creación de contenido</li>
                  <li className="mb-2">Aumento del 45% en engagement rates</li>
                  <li className="mb-2">Mejora del 35% en conversiones</li>
                  <li className="mb-2">Reducción del 60% en costes de producción creativa</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Casos de Éxito Reales</h2>
                <p className="text-gray-700 mb-4">
                  Una empresa de e-commerce implementó IA generativa para crear descripciones de productos personalizadas, resultando en un aumento del 28% en ventas online.
                </p>
                <p className="text-gray-700 mb-6">
                  Otra compañía utilizó IA para generar creatividades publicitarias A/B testing automatizado, mejorando su ROI publicitario en un 52%.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementación Estratégica</h2>
                <p className="text-gray-700 mb-4">
                  Para implementar exitosamente IA generativa en marketing, es crucial:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">Definir objetivos claros y métricas de éxito</li>
                  <li className="mb-2">Seleccionar las herramientas adecuadas para cada caso de uso</li>
                  <li className="mb-2">Entrenar a los equipos en las nuevas tecnologías</li>
                  <li className="mb-2">Establecer procesos de calidad y revisión</li>
                  <li className="mb-2">Integrar con sistemas existentes de marketing</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">El Futuro del Marketing con IA</h2>
                <p className="text-gray-700 mb-6">
                  En 2025, veremos una evolución hacia marketing completamente personalizado donde cada cliente recibe contenido único generado en tiempo real. Las empresas que no adopten estas tecnologías quedarán obsoletas en el mercado digital.
                </p>

                <div className="bg-livs-blue/5 border-l-4 border-livs-blue p-6 mt-12">
                  <h3 className="text-lg font-semibold text-livs-blue mb-2">💡 Consejo del Experto</h3>
                  <p className="text-gray-700">
                    Comienza con proyectos piloto pequeños para probar la IA generativa en marketing. Mide resultados, aprende y escala gradualmente. La clave está en la experimentación controlada y el aprendizaje continuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Artículos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link to="/blog/chatbots-inteligentes-atencion-cliente" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chatbots Inteligentes" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Chatbots Inteligentes: Mejorando la Atención al Cliente</h3>
                    <p className="text-gray-600 text-sm">Implementa chatbots que mejoren la experiencia del cliente...</p>
                  </div>
                </Link>
                <Link to="/blog/automatizacion-inteligente-reducir-costes" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Automatización Inteligente" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Automatización Inteligente para Reducir Costes</h3>
                    <p className="text-gray-600 text-sm">Reduce hasta un 60% los costes operativos con automatización...</p>
                  </div>
                </Link>
                <Link to="/blog/ia-recursos-humanos-gestion-talento" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="IA en RRHH" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">IA en Recursos Humanos: Gestión del Talento</h3>
                    <p className="text-gray-600 text-sm">Revoluciona la gestión de RRHH con inteligencia artificial...</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-livs-blue to-livs-purple py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">¿Quieres Implementar IA Generativa en tu Marketing?</h2>
              <p className="text-xl mb-8">Nuestros expertos te ayudan a transformar tu estrategia de marketing con IA generativa.</p>
              <Link to="/#contacto" className="inline-flex items-center gap-2 bg-white text-livs-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <BookOpen className="w-5 h-5" />
                Solicitar Consultoría Especializada
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IAGenerativaMarketing2025;
