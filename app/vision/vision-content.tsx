"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { KanyeQuote } from "@/app/components/kanye-quote"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function VisionContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
      <Hero />
      <TableOfContents />
      <IntroductionSection />
      <AboutSection />
      <HowItWorksSection />
    </div>
  )
}

function Hero() {
  return (
    <motion.section {...fadeIn} className="text-center space-y-8">
      <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter">Our Vision</h1>
      <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
        Uniting fans through tokens, shaping the future of fan engagement.
      </p>
      <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaintPablo-OrECXD3hT1a7z0t9Z9YbPkeBBEMWcL.png"
          alt="Dramatic black and white photograph from Saint Pablo tour"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="flex justify-center">
        <KanyeQuote />
      </div>
    </motion.section>
  )
}

function TableOfContents() {
  return (
    <motion.nav {...fadeIn} className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        <li>
          <a href="#introduction" className="text-[#333333] hover:text-[#555555]">
            Introduction to Fan Tokens
          </a>
        </li>
        <li>
          <a href="#about" className="text-[#333333] hover:text-[#555555]">
            About $KANYE
          </a>
        </li>
        <li>
          <a href="#how-it-works" className="text-[#333333] hover:text-[#555555]">
            How It Works
          </a>
        </li>
      </ul>
    </motion.nav>
  )
}

function IntroductionSection() {
  return (
    <motion.section id="introduction" {...fadeIn} className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold">Fan Tokens</h2>
      <p className="text-lg sm:text-xl">
        Tokens are a powerful way for creators to shape how their fans experience their art.  

        Ownership of a token creates a bond between holder and creator. This bond can be used to craft exclusive experiences for holders.
        Buying a token is only the beginning of the holder experience. 
      </p>
      <div className="flex justify-center">
        <KanyeQuote />
      </div>
    </motion.section>
  )
}

function AboutSection() {
  return (
    <motion.section id="about" {...fadeIn} className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold">About $KANYE</h2>
      <p className="text-lg sm:text-xl">
        The purpose of this token is to explore and build those experiences. To show what is possible with this technology. 
        Memecoins are plagued with rugs, scams, entitled influencers, posers and gatekeepers. 
        We need a $KANYE in this space. An unapologetic, trendsetting, bar-raising, uncontrolable, "cant-tell-me-nothing" builder. 
        Now play Off The Grid. 
      </p>
      <div className="flex justify-center">
        <KanyeQuote />
      </div>
    </motion.section>
  )
}

function HowItWorksSection() {
  return (
    <motion.section id="how-it-works" {...fadeIn} className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">The $KANYE Journey – Inspired by the Legend 🎶</h2>
      <p className="text-lg sm:text-xl text-center">
        $KANYE will follow a structured path inspired by{" "}
        <strong>Kanye West&apos;s iconic albums</strong>, each representing a key phase in the ecosystem&apos;s growth.
      </p>

      <div className="space-y-8">
        <PhaseCard
          title='"The College Dropout" – Fair Launch (Moonshot)'
          emoji="🎓"
          content={[
            "Just like his breakthrough, $KANYE starts with no pre-sales, no insider allocations. Fair launch.",
            "Anyone can buy at launch and hold.",
            "1% fee on buys & sells (while on Moonshot) to maintain market health.",
            "We will start building on this phase.",
          ]}
        />
        <PhaseCard
          title='"Late Registration" – Pre-bond'
          emoji="🎓"
          content={[
            "Once The College Dropout is released, it's time to wake up!.",
            "On this stage we will start making doing efforts to Touch the Sky",
            "1% fee on buys & sells (while on Moonshot) to maintain market health.",
            "When the market cap reaches 432 SOL (or 25 ETH), $KANYE graduates.",
          ]}
        />
        <PhaseCard
          title='"Graduation" – '
          emoji="🎤"
          content={[
            "Just like Kanye leveled up with Graduation, this is where $KANYE gets serious.",
            "Liquidity is permanently locked → No rugs, no scams.",
            "Dynamic fees start high (15%) and decrease to 0.25% over 24 hours.",
            "Every trade generates fees that fuel the next phase.",
          ]}
        />

      </div>


      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-2xl font-bold">Why This is a Legendary Move 🎶</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Safe & Fair</strong> → No pre-sale, no rugs, liquidity is locked.
          </li>
          <li>
            <strong>Built to Last</strong> → Incentives keep big holders from selling.
          </li>
          <li>
            <strong>Community-Driven</strong> → The more people trade, the more the ecosystem grows.
          </li>
          <li>
            <strong>Passionate builder</strong> → This is the msot important. We don&apos;t care for the price. Builders build. 
          </li>
        </ul>
      </div>

      <p className="text-xl font-bold text-center"> Watch the Throne.</p>

      <div className="text-center mt-12">
        <Button asChild className="bg-[#333333] text-white hover:bg-[#555555]">
          <Link
            href="https://dexscreener.com/solana/fsibnvgmfqzdkkxjfe7hkfv3gwjjewg6m2y72eyhmoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY
          </Link>
        </Button>
      </div>
      <div className="flex justify-center">
        <KanyeQuote />
      </div>
    </motion.section>
  )
}

function PhaseCard({ title, emoji, content }: { title: string; emoji: string; content: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <h3 className="text-2xl font-bold">
        {emoji} {title}
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

