
'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
 
export function RobotScene() {
  return (
    <Card className="w-full h-[500px] bg-transparent relative overflow-hidden border-none shadow-none">
      <div className="flex h-full">
        <div className="w-full relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
