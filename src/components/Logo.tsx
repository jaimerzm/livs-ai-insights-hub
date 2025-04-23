
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-gradient-to-r from-livs-blue via-livs-purple to-livs-cyan w-8 h-8 rounded-md flex items-center justify-center">
        <span className="text-white font-bold text-lg">L</span>
      </div>
      <span className="font-heading font-bold text-xl text-livs-blue">Livs</span>
    </div>
  );
};

export default Logo;
