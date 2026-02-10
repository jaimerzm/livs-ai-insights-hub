import React, { useState, useEffect } from 'react';
import { Button as StandardButton } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';
import { GlowEffect } from '@/components/ui/glow-effect';
import { Link, useLocation } from 'react-router-dom';
import { HoverButton } from '@/components/ui/hover-button';
import { useIsMobile } from '@/hooks/use-mobile';
import VisitorCounter from './VisitorCounter';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Check if we're on blog pages
  const isOnBlogPage = location.pathname.startsWith('/blog');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Only check sections if we're on the homepage
      if (location.pathname === '/') {
        // Update active section based on scroll position with better detection
        const sections = navLinks.map(link => link.href.substring(1));
        let currentActiveSection = '';
        
        // Check each section from top to bottom
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Only consider a section active if we've scrolled significantly into it
            // The section needs to be at least 30% visible from the top
            const sectionHeight = rect.height;
            const visibleFromTop = Math.max(0, Math.min(sectionHeight, window.innerHeight - rect.top));
            const visibilityPercent = visibleFromTop / sectionHeight;
            
            if (rect.top <= 150 && rect.bottom >= 150 && visibilityPercent >= 0.3) {
              currentActiveSection = section;
            }
          }
        }
        
        setActiveLink(currentActiveSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
  
  const scrollToContact = () => {
    // If on homepage, scroll to contact section
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop - 80,
          // Adjust according to navbar height
          behavior: 'smooth'
        });
      }
    } else {
      // If not on homepage, navigate to homepage and then to contact section
      window.location.href = '/#contacto';
    }

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  const handleLinkClick = (href: string) => {
    const sectionId = href.substring(1);
    setActiveLink(sectionId);

    // If on homepage, smoothly scroll to section
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    } else {
      // If not on homepage, navigate to homepage with hash
      window.location.href = '/' + href;
    }

    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  const navLinks = [{
    title: "Beneficios",
    href: "#beneficios"
  }, {
    title: "Servicios",
    href: "#servicios-detallados"
  }, {
    title: "Certificados",
    href: "#certificados"
  }, {
    title: "Sobre Nosotros",
    href: "#nosotros"
  }];
  
  // Apply transparent only on desktop and homepage, mobile and blog pages always have white background
  const headerClass = isMobile || isOnBlogPage
    ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-0.5" 
    : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} py-0.5`;
  
  return <header className={headerClass}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/">
          <Logo isScrolled={isMobile || isOnBlogPage || isScrolled} />
        </Link>
        
        {/* Desktop Navigation - Making it more compact */}
        <nav className="hidden md:flex items-center space-x-3">
          {navLinks.map(link => {
          const isActive = activeLink === link.href.substring(1);
          return <a key={link.title} href={link.href} onClick={e => {
            e.preventDefault();
            handleLinkClick(link.href);
          }} className={`font-medium text-sm transition-all duration-300 px-3 py-1 rounded-md
                  ${isActive 
                    ? ((isOnBlogPage || isScrolled) ? 'bg-gray-800 !text-white' : 'bg-white !text-gray-800') + ' transform scale-105 shadow-md' 
                    : (isOnBlogPage || isScrolled ? 'text-gray-800 hover:text-gray-600 hover:bg-gray-100' : 'text-white hover:text-gray-200 hover:bg-white/20')}`}>
                {link.title}
              </a>;
        })}
          
          <Link 
            to="/blog" 
            className={`font-medium text-sm transition-all duration-300 px-3 py-1 rounded-md
              ${location.pathname === '/blog' 
                ? ((isOnBlogPage || isScrolled) ? 'bg-gray-800 !text-white' : 'bg-white !text-gray-800') + ' transform scale-105 shadow-md' 
                : (isOnBlogPage || isScrolled ? 'text-gray-800 hover:text-gray-600 hover:bg-gray-100' : 'text-white hover:text-gray-200 hover:bg-white/20')}`}
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Blog
          </Link>
          
          <div className="relative flex items-center gap-2">
            <VisitorCounter isScrolled={isOnBlogPage || isScrolled} className="hidden md:flex" />
            <HoverButton onClick={scrollToContact} className={`text-white text-sm flex items-center gap-1 py-1 px-4 ${isOnBlogPage || isScrolled ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'}`}>
              Contactar
              <ArrowRight className="h-3 w-3 ml-1" />
            </HoverButton>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className={`md:hidden ${isMobile || isOnBlogPage ? 'text-gray-800' : (isScrolled ? 'text-gray-800' : 'text-white')}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-3 flex flex-col">
              {navLinks.map(link => {
            const isActive = activeLink === link.href.substring(1);
            return <a key={link.title} href={link.href} onClick={e => {
              e.preventDefault();
              handleLinkClick(link.href);
            }} className={`text-black font-medium text-sm py-3 border-b border-gray-100 transition-all duration-300
                      ${isActive ? 'bg-gray-800/10 text-gray-800 font-semibold pl-2' : 'hover:text-gray-600 hover:bg-gray-50'}`}>
                    {link.title}
                  </a>;
          })}
              
              <Link 
                to="/blog" 
                className={`text-black font-medium text-sm py-3 border-b border-gray-100 transition-all duration-300
                  ${location.pathname === '/blog' ? 'bg-gray-800/10 text-gray-800 font-semibold pl-2' : 'hover:text-gray-600 hover:bg-gray-50'}`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Blog
              </Link>
              
              <div className="mt-4 w-full flex items-center gap-2">
                <VisitorCounter isScrolled={true} className="flex" />
                <HoverButton onClick={scrollToContact} className="flex-1 text-white text-sm flex items-center justify-center gap-1 py-1 bg-gray-800 hover:bg-gray-700">
                  Contactar
                  <ArrowRight className="h-3 w-3 ml-1" />
                </HoverButton>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};

export default Navbar;
