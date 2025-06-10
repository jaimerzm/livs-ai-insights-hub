
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

// Hook optimizado para detectar capacidades del dispositivo - menos restrictivo
function useDeviceCapability() {
  const [capability, setCapability] = useState<'low' | 'medium' | 'high'>('medium')
  
  useEffect(() => {
    const checkCapability = () => {
      const memory = (navigator as any).deviceMemory || 4
      const cores = navigator.hardwareConcurrency || 4
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Mostrar robot en más dispositivos - requisitos menos estrictos
      if (!isMobileDevice && memory >= 4 && cores >= 4) {
        setCapability('high')
      } else if (!isMobileDevice) {
        setCapability('medium')
      } else {
        setCapability('low')
      }
    }

    // Delay para no bloquear el render inicial
    const timer = setTimeout(checkCapability, 1000)
    return () => clearTimeout(timer)
  }, [])
  
  return capability
}

// Hook para intersection observer
function useIntersection(threshold = 0.3) {
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
        rootMargin: '100px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, hasIntersected])

  return [ref, isIntersecting, hasIntersected] as const
}

// Hook para detectar interacción del usuario
function useUserInteraction() {
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true)
    }

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
  const [containerRef, isVisible, hasIntersected] = useIntersection(0.3)
  const [shouldRender, setShouldRender] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Condiciones menos restrictivas para renderizar
  useEffect(() => {
    if (
      hasIntersected && 
      !shouldRender && 
      (capability === 'high' || capability === 'medium') && 
      hasUserInteracted &&
      !isMobile
    ) {
      // Delay más corto
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [hasIntersected, shouldRender, capability, hasUserInteracted, isMobile])

  // Mostrar fallback solo en casos específicos
  const showFallback = capability === 'low' || !hasUserInteracted || !shouldRender || hasError || isMobile

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
