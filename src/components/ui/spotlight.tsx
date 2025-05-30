
'use client'

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  fill?: string
}

export function Spotlight({
  className,
  fill = "white",
  ...props
}: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (event: MouseEvent) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()
    setPosition({ 
      x: event.clientX - rect.left, 
      y: event.clientY - rect.top
    })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    const div = divRef.current
    if (!div) return
    
    div.addEventListener("mousemove", handleMouseMove)
    div.addEventListener("mouseenter", handleMouseEnter)
    div.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      div.removeEventListener("mousemove", handleMouseMove)
      div.removeEventListener("mouseenter", handleMouseEnter)
      div.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={divRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity }}
      >
        <svg width="100%" height="100%">
          <defs>
            <radialGradient
              id="radialGradient"
              cx={position.x}
              cy={position.y}
              r="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={fill} stopOpacity="0.3" />
              <stop offset="100%" stopColor={fill} stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#radialGradient)"
          />
        </svg>
      </div>
    </div>
  )
}
