
'use client'

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/spline"

// Fallback component if 3D rendering fails
function FallbackDisplay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        <div className="w-64 h-64 rounded-full bg-blue-500/10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          LIVS AI
        </div>
      </div>
    </div>
  )
}

// Main component with error handling
export function RobotScene() {
  const [renderError, setRenderError] = useState(false)

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    
    if (!gl) {
      setRenderError(true)
      console.error("WebGL not supported - falling back to simple display")
    }
  }, [])

  return (
    <Card className="w-full h-[500px] bg-transparent relative overflow-hidden border-none shadow-none">
      <div className="flex h-full">
        <div className="w-full h-full relative">
          {!renderError ? (
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
              className="w-full h-full"
            />
          ) : (
            <FallbackDisplay />
          )}
        </div>
      </div>
    </Card>
  )
}
