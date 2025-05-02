
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
  
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to="/" onClick={handleClick} className="flex items-center gap-2">
      <div className="w-16 h-16 flex items-center justify-center">
        <img 
          src="/lovable-uploads/99c03604-b2ed-4cbf-888d-38d0b461b4eb.png"
          alt="LIAS Logo" 
          className="w-16 h-16 object-contain transition-all duration-300"
          style={{
            filter: 'brightness(0) invert(1)'
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
