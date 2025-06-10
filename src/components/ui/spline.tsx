
'use client'

import { Suspense, lazy, useState, useEffect, useCallback } from 'react'
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  onError?: () => void
}

export function SplineScene({ scene, className, onError }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [splineApp, setSplineApp] = useState<any>(null)

  // Función para manejar errores
  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])

  // Función para manejar la carga de Spline
  const onLoad = useCallback((splineApp: any) => {
    setSplineApp(splineApp)
    setIsLoaded(true)
    
    // Optimizaciones de rendimiento
    if (splineApp) {
      // Reducir calidad en dispositivos menos potentes
      const canvas = splineApp.canvas
      if (canvas) {
        const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        if (context) {
          // Configurar para mejor rendimiento
          canvas.style.imageRendering = 'optimizeSpeed'
        }
      }
    }
  }, [])

  useEffect(() => {
    // Cleanup cuando el componente se desmonta
    return () => {
      if (splineApp) {
        try {
          splineApp.dispose?.()
        } catch (error) {
          console.warn('Error disposing Spline app:', error)
        }
      }
    }
  }, [splineApp])

  if (hasError) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🤖</span>
            </div>
            <p className="text-white/60 text-sm">Robot no disponible</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin mb-4"></div>
            <p className="text-white/60 text-sm">Cargando robot...</p>
          </div>
        </div>
      )}
      
      <div className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <Suspense fallback={null}>
          <Spline
            scene={scene}
            className="w-full h-full"
            onLoad={onLoad}
            onError={handleError}
            style={{
              background: 'transparent',
              width: '100%',
              height: '100%'
            }}
          />
        </Suspense>
      </div>
    </div>
  )
}
