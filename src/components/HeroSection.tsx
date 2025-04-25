
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { MagnetLinesDemo } from '@/components/ui/magnet-lines-demo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <nav className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold tracking-tight">LIVS</div>
          <div className="flex items-center gap-8">
            <a href="#inicio" className="text-sm hover:text-gray-600">HOME</a>
            <a href="#servicios" className="text-sm hover:text-gray-600">SERVICIOS</a>
            <a href="#productos" className="text-sm hover:text-gray-600">PRODUCTOS</a>
            <a href="#contacto" className="text-sm hover:text-gray-600">CONTACTO</a>
            <div className="flex items-center gap-4">
              <button className="text-sm hover:text-gray-600">BUSCAR</button>
              <span>|</span>
              <button className="text-sm">CART (0)</button>
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              INTELIGENCIA ARTIFICIAL ES EL FUTURO
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Creamos soluciones digitales que combinan las posibilidades de la IA
              con las necesidades de tu negocio
            </p>
            <div className="pt-4 flex items-center gap-4">
              <span className="text-sm">¿Qué es</span>
              <Button variant="outline" size="sm" className="rounded-full">
                <Play className="w-4 h-4" />
              </Button>
              <span className="text-sm">Livs AI?</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Robot representando Inteligencia Artificial"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-livs-blue to-livs-purple rounded-lg"></div>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 max-w-xs text-right">
          <p className="text-sm text-gray-600">
            FUSIONAMOS LAS POSIBILIDADES DIGITALES CON LAS NECESIDADES DE TU NEGOCIO
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
