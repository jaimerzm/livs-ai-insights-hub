import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Servicios",
      links: [
        { text: "Estrategia de IA", href: "#servicios" },
        { text: "Automatización Inteligente", href: "#servicios" },
        { text: "Análisis Predictivo", href: "#servicios" },
        { text: "Gestión de Datos", href: "#servicios" },
        { text: "Desarrollo de Soluciones", href: "#servicios" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { text: "Sobre Nosotros", href: "#nosotros" },
        { text: "Casos de Éxito", href: "#casos" },
        { text: "Beneficios", href: "#beneficios" },
        { text: "Blog", href: "#" },
        { text: "Contacto", href: "#contacto" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Política de Privacidad", href: "#" },
        { text: "Términos y Condiciones", href: "#" },
        { text: "Política de Cookies", href: "#" },
        { text: "Aviso Legal", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-livs-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-white/80">
              Transformamos empresas a través de la inteligencia artificial con soluciones innovadoras y personalizadas para mejorar su eficiencia y rentabilidad.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70">
            © {currentYear} Lias. Todos los derechos reservados.
          </div>
          <div className="mt-4 md:mt-0 text-sm text-white/70">
            Diseñado y desarrollado con ❤️ por el equipo de Lias
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
