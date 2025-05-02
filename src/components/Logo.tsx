
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to="/" onClick={handleClick} className="flex items-center gap-2">
      <div className="bg-gradient-to-r from-livs-blue via-livs-purple to-livs-cyan w-8 h-8 rounded-md flex items-center justify-center">
        <img 
          src="/lovable-uploads/99c03604-b2ed-4cbf-888d-38d0b461b4eb.png"
          alt="LIAS Logo" 
          className="w-6 h-6 object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
