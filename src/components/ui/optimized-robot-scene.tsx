
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
  const [capability, setCapability] = useState<'low' | 'medium' | 'high'>('low')
  
  useEffect(() => {
    const checkCapability = () => {
      // Verificar soporte WebGL más estricto
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      
      if (!gl) {
        setCapability('low')
        return
      }

      // Verificar extensiones WebGL críticas
      const ext = gl.getExtension('WEBGL_debug_renderer_info')
      const renderer = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'unknown'
      
      // Detectar GPU integrada (menor rendimiento)
      const isIntegratedGPU = renderer.includes('Intel') || renderer.includes('integrated')
      
      // Memoria y cores más estrictos
      const memory = (navigator as any).deviceMemory || 2
      const cores = navigator.hardwareConcurrency || 2
      
      // Verificar si es dispositivo móvil o tablet
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Verificar conexión de red (si está disponible)
      const connection = (navigator as any).connection
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')
      
      if (isMobileDevice || isSlowConnection || isIntegratedGPU || memory < 4 || cores < 4) {
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
function useIntersection(threshold = 0.3) {
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
        rootMargin: '50px' // Cargar un poco antes de que sea visible
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
          setIsLowBattery(battery.level < 0.2 && battery.charging === false)
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
  const [containerRef, isVisible, hasIntersected] = useIntersection(0.3)
  const [shouldRender, setShouldRender] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  // Detectar interacción del usuario para cargar bajo demanda
  const handleUserInteraction = useCallback(() => {
    if (!userInteracted && hasIntersected && capability !== 'low') {
      setUserInteracted(true)
    }
  }, [userInteracted, hasIntersected, capability])

  // Solo renderizar cuando todas las condiciones se cumplan
  useEffect(() => {
    if (hasIntersected && !shouldRender && capability !== 'low' && !isLowBattery && !isMobile) {
      // Delay más largo para mejorar rendimiento inicial
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, 1500)
      
      return () => clearTimeout(timer)
    }
  }, [hasIntersected, shouldRender, capability, isLowBattery, isMobile])

  // Agregar listeners de interacción
  useEffect(() => {
    const events = ['click', 'scroll', 'mousemove', 'touchstart']
    
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [handleUserInteraction])

  // Condiciones para mostrar fallback
  const showFallback = capability === 'low' || isMobile || isLowBattery || !shouldRender || hasError

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
        
        {/* Indicador sutil de carga interactiva */}
        {hasIntersected && capability !== 'low' && !userInteracted && !shouldRender && !isMobile && (
          <div className="absolute bottom-4 right-4 text-white/40 text-xs">
            Click para cargar robot 3D
          </div>
        )}
      </div>
    </Card>
  )
}
