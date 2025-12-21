
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ isScrolled = false }) => {
  const handleClick = () => {    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to="/" onClick={handleClick} className="flex items-center gap-2">
      <div className="w-20 h-20 flex items-center justify-center transition-all duration-300">
        <img 
          src="/lovable-uploads/lias-logo-new.png"
          alt="LIAS Logo"
          className="w-20 h-20 object-contain transition-all duration-300"
          style={{
            filter: isScrolled ? 'brightness(0)' : 'brightness(1)'
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
