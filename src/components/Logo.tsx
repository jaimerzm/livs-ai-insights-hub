
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = ({ className = '', onClick }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center" onClick={onClick}>
      <div className="flex items-center">
        <div className="w-20 h-20 flex items-center justify-center transition-all duration-300">
          <img 
            src="/livs-ai-insights-hub/lovable-uploads/afe3d12d-dc92-469b-aff9-a88c86a57b97.png"
            alt="LIAS Logo" 
            className="w-20 h-20 object-contain transition-all duration-300"
          />
        </div>
        <span className="text-2xl font-bold text-livs-blue ml-2 hidden md:inline-block">
          LIVS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
