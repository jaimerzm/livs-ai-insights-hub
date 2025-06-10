
'use client'

import React, { useEffect, useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

// Lazy import para Spline
const SplineScene = React.lazy(() => 
  import("@/components/ui/spline").then(module => ({ default: module.SplineScene }))
)

// Fallback component optimizado
function OptimizedFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
            <img 
              src="/lovable-uploads/dee18853-5d63-4c37-9be0-caf041f5e3b7.png"
              alt="LIAS Logo"
              className="h-12 w-auto md:h-16"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Hook para detectar performance del dispositivo
function useDeviceCapability() {
  const [capability, setCapability] = useState<'low' | 'medium' | 'high'>('medium')
  
  useEffect(() => {
    // Detectar capacidades del dispositivo
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    
    if (!gl) {
      setCapability('low')
      return
    }
    
    // Comprobar memoria y cores
    const memory = (navigator as any).deviceMemory || 4
    const cores = navigator.hardwareConcurrency || 4
    
    if (memory >= 8 && cores >= 8) {
      setCapability('high')
    } else if (memory >= 4 && cores >= 4) {
      setCapability('medium')
    } else {
      setCapability('low')
    }
  }, [])
  
  return capability
}

// Hook para intersection observer
function useIntersection(threshold = 0.1) {
  const [isIntersecting, setIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isIntersecting] as const
}

export function OptimizedRobotScene() {
  const isMobile = useIsMobile()
  const capability = useDeviceCapability()
  const [containerRef, isVisible] = useIntersection(0.1)
  const [shouldRender, setShouldRender] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Solo renderizar cuando sea visible y después de un delay
  useEffect(() => {
    if (isVisible && !shouldRender) {
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, 500) // Delay para mejorar performance inicial
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, shouldRender])

  // No renderizar en dispositivos de baja capacidad o móviles
  if (capability === 'low' || isMobile) {
    return (
      <Card className="w-full h-[400px] md:h-[500px] bg-transparent relative overflow-hidden border-none shadow-none" ref={containerRef}>
        <OptimizedFallback />
      </Card>
    )
  }

  return (
    <Card className="w-full h-[400px] md:h-[500px] bg-transparent relative overflow-hidden border-none shadow-none" ref={containerRef}>
      <div className="w-full h-full relative">
        {!shouldRender || hasError ? (
          <OptimizedFallback />
        ) : (
          <React.Suspense fallback={<OptimizedFallback />}>
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
              className="w-full h-full"
              onError={() => setHasError(true)}
            />
          </React.Suspense>
        )}
      </div>
    </Card>
  )
}
