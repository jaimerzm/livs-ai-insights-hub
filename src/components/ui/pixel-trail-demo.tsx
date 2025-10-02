import { useScreenSize } from "@/hooks/use-screen-size"
import { PixelTrail } from "@/components/ui/pixel-trail"

const PixelTrailDemo: React.FC = () => {
  const screenSize = useScreenSize()

  return (
    <div className="relative w-full h-full min-h-[500px] bg-[#dcddd7] text-black flex flex-col">
      <div className="absolute inset-0 z-0">
        <PixelTrail
          pixelSize={screenSize.lessThan(`md`) ? 48 : 80}
          fadeDuration={0}
          delay={1200}
          pixelClassName="rounded-full bg-[#ffa04f]"
        />
      </div>

      <div className="justify-center items-center flex flex-col w-full h-full z-10 pointer-events-none space-y-2 md:space-y-8">
        <h2 className="text-3xl cursor-pointer sm:text-5xl md:text-7xl tracking-tight font-bold">
          WEB DEMO
        </h2>
      </div>

      <p className="absolute text-xs md:text-base bottom-4 right-4 pointer-events-none font-semibold">
        LIVS
      </p>
    </div>
  )
}

export { PixelTrailDemo }
