import Image from "next/image"

export default function Hero() {
  return (
    <section className="text-center space-y-12 max-w-5xl mx-auto w-full">
      <div className="space-y-6">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter">$KANYE</h1>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto">The meme token that&apos;s stronger than ever.</p>
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

