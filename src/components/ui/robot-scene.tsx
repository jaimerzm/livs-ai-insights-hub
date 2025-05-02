
'use client'

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Card } from "@/components/ui/card"
import * as THREE from "three"

// Define proper TypeScript types for the Robot component
interface RobotProps {
  position?: [number, number, number];
  scale?: number | [number, number, number];
}

// Simple Robot model component
function Robot(props: RobotProps) {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHover] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  // Create a simple robot using basic Three.js geometries
  return (
    <group {...props} ref={meshRef}>
      {/* Robot head */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={hovered ? "#4169E1" : "#1E40AF"} 
          roughness={0.5}
          metalness={0.8}
        />
      </mesh>

      {/* Robot eyes */}
      <mesh 
        position={[-0.25, 1.6, 0.51]} 
        castShadow
        onClick={() => console.log("Eye clicked")}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.25, 1.6, 0.51]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={2} />
      </mesh>

      {/* Robot body */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1, 1]} />
        <meshStandardMaterial 
          color="#2563EB" 
          roughness={0.3} 
          metalness={0.6} 
        />
      </mesh>

      {/* Robot arms */}
      <mesh position={[-1, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.5} metalness={0.5} />
      </mesh>
      <mesh position={[1, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* Robot legs */}
      <mesh position={[-0.4, -0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color="#1E40AF" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[0.4, -0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color="#1E40AF" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  )
}

// Scene component that encapsulates the 3D environment
function RobotModel() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        castShadow 
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Robot position={[0, -1, 0]} scale={1.2} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        autoRotate
      />
    </Canvas>
  )
}

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
            <div className="w-full h-full" style={{ background: "linear-gradient(to bottom, #000000, #0f172a)" }}>
              <RobotModel />
            </div>
          ) : (
            <FallbackDisplay />
          )}
        </div>
      </div>
    </Card>
  )
}
