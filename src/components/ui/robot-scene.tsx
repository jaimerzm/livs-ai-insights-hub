
'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
 
export function RobotScene() {
  return (
    <Card className="w-full h-[500px] bg-transparent relative overflow-hidden border-none shadow-none">
      <div className="flex h-full">
        <div className="w-full relative">
          <SplineScene 
            scene="placeholder"
            className="w-full h-full"
          />
          
          {/* Add a decorative element to replace the 3D robot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-blue-500/10 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                LIVS AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
