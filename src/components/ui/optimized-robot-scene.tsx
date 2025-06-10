
'use client'

import React, { useEffect, useState, useRef, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

// Lazy import para Spline con mayor delay
const SplineScene = React.lazy(() => 
  import("@/components/ui/spline").then(module => ({ default: module.SplineScene }))
)

// Fallback mejorado y más atractivo
function OptimizedFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20">
            <img 
              src="/lovable-uploads/dee18853-5d63-4c37-9be0-caf041f5e3b7.png"
              alt="LIAS Logo"
              className="h-8 w-auto md:h-12"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Hook muy restrictivo para detectar capacidades del dispositivo
function useDeviceCapability() {
  const [capability, setCapability] = useState<'low' | 'medium' | 'high'>('low')
  
  useEffect(() => {
    const checkCapability = () => {
      // Solo cargar en dispositivos muy potentes
      const memory = (navigator as any).deviceMemory || 2
      const cores = navigator.hardwareConcurrency || 2
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Solo mostrar robot en desktop con mucha memoria y cores
      if (!isMobileDevice && memory >= 8 && cores >= 8) {
        setCapability('high')
      } else {
        setCapability('low')
      }
    }

    // Delay para no bloquear el render inicial
    const timer = setTimeout(checkCapability, 2000)
    return () => clearTimeout(timer)
  }, [])
  
  return capability
}

// Hook para intersection observer más restrictivo
function useIntersection(threshold = 0.5) {
  const [isIntersecting, setIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setIntersecting(isVisible)
        
        if (isVisible && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Cargar solo cuando esté muy cerca
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, hasIntersected])

  return [ref, isIntersecting, hasIntersected] as const
}

// Hook para detectar interacción del usuario antes de cargar
function useUserInteraction() {
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true)
    }

    // Esperar a que el usuario haga scroll, click o hover
    window.addEventListener('scroll', handleInteraction, { once: true })
    window.addEventListener('click', handleInteraction, { once: true })
    window.addEventListener('mousemove', handleInteraction, { once: true })

    return () => {
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('mousemove', handleInteraction)
    }
  }, [])

  return hasInteracted
}

export function OptimizedRobotScene() {
  const isMobile = useIsMobile()
  const capability = useDeviceCapability()
  const hasUserInteracted = useUserInteraction()
  const [containerRef, isVisible, hasIntersected] = useIntersection(0.5)
  const [shouldRender, setShouldRender] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Solo renderizar con condiciones muy estrictas
  useEffect(() => {
    if (
      hasIntersected && 
      !shouldRender && 
      capability === 'high' && 
      hasUserInteracted &&
      !isMobile
    ) {
      // Delay muy largo para asegurar que la página ya esté cargada
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [hasIntersected, shouldRender, capability, hasUserInteracted, isMobile])

  // Mostrar fallback en casi todos los casos
  const showFallback = capability !== 'high' || !hasUserInteracted || !shouldRender || hasError || isMobile

  return (
    <Card className="w-full h-[300px] md:h-[400px] bg-transparent relative overflow-hidden border-none shadow-none" ref={containerRef}>
      <div className="w-full h-full relative">
        {showFallback ? (
          <OptimizedFallback />
        ) : (
          <React.Suspense fallback={<OptimizedFallback />}>
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
              className="w-full h-full opacity-90"
              onError={() => setHasError(true)}
            />
          </React.Suspense>
        )}
      </div>
    </Card>
  )
}
