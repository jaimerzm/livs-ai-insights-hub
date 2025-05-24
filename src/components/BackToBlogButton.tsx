
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToBlogButton = () => {
  return (
    <div className="fixed top-20 left-4 z-40 md:left-6">
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-livs-blue hover:text-livs-purple px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Volver al Blog</span>
        <span className="sm:hidden">Blog</span>
      </Link>
    </div>
  );
};

export default BackToBlogButton;
