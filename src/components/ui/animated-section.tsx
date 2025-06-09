
import React from 'react';
import ScrollFloat from './scroll-float';

interface AnimatedSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  titleElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
}

const AnimatedSection = ({
  title,
  subtitle,
  children,
  titleElement = 'h2',
  titleClassName = "text-3xl md:text-4xl font-bold mb-4",
  subtitleClassName = "text-lg mb-16",
  containerClassName = "text-center max-w-3xl mx-auto mb-16"
}: AnimatedSectionProps) => {
  return (
    <>
      <div className={containerClassName}>
        <ScrollFloat 
          element={titleElement}
          containerClassName={titleClassName}
          animationDuration={1}
          ease="power1.out"
          stagger={0.015}
        >
          {title}
        </ScrollFloat>
        {subtitle && (
          <ScrollFloat 
            element="p"
            containerClassName={subtitleClassName}
            animationDuration={1.2}
            ease="power1.out"
            stagger={0.008}
          >
            {subtitle}
          </ScrollFloat>
        )}
      </div>
      {children}
    </>
  );
};

export default AnimatedSection;
