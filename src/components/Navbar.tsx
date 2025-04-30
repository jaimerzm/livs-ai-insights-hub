
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [{
    title: "Servicios",
    href: "#servicios"
  }, {
    title: "Beneficios",
    href: "#beneficios"
  }, {
    title: "Casos de Éxito",
    href: "#casos"
  }, {
    title: "Sobre Nosotros",
    href: "#nosotros"
  }];
  
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between bg-transparent">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.title} href={link.href} className={`font-medium text-sm transition-colors ${isScrolled ? 'text-black' : 'text-white'} hover:text-livs-purple`}>
              {link.title}
            </a>)}
          <Button className="bg-gradient-to-r from-livs-blue to-livs-purple hover:opacity-90 transition-opacity">
            Contactar
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-livs-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map(link => <a key={link.title} href={link.href} className="text-black font-medium text-sm py-3 border-b border-gray-100 hover:text-livs-purple transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.title}
                </a>)}
              <div className="mt-4">
                <Button className="w-full bg-gradient-to-r from-livs-blue to-livs-purple hover:opacity-90 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
                  Contactar
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};

export default Navbar;
