"use client"

import { motion } from "framer-motion"
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { KanyeQuote } from "@/components/kanye-quote"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function VisionContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
      <Hero />
      <IntroductionSection />
      <AboutSection />
      <HowItWorksSection />
    </div>
  )
}

function Hero() {
  return (
    <motion.section {...fadeIn} className="text-center space-y-6">
      <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter">Our Vision</h1>
      <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
        Uniting fans, building momentum, and shaping the future of fan engagement.
      </p>
      <div className="flex justify-center">
        <KanyeQuote />
      </div>
    </motion.section>
  )
}

function IntroductionSection() {
  return (
    <motion.section {...fadeIn} className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold">Introduction to Fan Tokens</h2>
      <p className="text-lg sm:text-xl">
        Fan tokens are a powerful way for communities to come together around a common goal. They allow fans to unite,
        collaborate, and engage in meaningful ways, fostering a shared movement. The $KANYE token is not officially
        affiliated with Kanye West, but it serves as a rallying point for fans to connect, build momentum, and work
        towards bringing Kanye into the ecosystem. By participating, fans contribute to a collective effort that
        amplifies their shared passion and vision.
      </p>
      <div className="flex justify-center">
        <KanyeQuote />
      </div>
    </motion.section>
  )
}

function AboutSection() {
  return (
    <motion.section {...fadeIn} className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold">About $KANYE</h2>
      <p className="text-lg sm:text-xl">
        Step into the spotlight with $KANYE! This isn&apos;t just any token—it&apos;s a trendsetter in the fan token
        revolution. By holding $KANYE, you join a community driven to make history. Think $Drake or $Kendrick could do
        better? Well, they don&apos;t even exist yet! But if you&apos;re bold enough, go ahead and launch
        them—let&apos;s see who hits $1B first! We&apos;re going HAM on Kanye—the one and only GOAT! Let&apos;s elevate
        Kanye&apos;s influence in the crypto space together. WAGMI!
      </p>
      <div className="flex justify-center">
        <KanyeQuote />
      </div>
    </motion.section>
  )
}

function HowItWorksSection() {
  return (
    <motion.section {...fadeIn} className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">The $KANYE Journey – Inspired by the Legend 🎶</h2>
      <p className="text-lg sm:text-xl text-center">
        $KANYE isn&apos;t just another token—it follows a structured path inspired by{" "}
        <strong>Kanye West&apos;s iconic albums</strong>, each representing a key phase in the ecosystem&apos;s growth.
      </p>

      <div className="space-y-8">
        <PhaseCard
          title='"The College Dropout" – Fair Launch (Moonshot)'
          emoji="🎓"
          content={[
            "Just like Kanye&apos;s breakthrough, $KANYE starts with no pre-sales, no insider allocations—it&apos;s a fair launch for everyone.",
            "Anyone can buy at launch and start their journey.",
            "1% fee on buys & sells (while on Moonshot) to maintain market health.",
            "When the market cap reaches 432 SOL (or 25 ETH), $KANYE graduates to the next level.",
          ]}
        />

        <PhaseCard
          title='"Graduation" – Locked Liquidity & Smart Fees (Meteora)'
          emoji="🎤"
          content={[
            "Just like Kanye leveled up with Graduation, this is where $KANYE gets serious.",
            "Liquidity is permanently locked → No rugs, no scams.",
            "Dynamic fees start high (15%) and decrease to 0.25% over 24 hours.",
            "Every trade generates fees that fuel the next phase.",
          ]}
        />

        <PhaseCard
          title='"My Beautiful Dark Twisted Fantasy" – AirLock Rewards for Top Holders'
          emoji="🔥"
          content={[
            "This is the masterpiece phase, where the top 50 wallets start earning daily SOL rewards.",
            "The bigger your share, the bigger your cut.",
            "Large holders have no reason to sell, keeping the price stable.",
            "Even smaller holders benefit, knowing that big wallets are incentivized to hold.",
          ]}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-2xl font-bold">Example: How You Earn SOL Rewards</h3>
        <p>Let&apos;s say:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You hold <strong>5M $KANYE tokens</strong>.
          </li>
          <li>
            The top 50 wallets together hold <strong>50M tokens</strong>.
          </li>
          <li>
            Your share of the top 50 wallets = <strong>5M / 50M = 10%</strong>.
          </li>
        </ul>
        <p>
          Now, assume the locked liquidity pool generates <strong>X SOL per day</strong> from trading fees.
        </p>
        <p>
          Your <strong>daily SOL earnings</strong> = <strong>10% of X</strong> → <strong>0.10 × X SOL</strong>.
        </p>
        <h4 className="text-xl font-semibold mt-4">Real-World Example:</h4>
        <p>If the locked liquidity generates:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>100 SOL per day</strong> → You receive <strong>10 SOL per day</strong>.
          </li>
          <li>
            <strong>500 SOL per day</strong> → You receive <strong>50 SOL per day</strong>.
          </li>
        </ul>
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
        </ul>
      </div>

      <p className="text-xl font-bold text-center">Hold $KANYE. Earn Rewards. Watch the Throne.</p>

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

function ListItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <p className="text-[#333333]">{text}</p>
    </li>
  )
}

