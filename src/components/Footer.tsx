import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const sections = [{
    title: "Servicios",
    links: [{
      text: "Estrategia de IA",
      href: "/#servicios",
      isExternal: false
    }, {
      text: "Automatización Inteligente",
      href: "/#servicios",
      isExternal: false
    }, {
      text: "Análisis Predictivo",
      href: "/#servicios",
      isExternal: false
    }, {
      text: "Gestión de Datos",
      href: "/#servicios",
      isExternal: false
    }, {
      text: "Desarrollo de Soluciones",
      href: "/#servicios",
      isExternal: false
    }]
  }, {
    title: "Empresa",
    links: [{
      text: "Sobre Nosotros",
      href: "/#nosotros",
      isExternal: false
    }, {
      text: "Casos de Éxito",
      href: "/#casos",
      isExternal: false
    }, {
      text: "Beneficios",
      href: "/#beneficios",
      isExternal: false
    }, {
      text: "Blog",
      href: "#",
      isExternal: true
    }, {
      text: "Contacto",
      href: "/#contacto",
      isExternal: false
    }]
  }, {
    title: "Legal",
    links: [{
      text: "Política de Privacidad",
      href: "/privacy-policy",
      isExternal: false
    }, {
      text: "Términos y Condiciones",
      href: "/terms-conditions",
      isExternal: false
    }, {
      text: "Política de Cookies",
      href: "/cookies-policy",
      isExternal: false
    }, {
      text: "Aviso Legal",
      href: "/legal-notice",
      isExternal: false
    }]
  }];
  return <footer className="bg-livs-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <p className="mt-4 text-sm text-white/80">
              Transformamos empresas a través de la inteligencia artificial con soluciones innovadoras y personalizadas para mejorar su eficiencia y rentabilidad.
            </p>
            <div className="mt-6 flex gap-4">
              
              
            </div>
          </div>

          {sections.map(section => <div key={section.title}>
              <h3 className="font-medium text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => <li key={link.text}>
                    {link.isExternal ? <a href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                        {link.text}
                      </a> : link.href.startsWith('/') ? <Link to={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                        {link.text}
                      </Link> : <a href={link.href} className="text-sm text-white/80 hover:text-white transition-colors">
                        {link.text}
                      </a>}
                  </li>)}
              </ul>
            </div>)}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70">
            © {currentYear} LIVS. Todos los derechos reservados.
          </div>
          <div className="mt-4 md:mt-0 text-sm text-white/70">
            Diseñado y desarrollado con ❤️ por el equipo de LIVS
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;