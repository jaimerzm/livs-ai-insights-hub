
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    // Cierra el menú móvil si está abierto
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  const handleLinkClick = (href: string) => {
    const sectionId = href.substring(1);
    setActiveLink(sectionId);
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [{
    title: "Servicios",
    href: "#servicios",
    icon: Briefcase
  }, {
    title: "Beneficios",
    href: "#beneficios",
    icon: FileText
  }, {
    title: "Casos de Éxito",
    href: "#casos",
    icon: User
  }, {
    title: "Sobre Nosotros",
    href: "#nosotros",
    icon: Home
  }];
  
  const tubeLightNavItems = navLinks.map(link => ({
    name: link.title,
    url: link.href,
    icon: link.icon
  }));
  
  // Use the new tubelight navbar on desktop
  if (!isMobile && !isScrolled) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between bg-transparent py-4">
          <Logo />
          <NavBar items={tubeLightNavItems} className="sm:relative sm:top-0 sm:w-auto sm:translate-x-0 sm:pt-0" />
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-livs-blue to-livs-purple hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto hover:shadow-md active:transform active:scale-95"
          >
            Contactar
          </Button>
        </div>
      </header>
    );
  }
  
  // Use the original navbar for mobile or when scrolled
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between bg-transparent">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5">
          {navLinks.map(link => {
            const isActive = activeLink === link.href.substring(1);
            return (
              <a 
                key={link.title} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`font-medium text-lg transition-all duration-300 px-5 py-3 rounded-md
                  ${isScrolled ? 'text-black' : 'text-white'} 
                  ${isActive 
                    ? 'bg-livs-purple text-white transform scale-105 shadow-md' 
                    : 'hover:text-livs-purple hover:bg-white/80 hover:shadow-sm'
                  } active:transform active:scale-95`}
              >
                {link.title}
              </a>
            )
          })}
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-livs-blue to-livs-purple hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto hover:shadow-md active:transform active:scale-95"
          >
            Contactar
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-livs-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map(link => {
                const isActive = activeLink === link.href.substring(1);
                return (
                  <a 
                    key={link.title} 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`text-black font-medium text-base py-4 border-b border-gray-100 transition-all duration-300
                      ${isActive 
                        ? 'bg-livs-purple/10 text-livs-purple font-semibold pl-2' 
                        : 'hover:text-livs-purple hover:bg-gray-50'
                      } active:transform active:scale-95`}
                  >
                    {link.title}
                  </a>
                )
              })}
              <div className="mt-4">
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-livs-blue to-livs-purple hover:opacity-90 transition-opacity text-base py-5 h-auto active:transform active:scale-95"
                >
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
