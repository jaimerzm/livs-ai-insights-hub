
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
        <span className="text-white font-bold text-lg">L</span>
      </div>
      <span className="font-heading font-bold text-xl text-livs-blue">Livs</span>
    </Link>
  );
};

export default Logo;
