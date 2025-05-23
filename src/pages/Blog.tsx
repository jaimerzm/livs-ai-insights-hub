
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Cómo la Inteligencia Artificial está Transformando las Empresas Españolas en 2024",
      excerpt: "Descubre las últimas tendencias en IA empresarial y cómo LIVS ayuda a las compañías a implementar soluciones de inteligencia artificial que aumentan la productividad hasta un 40%.",
      content: "La inteligencia artificial ha dejado de ser una tecnología futurista para convertirse en una necesidad empresarial. En LIVS, hemos ayudado a más de 50 empresas españolas a implementar soluciones de IA que han transformado sus operaciones...",
      date: "15 de Enero, 2024",
      author: "Equipo LIVS",
      readTime: "8 min lectura",
      tags: ["Consultoría IA", "Transformación Digital", "Empresas"],
      slug: "ia-transformando-empresas-espana-2024"
    },
    {
      id: 2,
      title: "Automatización Inteligente: La Clave para Reducir Costes Operativos",
      excerpt: "Aprende cómo la automatización con IA puede reducir hasta un 60% los costes operativos de tu empresa. Casos reales de éxito en consultoría de inteligencia artificial.",
      content: "La automatización inteligente va más allá de la simple automatización de procesos. En LIVS, desarrollamos sistemas que aprenden y se adaptan a las necesidades específicas de cada empresa...",
      date: "8 de Enero, 2024",
      author: "Jaime Ruiz",
      readTime: "6 min lectura",
      tags: ["Automatización", "Consultoría IA", "Eficiencia"],
      slug: "automatizacion-inteligente-reducir-costes"
    },
    {
      id: 3,
      title: "Análisis Predictivo con IA: Anticiparse al Futuro del Negocio",
      excerpt: "Descubre cómo el análisis predictivo puede ayudar a tu empresa a tomar decisiones estratégicas basadas en datos. Consultoría especializada en IA predictiva.",
      content: "El análisis predictivo permite a las empresas anticiparse a tendencias del mercado, comportamientos de clientes y riesgos operacionales. En LIVS, implementamos modelos de machine learning...",
      date: "3 de Enero, 2024",
      author: "Manuel Talón",
      readTime: "7 min lectura",
      tags: ["Análisis Predictivo", "Machine Learning", "Consultoría IA"],
      slug: "analisis-predictivo-ia-futuro-negocio"
    },
    {
      id: 4,
      title: "Implementación de IA en PYMES: Guía Completa para Empresarios",
      excerpt: "Una guía práctica para implementar inteligencia artificial en pequeñas y medianas empresas. Consultoría accesible y personalizada en IA empresarial.",
      content: "Muchas PYMES creen que la inteligencia artificial está fuera de su alcance. En LIVS, demostramos que incluso las empresas más pequeñas pueden beneficiarse enormemente de la IA...",
      date: "28 de Diciembre, 2023",
      author: "Equipo LIVS",
      readTime: "9 min lectura",
      tags: ["PYMES", "Consultoría IA", "Implementación"],
      slug: "implementacion-ia-pymes-guia-completa"
    },
    {
      id: 5,
      title: "ChatGPT vs Soluciones de IA Personalizadas: ¿Qué Conviene Más a tu Empresa?",
      excerpt: "Comparamos las ventajas de usar herramientas genéricas como ChatGPT frente a desarrollar soluciones de IA personalizadas para tu empresa.",
      content: "Mientras que ChatGPT y otras herramientas de IA generativa han democratizado el acceso a la inteligencia artificial, las empresas que buscan ventajas competitivas necesitan soluciones personalizadas...",
      date: "20 de Diciembre, 2023",
      author: "Jaime Ruiz",
      readTime: "5 min lectura",
      tags: ["ChatGPT", "IA Personalizada", "Consultoría"],
      slug: "chatgpt-vs-ia-personalizada-empresas"
    },
    {
      id: 6,
      title: "ROI de la Inteligencia Artificial: Cómo Medir el Éxito de tu Inversión",
      excerpt: "Aprende a calcular y medir el retorno de inversión de proyectos de IA. Métricas clave y casos de éxito en consultoría de inteligencia artificial.",
      content: "Invertir en inteligencia artificial requiere una estrategia clara de medición de resultados. En LIVS, ayudamos a nuestros clientes a establecer KPIs específicos y medir el ROI real...",
      date: "15 de Diciembre, 2023",
      author: "Manuel Talón",
      readTime: "8 min lectura",
      tags: ["ROI", "Métricas IA", "Consultoría Empresarial"],
      slug: "roi-inteligencia-artificial-medir-exito"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog de IA | LIVS - Consultoría en Inteligencia Artificial</title>
        <meta name="description" content="Blog especializado en inteligencia artificial empresarial. Artículos sobre consultoría IA, automatización, análisis predictivo y transformación digital para empresas." />
        <meta name="keywords" content="consultoría IA, inteligencia artificial empresas, blog IA, automatización inteligente, análisis predictivo, transformación digital, consultoría inteligencia artificial" />
        <meta property="og:title" content="Blog de IA | LIVS - Consultoría en Inteligencia Artificial" />
        <meta property="og:description" content="Descubre las últimas tendencias en IA empresarial y cómo implementar soluciones de inteligencia artificial en tu empresa." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://livs.es/blog" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-livs-blue to-livs-purple text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog de Inteligencia Artificial
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Insights, tendencias y casos de éxito en consultoría de IA empresarial
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <button className="flex items-center gap-2 text-livs-blue hover:text-livs-purple font-medium transition-colors">
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Listo para Transformar tu Empresa con IA?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nuestros expertos en consultoría de inteligencia artificial están listos para ayudarte a implementar soluciones personalizadas.
              </p>
              <Link 
                to="/#contacto" 
                className="inline-flex items-center gap-2 bg-livs-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-livs-purple transition-colors"
              >
                Solicitar Consultoría Gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
