import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet';
import BlogPagination from '@/components/blog/BlogPagination';
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const articles = [{
    id: 1,
    title: "Cómo la Inteligencia Artificial está Transformando las Empresas Españolas en 2025",
    excerpt: "Descubre las últimas tendencias en IA empresarial y cómo LIVS ayuda a las compañías a implementar soluciones de inteligencia artificial que aumentan la productividad hasta un 40%.",
    date: "15 de Enero, 2025",
    author: "Equipo LIVS",
    readTime: "8 min lectura",
    tags: ["Consultoría IA", "Transformación Digital", "Empresas"],
    slug: "ia-transformando-empresas-espana-2025",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true
  }, {
    id: 2,
    title: "Automatización Inteligente: La Clave para Reducir Costes Operativos",
    excerpt: "Aprende cómo la automatización con IA puede reducir hasta un 60% los costes operativos de tu empresa. Casos reales de éxito en consultoría de inteligencia artificial.",
    date: "10 de Enero, 2025",
    author: "Jaime Ruiz",
    readTime: "6 min lectura",
    tags: ["Automatización", "Consultoría IA", "Eficiencia"],
    slug: "automatizacion-inteligente-reducir-costes",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 3,
    title: "Análisis Predictivo con IA: Anticiparse al Futuro del Negocio",
    excerpt: "Descubre cómo el análisis predictivo puede ayudar a tu empresa a tomar decisiones estratégicas basadas en datos. Consultoría especializada en IA predictiva.",
    date: "5 de Enero, 2025",
    author: "Manuel Talón",
    readTime: "7 min lectura",
    tags: ["Análisis Predictivo", "Machine Learning", "Consultoría IA"],
    slug: "analisis-predictivo-ia-futuro-negocio",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 4,
    title: "Implementación de IA en PYMES: Guía Completa para Empresarios",
    excerpt: "Una guía práctica para implementar inteligencia artificial en pequeñas y medianas empresas. Consultoría accesible y personalizada en IA empresarial.",
    date: "2 de Enero, 2025",
    author: "Equipo LIVS",
    readTime: "9 min lectura",
    tags: ["PYMES", "Consultoría IA", "Implementación"],
    slug: "implementacion-ia-pymes-guia-completa",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 5,
    title: "ChatGPT vs Soluciones de IA Personalizadas: ¿Qué Conviene Más a tu Empresa?",
    excerpt: "Comparamos las ventajas de usar herramientas genéricas como ChatGPT frente a desarrollar soluciones de IA personalizadas para tu empresa.",
    date: "28 de Diciembre, 2024",
    author: "Jaime Ruiz",
    readTime: "5 min lectura",
    tags: ["ChatGPT", "IA Personalizada", "Consultoría"],
    slug: "chatgpt-vs-ia-personalizada-empresas",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 6,
    title: "ROI de la Inteligencia Artificial: Cómo Medir el Éxito de tu Inversión",
    excerpt: "Aprende a calcular y medir el retorno de inversión de proyectos de IA. Métricas clave y casos de éxito en consultoría de inteligencia artificial.",
    date: "25 de Diciembre, 2024",
    author: "Manuel Talón",
    readTime: "8 min lectura",
    tags: ["ROI", "Métricas IA", "Consultoría Empresarial"],
    slug: "roi-inteligencia-artificial-medir-exito",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 7,
    title: "IA Generativa en el Marketing Digital: Revolucionando la Creatividad Empresarial",
    excerpt: "Explora cómo la IA generativa está transformando las estrategias de marketing digital y creando nuevas oportunidades de negocio en 2025.",
    date: "20 de Enero, 2025",
    author: "Laura García",
    readTime: "7 min lectura",
    tags: ["IA Generativa", "Marketing Digital", "Creatividad"],
    slug: "ia-generativa-marketing-digital-2025",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 8,
    title: "Ciberseguridad con IA: Protegiendo tu Empresa en la Era Digital",
    excerpt: "Descubre cómo la inteligencia artificial está revolucionando la ciberseguridad empresarial y protegiendo contra amenazas avanzadas.",
    date: "18 de Enero, 2025",
    author: "Carlos Mendoza",
    readTime: "6 min lectura",
    tags: ["Ciberseguridad", "IA", "Protección Digital"],
    slug: "ciberseguridad-ia-proteccion-empresarial",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 9,
    title: "Machine Learning para Optimizar la Cadena de Suministro",
    excerpt: "Aprende cómo el machine learning puede optimizar tu cadena de suministro, reducir costes y mejorar la eficiencia operativa.",
    date: "16 de Enero, 2025",
    author: "Ana Rodríguez",
    readTime: "8 min lectura",
    tags: ["Machine Learning", "Cadena de Suministro", "Optimización"],
    slug: "machine-learning-cadena-suministro",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 10,
    title: "Chatbots Inteligentes: Mejorando la Atención al Cliente con IA",
    excerpt: "Descubre cómo implementar chatbots inteligentes que mejoren la experiencia del cliente y reduzcan costes operativos.",
    date: "14 de Enero, 2025",
    author: "David López",
    readTime: "5 min lectura",
    tags: ["Chatbots", "Atención al Cliente", "IA Conversacional"],
    slug: "chatbots-inteligentes-atencion-cliente",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 11,
    title: "IA en Recursos Humanos: Transformando la Gestión del Talento",
    excerpt: "Explora cómo la inteligencia artificial está revolucionando la gestión de recursos humanos, desde la selección hasta el desarrollo del talento.",
    date: "12 de Enero, 2025",
    author: "María Fernández",
    readTime: "7 min lectura",
    tags: ["RRHH", "Gestión del Talento", "IA"],
    slug: "ia-recursos-humanos-gestion-talento",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }, {
    id: 12,
    title: "Computer Vision: Automatizando Procesos Visuales en la Industria",
    excerpt: "Descubre las aplicaciones de computer vision en la industria manufacturera y cómo puede automatizar procesos de control de calidad.",
    date: "8 de Enero, 2025",
    author: "Roberto Silva",
    readTime: "9 min lectura",
    tags: ["Computer Vision", "Automatización", "Industria 4.0"],
    slug: "computer-vision-automatizacion-industrial",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }];
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  // Pagination logic
  const totalPages = Math.ceil(regularArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = regularArticles.slice(startIndex, endIndex);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog de IA | LIVS - Consultoría en Inteligencia Artificial</title>
        <meta name="description" content="Blog especializado en inteligencia artificial empresarial. Artículos sobre consultoría IA, automatización, análisis predictivo y transformación digital para empresas." />
        <meta name="keywords" content="consultoría IA, inteligencia artificial empresas, blog IA, automatización inteligente, análisis predictivo, transformación digital, consultoría inteligencia artificial" />
        <meta property="og:title" content="Blog de IA | LIVS - Consultoría en Inteligencia Artificial" />
        <meta property="og:description" content="Descubre las últimas tendencias en IA empresarial y cómo implementar soluciones de inteligencia artificial en tu empresa." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={featuredArticle?.image} />
        <link rel="canonical" href="https://livs.es/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog de IA | LIVS",
          "description": "Blog especializado en consultoría de inteligencia artificial empresarial",
          "url": "https://livs.es/blog",
          "publisher": {
            "@type": "Organization",
            "name": "LIVS",
            "url": "https://livs.es"
          }
        })}
        </script>
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
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Insights, tendencias y casos de éxito en consultoría de IA empresarial
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Consultoría IA</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Automatización</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Machine Learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-8">
                  <Tag className="w-5 h-5 text-livs-purple" />
                  <span className="text-livs-purple font-semibold">Artículo Destacado</span>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full">
                      <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-8 lg:p-12">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredArticle.tags.map(tag => <span key={tag} className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                          </span>)}
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredArticle.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{featuredArticle.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredArticle.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredArticle.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${featuredArticle.slug}`} className="inline-flex items-center gap-2 bg-livs-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-livs-purple transition-colors">
                        Leer Artículo Completo
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>}

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Más Artículos sobre IA Empresarial
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map(article => <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 2).map(tag => <span key={tag} className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-xs font-medium">
                            {tag}
                          </span>)}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-livs-blue transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <span>{article.date}</span>
                      </div>
                      
                      <Link to={`/blog/${article.slug}`} className="flex items-center gap-2 text-livs-blue hover:text-livs-purple font-medium transition-colors text-sm">
                        Leer más
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>)}
              </div>

              {/* Pagination */}
              <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        

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
              <Link to="/#contacto" className="inline-flex items-center gap-2 bg-livs-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-livs-purple transition-colors">
                Solicitar Consultoría Gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Blog;