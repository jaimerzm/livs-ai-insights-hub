
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
          src="/lovable-uploads/afe3d12d-dc92-469b-aff9-a88c86a57b97.png"
          alt="LIAS Logo" 
          className="w-20 h-20 object-contain transition-all duration-300"
          style={{
            filter: 'brightness(0)'
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
