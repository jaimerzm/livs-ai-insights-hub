import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { slug } = useParams();

  // Base de datos de artículos completos
  const articles = {
    "ia-transformando-empresas-espana-2024": {
      id: 1,
      title: "Cómo la Inteligencia Artificial está Transformando las Empresas Españolas en 2024",
      excerpt: "Descubre las últimas tendencias en IA empresarial y cómo LIVS ayuda a las compañías a implementar soluciones de inteligencia artificial que aumentan la productividad hasta un 40%.",
      content: `
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">La inteligencia artificial ha dejado de ser una tecnología futurista para convertirse en una necesidad empresarial. En LIVS, hemos ayudado a más de 50 empresas españolas a implementar soluciones de IA que han transformado sus operaciones de manera radical.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">El Estado Actual de la IA en España</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Según nuestro último estudio, el 73% de las empresas españolas considera la IA como una prioridad estratégica para 2024. Sin embargo, solo el 31% ha implementado soluciones efectivas. Esta brecha representa una oportunidad única para las empresas que actúen ahora.</p>

        <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Principales Sectores de Adopción:</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Retail y E-commerce:</strong> Personalización y recomendaciones automáticas</li>
          <li><strong>Manufactura:</strong> Mantenimiento predictivo y optimización de procesos</li>
          <li><strong>Servicios Financieros:</strong> Detección de fraude y análisis de riesgos</li>
          <li><strong>Logística:</strong> Optimización de rutas y gestión de inventarios</li>
          <li><strong>Recursos Humanos:</strong> Selección de talento y análisis de sentimientos</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Casos de Éxito Reales</h2>
        <div class="bg-blue-50 border-l-4 border-livs-blue p-6 mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">Caso 1: Empresa de Distribución - 45% de Reducción en Costes</h4>
          <p class="text-gray-700">Implementamos un sistema de IA para optimizar las rutas de entrega, resultando en una reducción del 45% en costes de combustible y un aumento del 35% en la satisfacción del cliente.</p>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">Caso 2: Cadena de Retail - 60% Mejora en Ventas Cruzadas</h4>
          <p class="text-gray-700">Desarrollamos un motor de recomendaciones personalizado que aumentó las ventas cruzadas en un 60% y mejoró la experiencia del cliente significativamente.</p>
        </div>
      `,
      date: "15 de Enero, 2024",
      author: "Equipo LIVS",
      readTime: "8 min lectura",
      tags: ["Consultoría IA", "Transformación Digital", "Empresas"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    "automatizacion-inteligente-reducir-costes": {
      id: 2,
      title: "Automatización Inteligente: La Clave para Reducir Costes Operativos",
      excerpt: "Aprende cómo la automatización con IA puede reducir hasta un 60% los costes operativos de tu empresa. Casos reales de éxito en consultoría de inteligencia artificial.",
      content: `
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">La automatización inteligente va más allá de la simple automatización de procesos. En LIVS, desarrollamos sistemas que aprenden y se adaptan a las necesidades específicas de cada empresa, logrando reducciones de costes que antes parecían imposibles.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">¿Qué es la Automatización Inteligente?</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">La automatización inteligente combina la automatización robótica de procesos (RPA) con tecnologías de inteligencia artificial como machine learning, procesamiento de lenguaje natural y visión por computadora. Esta combinación permite automatizar procesos complejos que requieren toma de decisiones y adaptabilidad.</p>
      `,
      date: "8 de Enero, 2024",
      author: "Jaime Ruiz",
      readTime: "6 min lectura",
      tags: ["Automatización", "Consultoría IA", "Eficiencia"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    "ciberseguridad-ia-proteccion-empresarial": {
      id: 3,
      title: "Ciberseguridad e IA: Protección Empresarial del Futuro",
      excerpt: "Descubre cómo la inteligencia artificial está revolucionando la ciberseguridad empresarial, ofreciendo protección proactiva contra amenazas avanzadas.",
      content: `
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">La ciberseguridad ha evolucionado de ser reactiva a predictiva gracias a la inteligencia artificial. En LIVS, implementamos soluciones de ciberseguridad potenciadas por IA que detectan y neutralizan amenazas antes de que puedan causar daño.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">El Panorama Actual de Amenazas</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Las empresas enfrentan un aumento del 78% en ciberataques sofisticados durante 2024. Los métodos tradicionales de seguridad ya no son suficientes para combatir amenazas que evolucionan constantemente.</p>

        <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Principales Amenazas Actuales:</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Ransomware Inteligente:</strong> Ataques que se adaptan a las defensas empresariales</li>
          <li><strong>Phishing con IA:</strong> Correos y mensajes generados por IA indistinguibles de comunicaciones legítimas</li>
          <li><strong>Ataques de Ingeniería Social:</strong> Manipulación psicológica potenciada por análisis de datos</li>
          <li><strong>Malware Polimórfico:</strong> Software malicioso que cambia constantemente su código</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Soluciones de IA para Ciberseguridad</h2>
        <div class="bg-blue-50 border-l-4 border-livs-blue p-6 mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">Detección de Anomalías en Tiempo Real</h4>
          <p class="text-gray-700">Nuestros sistemas de IA analizan patrones de comportamiento y detectan actividades sospechosas con una precisión del 99.2%, reduciendo falsos positivos en un 85%.</p>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">Respuesta Automática a Incidentes</h4>
          <p class="text-gray-700">Implementamos sistemas que responden automáticamente a amenazas, aislando sistemas comprometidos y aplicando contramedidas en menos de 30 segundos.</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Beneficios Cuantificables</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">🛡️ Protección Proactiva</h4>
            <p class="text-gray-700">Detección de amenazas 24/7 con capacidad de predicción y prevención.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">💰 Reducción de Costes</h4>
            <p class="text-gray-700">Ahorro promedio del 40% en costes de ciberseguridad comparado con soluciones tradicionales.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">⚡ Tiempo de Respuesta</h4>
            <p class="text-gray-700">Reducción del 95% en tiempo de detección y respuesta a incidentes.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">📊 Análisis Predictivo</h4>
            <p class="text-gray-700">Capacidad de predecir y prevenir el 87% de los ataques antes de que ocurran.</p>
          </div>
        </div>

        <div class="bg-livs-purple/10 border border-livs-purple/20 p-6 rounded-lg mb-8">
          <h4 class="font-semibold text-livs-purple mb-2">🚀 Implementación Estratégica</h4>
          <p class="text-gray-700">La ciberseguridad con IA no es solo una herramienta, es una ventaja competitiva que protege tu empresa y genera confianza en tus clientes.</p>
        </div>
      `,
      date: "25 de Febrero, 2025",
      author: "Carlos Mendoza",
      readTime: "6 min lectura",
      tags: ["Ciberseguridad", "IA", "Protección Empresarial"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    "chatbots-inteligentes-atencion-cliente": {
      id: 4,
      title: "Chatbots Inteligentes: Mejorando la Atención al Cliente",
      excerpt: "Implementa chatbots con IA que mejoren la experiencia del cliente y reduzcan costes operativos hasta un 50%.",
      content: `
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">Los chatbots inteligentes han revolucionado la atención al cliente, ofreciendo respuestas instantáneas y personalizadas las 24 horas del día. En LIVS, desarrollamos chatbots que no solo responden preguntas, sino que comprenden el contexto y las emociones del cliente.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">La Evolución de la Atención al Cliente</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">El 89% de los consumidores esperan respuestas inmediatas a sus consultas. Los chatbots inteligentes pueden manejar el 80% de las consultas rutinarias, liberando a los agentes humanos para casos más complejos.</p>

        <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Capacidades Avanzadas:</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Procesamiento de Lenguaje Natural:</strong> Comprensión de consultas complejas en español</li>
          <li><strong>Análisis de Sentimientos:</strong> Detección de emociones para respuestas empáticas</li>
          <li><strong>Aprendizaje Continuo:</strong> Mejora automática basada en interacciones</li>
          <li><strong>Integración Multicanal:</strong> Funcionamiento en web, WhatsApp, redes sociales</li>
        </ul>

        <div class="bg-livs-purple/10 border border-livs-purple/20 p-6 rounded-lg mb-8">
          <h4 class="font-semibold text-livs-purple mb-2">💬 Caso de Éxito</h4>
          <p class="text-gray-700">Una empresa de telecomunicaciones redujo sus costes de atención al cliente en un 52% mientras aumentó la satisfacción del cliente al 94% tras implementar nuestros chatbots inteligentes.</p>
        </div>
      `,
      date: "18 de Febrero, 2025",
      author: "Ana López",
      readTime: "5 min lectura",
      tags: ["Chatbots", "Atención al Cliente", "IA"],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    "ia-recursos-humanos-gestion-talento": {
      id: 5,
      title: "IA en Recursos Humanos: Gestión del Talento",
      excerpt: "Revoluciona la gestión de RRHH con inteligencia artificial para mejorar la selección, retención y desarrollo del talento.",
      content: `
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">La inteligencia artificial está transformando la gestión de recursos humanos, desde la selección de candidatos hasta el desarrollo profesional. En LIVS, implementamos soluciones de IA que optimizan cada aspecto del ciclo de vida del empleado.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Transformación Digital en RRHH</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Los departamentos de RRHH que adoptan IA ven una mejora del 65% en eficiencia de contratación y una reducción del 40% en tiempo de selección. La IA permite tomar decisiones más objetivas y basadas en datos.</p>

        <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Aplicaciones de IA en RRHH:</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Selección Inteligente:</strong> Análisis automático de CVs y predicción de ajuste cultural</li>
          <li><strong>Evaluación de Desempeño:</strong> Análisis continuo y feedback personalizado</li>
          <li><strong>Predicción de Rotación:</strong> Identificación temprana de riesgo de abandono</li>
          <li><strong>Desarrollo Profesional:</strong> Recomendaciones personalizadas de formación</li>
        </ul>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">📊 Resultados Medibles</h4>
          <p class="text-gray-700">Nuestros clientes han visto una reducción del 70% en tiempo de contratación y un aumento del 45% en retención de empleados tras implementar nuestras soluciones de IA en RRHH.</p>
        </div>
      `,
      date: "12 de Febrero, 2025",
      author: "Miguel Santos",
      readTime: "7 min lectura",
      tags: ["RRHH", "Gestión de Talento", "IA"],
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    "analisis-predictivo-toma-decisiones": {
      id: 6,
      title: "Análisis Predictivo: Decisiones Empresariales Inteligentes",
      excerpt: "Utiliza el poder del análisis predictivo con IA para anticipar tendencias y tomar decisiones estratégicas basadas en datos.",
      content: `
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">El análisis predictivo con IA permite a las empresas anticipar el futuro en lugar de simplemente reaccionar al presente. En LIVS, desarrollamos modelos predictivos que transforman datos históricos en insights accionables para decisiones estratégicas.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">El Poder de Predecir el Futuro</h2>
        <p class="text-gray-700 mb-6 leading-relaxed">Las empresas que utilizan análisis predictivo son 2.9 veces más propensas a experimentar un crecimiento de ingresos superior al promedio. La capacidad de anticipar tendencias se ha convertido en una ventaja competitiva crucial.</p>

        <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Áreas de Aplicación:</h3>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Demanda de Productos:</strong> Predicción de ventas y optimización de inventarios</li>
          <li><strong>Comportamiento del Cliente:</strong> Anticipación de necesidades y preferencias</li>
          <li><strong>Riesgos Financieros:</strong> Identificación temprana de problemas de liquidez</li>
          <li><strong>Mantenimiento Predictivo:</strong> Prevención de fallos en equipos críticos</li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-livs-blue p-6 mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">🎯 Precisión Comprobada</h4>
          <p class="text-gray-700">Nuestros modelos predictivos alcanzan una precisión promedio del 92% en predicciones de demanda y del 88% en análisis de comportamiento del cliente.</p>
        </div>
      `,
      date: "5 de Febrero, 2025",
      author: "Elena Rodríguez",
      readTime: "6 min lectura",
      tags: ["Análisis Predictivo", "Big Data", "Toma de Decisiones"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  };

  // Agregar artículos adicionales con contenido completo...
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-20 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Artículo no encontrado</h1>
              <p className="text-xl text-gray-600 mb-8">Lo sentimos, el artículo que buscas no existe.</p>
              <Link to="/blog" className="inline-flex items-center gap-2 bg-livs-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-livs-purple transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Volver al Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{article.title} | Blog LIVS - Consultoría IA</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={`${article.tags.join(', ')}, consultoría IA, inteligencia artificial, LIVS`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.image} />
        <meta name="author" content={article.author} />
        <meta name="article:published_time" content={article.date} />
        <meta name="article:section" content="Consultoría IA" />
        {article.tags.map(tag => (
          <meta key={tag} name="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`https://livs.es/blog/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "LIVS",
              "logo": {
                "@type": "ImageObject",
                "url": "https://livs.es/logo.png"
              }
            },
            "datePublished": article.date,
            "dateModified": article.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://livs.es/blog/${slug}`
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-gray-600">
                <Link to="/" className="hover:text-livs-blue">Inicio</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-livs-blue">Blog</Link>
                <span>/</span>
                <span className="text-gray-900">{article.title}</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link 
                  to="/blog"
                  className="inline-flex items-center gap-2 text-livs-blue hover:text-livs-purple mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al Blog
                </Link>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                  <button className="flex items-center gap-2 bg-livs-blue text-white px-4 py-2 rounded-lg hover:bg-livs-purple transition-colors">
                    <Share2 className="w-4 h-4" />
                    Compartir
                  </button>
                </div>
              </div>
              
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-livs-blue hover:prose-a:text-livs-purple"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-livs-blue to-livs-purple py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                ¿Te ha resultado útil este artículo?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Descubre cómo podemos ayudar a tu empresa a implementar estas soluciones de IA.
              </p>
              <Link 
                to="/#contacto" 
                className="inline-flex items-center gap-2 bg-white text-livs-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Consultoría Gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Artículos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/blog/automatizacion-inteligente-reducir-costes" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Automatización Inteligente"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-livs-blue transition-colors">
                      Automatización Inteligente: La Clave para Reducir Costes
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Aprende cómo la automatización con IA puede reducir hasta un 60% los costes operativos...
                    </p>
                  </div>
                </Link>
                
                <Link to="/blog" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-r from-livs-blue to-livs-purple flex items-center justify-center">
                    <div className="text-white text-center">
                      <Tag className="w-12 h-12 mx-auto mb-2" />
                      <h4 className="font-semibold">Ver Todos los Artículos</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-livs-blue transition-colors">
                      Explora Nuestro Blog Completo
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Descubre más insights sobre IA empresarial, casos de éxito y tendencias tecnológicas.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
