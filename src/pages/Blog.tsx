import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet';
import BlogCards, { BlogArticle } from '@/components/ui/blog-cards';
import BlogPagination from '@/components/blog/BlogPagination';

const allArticles: BlogArticle[] = [
  {
    category: "AUTOMATIZACIÓN",
    title: "Automatización de Llamadas con IA: Guía Completa para Empresas en 2025",
    description: "Descubre cómo la automatización de llamadas con inteligencia artificial puede transformar la atención al cliente de tu empresa, reducir costes y mejorar la satisfacción.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "10 Feb, 2025",
    slug: "automatizacion-llamadas-ia-guia-2025",
  },
  {
    category: "TRANSFORMACIÓN DIGITAL",
    title: "Cómo la Inteligencia Artificial está Transformando las Empresas Españolas en 2025",
    description: "Descubre las últimas tendencias en IA empresarial y cómo las compañías implementan soluciones que aumentan la productividad hasta un 40%.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "15 Ene, 2025",
    slug: "ia-transformando-empresas-espana-2025",
  },
  {
    category: "IA GENERATIVA",
    title: "IA Generativa en el Marketing Digital: Revolucionando la Creatividad Empresarial",
    description: "Explora cómo la IA generativa está transformando las estrategias de marketing digital y creando nuevas oportunidades de negocio.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "20 Ene, 2025",
    slug: "ia-generativa-marketing-digital-2025",
  },
  {
    category: "EFICIENCIA",
    title: "Automatización Inteligente: La Clave para Reducir Costes Operativos",
    description: "Aprende cómo la automatización con IA puede reducir hasta un 60% los costes operativos de tu empresa con casos reales de éxito.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "10 Ene, 2025",
    slug: "automatizacion-inteligente-reducir-costes",
  },
  {
    category: "ANÁLISIS PREDICTIVO",
    title: "Análisis Predictivo con IA: Anticiparse al Futuro del Negocio",
    description: "Descubre cómo el análisis predictivo puede ayudar a tu empresa a tomar decisiones estratégicas basadas en datos.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "5 Ene, 2025",
    slug: "analisis-predictivo-ia-futuro-negocio",
  },
  {
    category: "PYMES",
    title: "Implementación de IA en PYMES: Guía Completa para Empresarios",
    description: "Una guía práctica para implementar inteligencia artificial en pequeñas y medianas empresas de forma accesible.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "2 Ene, 2025",
    slug: "implementacion-ia-pymes-guia-completa",
  },
  {
    category: "CHATBOTS",
    title: "Chatbots Inteligentes: Mejorando la Atención al Cliente con IA",
    description: "Descubre cómo implementar chatbots inteligentes que mejoren la experiencia del cliente y reduzcan costes operativos.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "14 Ene, 2025",
    slug: "chatbots-inteligentes-atencion-cliente",
  },
  {
    category: "RRHH",
    title: "IA en Recursos Humanos: Transformando la Gestión del Talento",
    description: "Explora cómo la inteligencia artificial está revolucionando la gestión de recursos humanos y el desarrollo del talento.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "12 Ene, 2025",
    slug: "ia-recursos-humanos-gestion-talento",
  },
  {
    category: "CIBERSEGURIDAD",
    title: "Ciberseguridad con IA: Protegiendo tu Empresa en la Era Digital",
    description: "Descubre cómo la inteligencia artificial está revolucionando la ciberseguridad empresarial contra amenazas avanzadas.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "18 Ene, 2025",
    slug: "ciberseguridad-ia-proteccion-empresarial",
  },
  {
    category: "IA PERSONALIZADA",
    title: "ChatGPT vs Soluciones de IA Personalizadas: ¿Qué Conviene Más?",
    description: "Comparamos las ventajas de usar herramientas genéricas como ChatGPT frente a desarrollar soluciones de IA personalizadas.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "28 Dic, 2024",
    slug: "chatgpt-vs-ia-personalizada-empresas",
  },
  {
    category: "ROI",
    title: "ROI de la Inteligencia Artificial: Cómo Medir el Éxito de tu Inversión",
    description: "Aprende a calcular y medir el retorno de inversión de proyectos de IA con métricas clave y casos de éxito.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "25 Dic, 2024",
    slug: "roi-inteligencia-artificial-medir-exito",
  },
  {
    category: "INDUSTRIA 4.0",
    title: "Computer Vision: Automatizando Procesos Visuales en la Industria",
    description: "Descubre las aplicaciones de computer vision en la industria y cómo automatizar procesos de control de calidad.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    publishDate: "8 Ene, 2025",
    slug: "computer-vision-automatizacion-industrial",
  },
];

const ARTICLES_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = allArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredArticle = allArticles[0];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog de IA | LIVS - Automatización y Atención al Cliente con IA</title>
        <meta name="description" content="Blog especializado en automatización de atención al cliente con IA. Artículos sobre chatbots, llamadas inteligentes, y transformación digital para PYMEs." />
        <link rel="canonical" href="https://livs.es/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog de IA | LIVS",
            "description": "Blog especializado en automatización con inteligencia artificial",
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
        {/* Hero */}
        <section className="bg-gradient-to-br from-livs-blue via-livs-blue/95 to-livs-purple text-white py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-4 border border-white/20 rounded-full px-4 py-1.5">
                INSIGHTS & TENDENCIAS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Blog de Automatización e IA
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Estrategias, casos de éxito y guías prácticas para automatizar tu negocio con inteligencia artificial
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Tag className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">Artículo Destacado</span>
              </div>

              <Link to={`/blog/${featuredArticle.slug}`} className="group block">
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border hover:shadow-2xl transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full min-h-[320px] overflow-hidden">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-foreground/80 backdrop-blur-sm text-background text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full">
                          #{featuredArticle.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {featuredArticle.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                          Leer Artículo Completo
                          <ArrowRight className="w-5 h-5" />
                        </span>
                        <span className="text-sm text-muted-foreground">{featuredArticle.publishDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <BlogCards
          articles={currentArticles}
          title="Más Artículos sobre IA Empresarial"
          caption="TODOS LOS ARTÍCULOS"
        />

        {/* Pagination */}
        <div className="container mx-auto px-4 md:px-6 -mt-8 mb-16">
          <div className="max-w-6xl mx-auto">
            <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>

        {/* CTA */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                ¿Listo para Automatizar tu Empresa con IA?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nuestros expertos están listos para ayudarte a implementar soluciones personalizadas.
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
    </div>
  );
};

export default Blog;
