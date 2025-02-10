import { KanyeQuote } from "./kanye-quote"

export default function About() {
  return (
    <section className="text-center space-y-6 max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
      <p className="text-lg sm:text-xl">
        $KANYE is not just a meme token. It&apos;s a movement. A statement. A digital revolution inspired by the
        unapologetic creativity of Kanye West.
      </p>
      <KanyeQuote />
    </section>
  )
}

