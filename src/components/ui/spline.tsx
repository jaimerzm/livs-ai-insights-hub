
'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background'

const Spline = lazy(() => import('@splinetool/react-spline'))

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
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }>
          <Spline
            scene={scene}
            className="w-full h-full"
          />
        </Suspense>
      </div>
    </div>
  )
}
