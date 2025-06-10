
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

// Hook mejorado para detectar capacidades del dispositivo
function useDeviceCapability() {
  const [capability, setCapability] = useState<'low' | 'medium' | 'high'>('medium')
  
  useEffect(() => {
    const checkCapability = () => {
      // Verificar soporte WebGL más estricto
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      
      if (!gl) {
        setCapability('low')
        return
      }

      // Verificar extensiones WebGL críticas - corregir tipos
      const ext = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info')
      const renderer = ext ? (gl as WebGLRenderingContext).getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'unknown'
      
      // Detectar GPU integrada (menor rendimiento)
      const isIntegratedGPU = typeof renderer === 'string' && (renderer.includes('Intel') || renderer.includes('integrated'))
      
      // Memoria y cores más permisivos para mostrar el robot
      const memory = (navigator as any).deviceMemory || 4
      const cores = navigator.hardwareConcurrency || 4
      
      // Verificar si es dispositivo móvil o tablet
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Verificar conexión de red (si está disponible)
      const connection = (navigator as any).connection
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')
      
      // Criterios más permisivos para mostrar el robot
      if (isSlowConnection || (isMobileDevice && memory < 2)) {
        setCapability('low')
      } else if (memory >= 8 && cores >= 8 && !isIntegratedGPU) {
        setCapability('high')
      } else {
        setCapability('medium')
      }
    }

    // Delay inicial para no bloquear el render
    const timer = setTimeout(checkCapability, 100)
    return () => clearTimeout(timer)
  }, [])
  
  return capability
}

// Hook para intersection observer más eficiente
function useIntersection(threshold = 0.2) {
  const [isIntersecting, setIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setIntersecting(isVisible)
        
        // Una vez que ha sido visible, marcarlo como intersectado
        if (isVisible && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { 
        threshold,
        rootMargin: '100px' // Cargar antes de que sea visible
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, hasIntersected])

  return [ref, isIntersecting, hasIntersected] as const
}

// Hook para detectar si la batería está baja (en dispositivos móviles)
function useBatteryStatus() {
  const [isLowBattery, setIsLowBattery] = useState(false)

  useEffect(() => {
    const checkBattery = async () => {
      try {
        // @ts-ignore - Battery API no está en todos los tipos
        if ('getBattery' in navigator) {
          // @ts-ignore
          const battery = await navigator.getBattery()
          setIsLowBattery(battery.level < 0.15 && battery.charging === false)
        }
      } catch (error) {
        // Ignorar errores de API de batería
      }
    }

    checkBattery()
  }, [])

  return isLowBattery
}

export function OptimizedRobotScene() {
  const isMobile = useIsMobile()
  const capability = useDeviceCapability()
  const isLowBattery = useBatteryStatus()
  const [containerRef, isVisible, hasIntersected] = useIntersection(0.2)
  const [shouldRender, setShouldRender] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Solo renderizar cuando todas las condiciones se cumplan, pero más permisivo
  useEffect(() => {
    if (hasIntersected && !shouldRender && capability !== 'low' && !isLowBattery) {
      // Delay más corto para cargar más rápido
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [hasIntersected, shouldRender, capability, isLowBattery])

  // Condiciones para mostrar fallback - más restrictivo para mostrar el robot
  const showFallback = capability === 'low' || isLowBattery || !shouldRender || hasError

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
        
        {/* Debug info para ver el estado */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-2 left-2 text-xs text-white/60 bg-black/20 p-1 rounded">
            Cap: {capability} | Mobile: {isMobile ? 'Y' : 'N'} | Battery: {isLowBattery ? 'Low' : 'OK'} | Render: {shouldRender ? 'Y' : 'N'}
          </div>
        )}
      </div>
    </Card>
  )
}
