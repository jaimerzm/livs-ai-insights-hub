
import { MagnetLines } from "@/components/ui/magnet-lines"

function MagnetLinesDemo() {
  return (
    <MagnetLines
      rows={12}
      columns={12}
      containerSize="100vw"
      lineColor="rgba(255, 255, 255, 0.1)"
      lineWidth="0.8vmin"
      lineHeight="5vmin"
      baseAngle={0}
      style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0,
        height: "100vh",
        width: "100vw",
        zIndex: 0,
        opacity: 0.2
      }}
    />
  )
}

export { MagnetLinesDemo }
