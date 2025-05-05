
import React from 'react';
import { useVisitorCount } from '@/hooks/use-visitor-count';
import { Users } from 'lucide-react';

interface VisitorCounterProps {
  className?: string;
  isScrolled?: boolean;
}

const VisitorCounter = ({ className, isScrolled = false }: VisitorCounterProps) => {
  const { visitorCount, isLoading } = useVisitorCount();

  if (isLoading) {
    return null;
  }

  return (
    <div className={`flex items-center gap-1 text-xs font-medium rounded-md py-1 px-2 transition-colors duration-300 ${
      isScrolled ? 'text-gray-700 bg-gray-100' : 'text-white bg-white/20 backdrop-blur-sm'
    } ${className}`}>
      <Users className="h-3 w-3" />
      <span>{visitorCount.toLocaleString()} visitantes</span>
    </div>
  );
};

export default VisitorCounter;
