
'use client'

import { useState, useEffect } from 'react'
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading to give a better UX
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      )}
      
      <div className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <AnimatedGradientBackground 
          startingGap={125}
          Breathing={true}
          gradientColors={[
            "#0A0A0A",
            "#2979FF",
            "#9C27B0",
            "#6A1B9A",
            "#3D5AFE",
            "#304FFE"
          ]}
          gradientStops={[20, 40, 60, 75, 85, 100]}
          animationSpeed={0.03}
          breathingRange={8}
          topOffset={-20}
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl opacity-30"></div>
        </div>
      </div>
    </div>
  )
}
