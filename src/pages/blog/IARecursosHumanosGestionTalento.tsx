
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet';

const IARecursosHumanosGestionTalento = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IA en Recursos Humanos: Revolución en la Gestión del Talento | LIVS</title>
        <meta name="description" content="Descubre cómo la inteligencia artificial está transformando la gestión de recursos humanos y el reclutamiento empresarial." />
        <meta name="keywords" content="IA recursos humanos, reclutamiento inteligente, gestión talento, automatización RRHH" />
        <meta property="og:title" content="IA en Recursos Humanos: Revolución en la Gestión del Talento" />
        <meta property="og:description" content="Explora cómo la IA está transformando la gestión de recursos humanos y mejorando los procesos de reclutamiento." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href="https://livs.es/blog/ia-recursos-humanos-gestion-talento" />
      </Helmet>

      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-livs-blue hover:text-livs-purple mb-8 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al Blog
              </Link>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="IA en Recursos Humanos"
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">IA en RRHH</span>
                    <span className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">Gestión del Talento</span>
                    <span className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">Reclutamiento</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    IA en Recursos Humanos: Revolución en la Gestión del Talento
                  </h1>
                  
                  <div className="flex items-center gap-6 text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Laura García</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>18 de Enero, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>8 min lectura</span>
                    </div>
                  </div>
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
                  ¿Te imaginas un departamento de RRHH que funcione las 24 horas, que jamás se canse de revisar currículums y que pueda predecir qué candidatos tendrán mejor rendimiento? No es ciencia ficción: es la realidad que ya están viviendo muchas empresas gracias a la inteligencia artificial.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">El Cambio de Paradigma en RRHH</h2>
                <p className="text-gray-700 mb-6">
                  La gestión tradicional de recursos humanos está experimentando su mayor transformación en décadas. Ya no hablamos solo de digitalizar procesos, sino de crear sistemas inteligentes que pueden tomar decisiones, aprender de patrones y mejorar continuamente.
                </p>
                <p className="text-gray-700 mb-6">
                  Esta evolución no es solo una tendencia tecnológica: es una necesidad empresarial. Las compañías que adopten estas herramientas tendrán una ventaja competitiva significativa en la guerra por el talento.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Reclutamiento Inteligente: Más Allá del CV</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Análisis Predictivo de Candidatos</h3>
                <p className="text-gray-700 mb-4">
                  Los sistemas de IA pueden analizar no solo la experiencia y formación de un candidato, sino también patrones de comportamiento, compatibilidad cultural y probabilidad de éxito en el puesto. Imagina poder predecir con un 85% de precisión si un candidato permanecerá más de dos años en la empresa.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Screening Automatizado Inteligente</h3>
                <p className="text-gray-700 mb-4">
                  Los chatbots de reclutamiento pueden realizar entrevistas preliminares, evaluar habilidades técnicas y soft skills, y clasificar automáticamente a los candidatos según su idoneidad para el puesto.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Eliminación de Sesgos Inconscientes</h3>
                <p className="text-gray-700 mb-6">
                  La IA puede ayudar a crear procesos de selección más justos y diversos, eliminando sesgos basados en género, edad o background, y enfocándose únicamente en competencias y potencial.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Gestión del Rendimiento y Desarrollo</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Evaluaciones Continuas y Objetivas</h3>
                <p className="text-gray-700 mb-4">
                  Los sistemas inteligentes pueden monitorear el rendimiento de forma continua, proporcionando feedback en tiempo real y identificando oportunidades de mejora antes de que se conviertan en problemas.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Planes de Desarrollo Personalizados</h3>
                <p className="text-gray-700 mb-4">
                  La IA puede crear rutas de carrera individualizadas, recomendando formaciones específicas, proyectos y experiencias que maximicen el potencial de cada empleado.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Predicción de Rotación</h3>
                <p className="text-gray-700 mb-6">
                  Los algoritmos pueden identificar patrones que indican riesgo de abandono, permitiendo intervenciones proactivas para retener talento valioso.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Casos Reales de Transformación</h2>
                <p className="text-gray-700 mb-4">
                  Una multinacional del sector tecnológico implementó IA en su proceso de reclutamiento y redujo el tiempo de contratación de 45 a 12 días, mientras incrementó la retención de nuevos empleados en un 40%.
                </p>
                <p className="text-gray-700 mb-4">
                  Otra empresa del sector financiero utilizó análisis predictivo para identificar empleados con alto potencial de liderazgo, creando programas de desarrollo específicos que resultaron en un 60% más de promociones internas exitosas.
                </p>
                <p className="text-gray-700 mb-6">
                  Un grupo hotelero implementó chatbots para gestión de consultas de empleados, reduciendo la carga administrativa del departamento de RRHH en un 35% y mejorando la satisfacción laboral.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Herramientas y Tecnologías Clave</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sistemas de Gestión de Talento (TMS) con IA</h3>
                <p className="text-gray-700 mb-4">
                  Plataformas que integran machine learning para optimizar todos los aspectos de la gestión de personas, desde reclutamiento hasta desarrollo profesional.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Análisis de Sentimientos</h3>
                <p className="text-gray-700 mb-4">
                  Herramientas que analizan comunicaciones internas, encuestas y feedback para medir el clima laboral y detectar problemas antes de que escalen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Procesamiento de Lenguaje Natural</h3>
                <p className="text-gray-700 mb-6">
                  Sistemas que pueden analizar currículums, cartas de presentación y respuestas de entrevistas para extraer insights valiosos sobre candidatos y empleados.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Beneficios Cuantificables</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">Reducción del 60% en tiempo de reclutamiento</li>
                  <li className="mb-2">Mejora del 45% en precisión de selección de candidatos</li>
                  <li className="mb-2">Disminución del 35% en rotación de personal</li>
                  <li className="mb-2">Aumento del 50% en satisfacción de empleados</li>
                  <li className="mb-2">Reducción del 40% en costes de contratación</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementación Estratégica</h2>
                <p className="text-gray-700 mb-4">
                  La transformación digital de RRHH requiere un enfoque gradual y estratégico:
                </p>
                <ol className="list-decimal pl-6 text-gray-700 mb-6">
                  <li className="mb-2">Evaluación de procesos actuales y identificación de oportunidades</li>
                  <li className="mb-2">Selección de tecnologías adecuadas al tamaño y sector de la empresa</li>
                  <li className="mb-2">Formación del equipo de RRHH en nuevas herramientas</li>
                  <li className="mb-2">Implementación piloto en procesos específicos</li>
                  <li className="mb-2">Escalado gradual basado en resultados obtenidos</li>
                  <li className="mb-2">Monitoreo continuo y optimización</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">El Factor Humano: Complemento, No Reemplazo</h2>
                <p className="text-gray-700 mb-6">
                  Es crucial entender que la IA en RRHH no busca reemplazar el factor humano, sino potenciarlo. Los profesionales de recursos humanos pueden dedicar más tiempo a actividades estratégicas, coaching y desarrollo de relaciones, mientras la tecnología se encarga de tareas repetitivas y análisis de datos.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Preparándose para el Futuro</h2>
                <p className="text-gray-700 mb-6">
                  Las organizaciones que no adopten estas tecnologías se encontrarán en desventaja competitiva. El futuro de RRHH es híbrido: combinando la intuición y empatía humana con la precisión y eficiencia de la inteligencia artificial.
                </p>

                <div className="bg-livs-blue/5 border-l-4 border-livs-blue p-6 mt-12">
                  <h3 className="text-lg font-semibold text-livs-blue mb-2">💡 Reflexión Final</h3>
                  <p className="text-gray-700">
                    La IA en RRHH no es solo una herramienta tecnológica; es un catalizador para crear organizaciones más humanas, eficientes y exitosas. El momento de actuar es ahora: cada día que pasa sin implementar estas soluciones es una oportunidad perdida de mejorar la experiencia de empleados y candidatos.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">
                    * Los casos y ejemplos mencionados en este artículo, incluyendo las referencias a Laura García y otras personas, son ilustrativos y ficticios, creados con fines educativos y de demostración.
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
                <Link to="/blog/ia-generativa-marketing-digital-2025" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="IA Generativa Marketing" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">IA Generativa en Marketing Digital</h3>
                    <p className="text-gray-600 text-sm">Revoluciona tu estrategia de marketing con IA generativa...</p>
                  </div>
                </Link>
                <Link to="/blog/automatizacion-inteligente-reducir-costes" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Automatización Inteligente" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Automatización Inteligente para Reducir Costes</h3>
                    <p className="text-gray-600 text-sm">Optimiza procesos y reduce costes operativos...</p>
                  </div>
                </Link>
                <Link to="/blog/chatbots-inteligentes-atencion-cliente" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chatbots Inteligentes" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Chatbots Inteligentes: Mejorando la Atención al Cliente</h3>
                    <p className="text-gray-600 text-sm">Transforma la experiencia de atención al cliente...</p>
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
              <h2 className="text-3xl font-bold mb-6">¿Listo para Transformar tu Departamento de RRHH?</h2>
              <p className="text-xl mb-8">Descubre cómo implementar soluciones de IA que revolucionen la gestión del talento en tu organización.</p>
              <Link to="/#contacto" className="inline-flex items-center gap-2 bg-white text-livs-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <BookOpen className="w-5 h-5" />
                Explorar Soluciones Personalizadas
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IARecursosHumanosGestionTalento;
