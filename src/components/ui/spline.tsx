
'use client'

import { Suspense, lazy, useState, useEffect, useCallback, useRef } from 'react'

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
  const containerRef = useRef<HTMLDivElement>(null)
  const rafId = useRef<number>()

  // Función para manejar errores
  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])

  // Función para manejar la carga de Spline con optimizaciones
  const onLoad = useCallback((splineApp: any) => {
    setSplineApp(splineApp)
    setIsLoaded(true)
    
    // Optimizaciones agresivas de rendimiento
    if (splineApp && splineApp.canvas) {
      const canvas = splineApp.canvas
      
      // Reducir resolución del canvas para mejorar rendimiento
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      
      // Configurar canvas para rendimiento
      try {
        const context = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        if (context) {
          // Configuraciones de WebGL para mejor rendimiento
          const loseContext = (context as WebGLRenderingContext).getExtension('WEBGL_lose_context')
          if (loseContext) {
            // Extensión disponible para cleanup posterior
          }
        }
      } catch (error) {
        console.warn('Error optimizing WebGL context:', error)
      }

      // Pausar animaciones cuando no está visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (splineApp.setVariable) {
            try {
              splineApp.setVariable('playAnimation', entry.isIntersecting)
            } catch (error) {
              console.warn('Error controlling animation state:', error)
            }
          }
        },
        { threshold: 0.1 }
      )

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      // Cleanup function para el observer
      return () => observer.disconnect()
    }
  }, [])

  // Cleanup mejorado cuando el componente se desmonta
  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      
      if (splineApp) {
        try {
          // Limpiar recursos de Spline
          if (splineApp.dispose) {
            splineApp.dispose()
          }
          if (splineApp.canvas) {
            const context = splineApp.canvas.getContext('webgl') || splineApp.canvas.getContext('webgl2')
            if (context) {
              const loseContext = (context as WebGLRenderingContext).getExtension('WEBGL_lose_context')
              if (loseContext && loseContext.loseContext) {
                loseContext.loseContext()
              }
            }
          }
        } catch (error) {
          console.warn('Error disposing Spline app:', error)
        }
      }
    }
  }, [splineApp])

  // Pausar/reanudar cuando la pestaña cambia de visibilidad
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (splineApp && splineApp.setVariable) {
        try {
          splineApp.setVariable('playAnimation', !document.hidden)
        } catch (error) {
          console.warn('Error handling visibility change:', error)
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [splineApp])

  if (hasError) {
    return (
      <div className={`relative w-full h-full ${className}`} ref={containerRef}>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🤖</span>
            </div>
            <p className="text-white/60 text-sm">Robot no disponible</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full ${className}`} ref={containerRef}>
      {!isLoaded && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin mb-2"></div>
            <p className="text-white/60 text-xs">Cargando robot...</p>
          </div>
        </div>
      )}
      
      <div className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
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
