
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
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
    setIsClicked(true);
    
    // Reset animation after duration
    setTimeout(() => {
      setIsClicked(false);
    }, 600);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to="/" onClick={handleClick} className="flex items-center gap-2">
      <div className={`w-20 h-20 flex items-center justify-center transition-all duration-300 ${isClicked ? 'animate-ping-once' : ''}`}>
        <img 
          src="/lovable-uploads/9ae8d914-fd9e-416c-b610-e7d10dfe3e02.png"
          alt="LIAS Logo" 
          className={`w-20 h-20 object-contain transition-all duration-300 ${isClicked ? 'scale-90' : ''}`}
          style={{
            filter: isScrolled ? 'brightness(0)' : 'brightness(0) invert(1)'
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
