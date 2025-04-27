
import React from 'react';
import { Rocket, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RocketAnimationProps {
  className?: string;
}

export function RocketAnimation({ className }: RocketAnimationProps) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden pointer-events-none", className)}>
      {/* Rockets randomly positioned */}
      <div className="absolute bottom-0 left-[10%] animate-rocket-flight" style={{ animationDelay: "0s" }}>
        <Rocket className="text-livs-purple h-8 w-8" />
      </div>
      <div className="absolute bottom-0 left-[30%] animate-rocket-flight" style={{ animationDelay: "2s" }}>
        <Rocket className="text-livs-blue-light h-10 w-10" />
      </div>
      <div className="absolute bottom-0 left-[60%] animate-rocket-flight" style={{ animationDelay: "1.5s" }}>
        <TrendingUp className="text-livs-cyan h-8 w-8" />
      </div>
      <div className="absolute bottom-0 left-[80%] animate-rocket-flight" style={{ animationDelay: "3s" }}>
        <Rocket className="text-livs-purple h-6 w-6" />
      </div>
      <div className="absolute bottom-0 left-[50%] animate-rocket-flight" style={{ animationDelay: "0.7s" }}>
        <TrendingUp className="text-blue-400 h-12 w-12" />
      </div>
    </div>
  );
}
