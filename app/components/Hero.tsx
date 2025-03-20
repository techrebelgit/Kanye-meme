import Image from "next/image"
import KanyeBalanceCTA from "./KanyeBalanceCTA"


export default function Hero() {
  return (
    <section className="text-center space-y-12 max-w-5xl mx-auto w-full">
      <div className="space-y-6">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter">$KANYE</h1>
        <KanyeBalanceCTA />
      </div>
      <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
        <Image
          src="/kanye-portrait.jpg"
          alt="Artistic portrait of Kanye in vibrant colors"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  )
}

