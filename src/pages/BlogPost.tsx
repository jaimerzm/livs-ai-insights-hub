import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToBlogButton from '@/components/BackToBlogButton';
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    id: 1,
    title: "IA Generativa en el Marketing Digital: Revolucionando la Creatividad Empresarial",
    excerpt: "Descubre cómo la IA generativa está transformando las estrategias de marketing digital y creando nuevas oportunidades de negocio en 2025.",
    content: "<p>La inteligencia artificial generativa está revolucionando el marketing digital de formas que parecían imposibles hace apenas unos años. En 2025, las empresas que adopten estas tecnologías tendrán una ventaja competitiva significativa.</p><h2 className='text-2xl font-bold text-gray-900 mt-12 mb-6'>¿Qué es la IA Generativa en Marketing?</h2><p>La IA generativa en marketing se refiere al uso de algoritmos de inteligencia artificial capaces de crear contenido original: desde textos publicitarios hasta imágenes, videos y campañas completas. Esta tecnología permite a las empresas generar contenido personalizado a escala masiva.</p>",
    date: "20 de Enero, 2025",
    author: "Laura García",
    readTime: "7 min lectura",
    tags: ["IA Generativa", "Marketing Digital", "Creatividad"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Chatbots Inteligentes: Mejorando la Atención al Cliente",
    excerpt: "Implementa chatbots que mejoren la experiencia del cliente...",
    content: "<p>Los chatbots inteligentes están transformando la atención al cliente...</p>",
    date: "15 de Enero, 2025",
    author: "Carlos Pérez",
    readTime: "5 min lectura",
    tags: ["Chatbots", "Atención al Cliente", "IA"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Automatización Inteligente para Reducir Costes",
    excerpt: "Reduce hasta un 60% los costes operativos con automatización...",
    content: "<p>La automatización inteligente es clave para reducir costes operativos...</p>",
    date: "10 de Enero, 2025",
    author: "Ana López",
    readTime: "6 min lectura",
    tags: ["Automatización", "IA", "Costes"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "IA en Recursos Humanos: Gestión del Talento",
    excerpt: "Revoluciona la gestión de RRHH con inteligencia artificial...",
    content: "<p>La IA está revolucionando la gestión de recursos humanos...</p>",
    date: "05 de Enero, 2025",
    author: "Javier Torres",
    readTime: "8 min lectura",
    tags: ["IA", "RRHH", "Talento"],
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    title: "El Impacto de la IA en la Banca y las Finanzas",
    excerpt: "Descubre cómo la inteligencia artificial está transformando el sector bancario y financiero.",
    content: "<p>La IA está transformando el sector bancario y financiero...</p>",
    date: "01 de Enero, 2025",
    author: "Isabel Martínez",
    readTime: "9 min lectura",
    tags: ["IA", "Banca", "Finanzas"],
    image: "https://images.unsplash.com/photo-1501164333658-c3015765ca57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    title: "La Realidad Virtual y Aumentada en la Educación del Futuro",
    excerpt: "Explora cómo la realidad virtual y aumentada están revolucionando la educación.",
    content: "<p>La realidad virtual y aumentada están revolucionando la educación...</p>",
    date: "28 de Diciembre, 2024",
    author: "Roberto Díaz",
    readTime: "7 min lectura",
    tags: ["Realidad Virtual", "Realidad Aumentada", "Educación"],
    image: "https://images.unsplash.com/photo-1542751371-adc38f48a49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 7,
    title: "Ciberseguridad en la Era de la Inteligencia Artificial",
    excerpt: "Aprende sobre los desafíos y soluciones en ciberseguridad impulsados por la IA.",
    content: "<p>La ciberseguridad en la era de la inteligencia artificial...</p>",
    date: "22 de Diciembre, 2024",
    author: "Elena Sánchez",
    readTime: "6 min lectura",
    tags: ["Ciberseguridad", "IA", "Tecnología"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 8,
    title: "El Futuro del Trabajo: Habilidades Necesarias para 2030",
    excerpt: "Prepárate para el futuro del trabajo con las habilidades más demandadas en 2030.",
    content: "<p>El futuro del trabajo y las habilidades necesarias para 2030...</p>",
    date: "15 de Diciembre, 2024",
    author: "David Pérez",
    readTime: "8 min lectura",
    tags: ["Futuro del Trabajo", "Habilidades", "Tendencias"],
    image: "https://images.unsplash.com/photo-1584438477825-13ca559945cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1dHVyZSUyMG9kJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 9,
    title: "Blockchain Más Allá de las Criptomonedas: Aplicaciones Innovadoras",
    excerpt: "Explora las aplicaciones innovadoras de blockchain más allá de las criptomonedas.",
    content: "<p>Blockchain más allá de las criptomonedas y sus aplicaciones innovadoras...</p>",
    date: "08 de Diciembre, 2024",
    author: "Sofía Gómez",
    readTime: "7 min lectura",
    tags: ["Blockchain", "Tecnología", "Innovación"],
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 10,
    title: "Marketing de Contenidos en 2025: Tendencias y Estrategias",
    excerpt: "Descubre las tendencias y estrategias clave para el marketing de contenidos en 2025.",
    content: "<p>Marketing de contenidos en 2025: tendencias y estrategias...</p>",
    date: "01 de Diciembre, 2024",
    author: "Martín Ruiz",
    readTime: "9 min lectura",
    tags: ["Marketing de Contenidos", "Marketing Digital", "Tendencias"],
    image: "https://images.unsplash.com/photo-1486312339633-9c6334c8e1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hcmtldGluZyUyMGNvbnRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 11,
    title: "Ciudades Inteligentes: El Futuro de la Vida Urbana",
    excerpt: "Explora cómo las ciudades inteligentes están transformando la vida urbana.",
    content: "<p>Ciudades inteligentes: el futuro de la vida urbana...</p>",
    date: "24 de Noviembre, 2024",
    author: "Lucía Fernández",
    readTime: "8 min lectura",
    tags: ["Ciudades Inteligentes", "Urbanismo", "Tecnología"],
    image: "https://images.unsplash.com/photo-1502605255556-460f55823742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwY2l0aWVzfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60"
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find the blog post by matching the slug with a generated slug from the title
  const blogPost = blogPosts.find(post => {
    const generatedSlug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
    return generatedSlug === slug;
  });

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <BackToBlogButton />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-2xl font-bold text-gray-900">Artículo no encontrado</h1>
          <p className="text-gray-600 mt-4">El artículo que buscas no existe.</p>
          <Link to="/blog" className="text-livs-blue hover:text-livs-purple mt-4 inline-block">
            Volver al blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(post => post.id === blogPost.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Function to find related posts (you can implement more sophisticated logic here)
  const relatedPosts = blogPosts.filter(post =>
    post.tags.some(tag => blogPost.tags.includes(tag)) && post.id !== blogPost.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{blogPost.title} | LIVS</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta name="keywords" content={blogPost.tags.join(', ')} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:image" content={blogPost.image} />
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
                  src={blogPost.image} 
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {blogPost.title}
                  </h1>
                  
                  <div className="flex items-center gap-6 text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPost.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-livs-blue transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>Compartir</span>
                    </button>
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
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-gray-200 py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              {prevPost ? (
                <Link to={`/blog/${prevPost.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`} className="flex items-center gap-2 text-livs-blue hover:text-livs-purple">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </Link>
              ) : <div></div>}
              
              {nextPost ? (
                <Link to={`/blog/${nextPost.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`} className="flex items-center gap-2 text-livs-blue hover:text-livs-purple">
                  <span>Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : <div></div>}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Artículos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(post => {
                  const postSlug = post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                  return (
                    <Link key={post.id} to={`/blog/${postSlug}`} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="w-4 h-4 text-livs-purple" />
                          <span className="text-sm text-livs-purple">{post.tags[0]}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm">{post.excerpt}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-livs-blue to-livs-purple py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">¿Necesitas implementar estas soluciones en tu empresa?</h2>
              <p className="text-xl mb-8">Nuestros expertos en IA pueden ayudarte a transformar tu negocio.</p>
              <Link to="/#contacto" className="inline-flex items-center gap-2 bg-white text-livs-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Consultoría
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
