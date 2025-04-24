
import { MagnetLines } from "@/components/ui/magnet-lines"

function MagnetLinesDemo() {
  return (
    <MagnetLines
      rows={9}
      columns={9}
      containerSize="60vmin"
      lineColor="rgba(255, 255, 255, 0.1)"
      lineWidth="0.8vmin"
      lineHeight="5vmin"
      baseAngle={0}
      style={{ 
        margin: "2rem auto",
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 0,
        opacity: 0.2
      }}
    />
  )
}

export { MagnetLinesDemo };
