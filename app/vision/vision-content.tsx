"use client"

import { motion } from "framer-motion"
import { Zap, Users, Trophy } from "lucide-react"
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
        them—let&apos;s see who hits $1B first! We&apos;re going HAM on Kanye—the one and only GOAT! Let&apos;s elevate Kanye&apos;s
        influence in the crypto space together. WAGMI!
      </p>
      <div className="flex justify-center">
        <KanyeQuote />
      </div>
    </motion.section>
  )
}

function HowItWorksSection() {
  return (
    <motion.section {...fadeIn} className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
      <p className="text-lg sm:text-xl">
        Jump on the $KANYE train and join the movement! Here&apos;s how you can get involved:
      </p>
      <ul className="space-y-4">
        <ListItem
          icon={<Zap className="text-[#333333]" />}
          text="Grab Your $KANYE Tokens: Snag your tokens and be part of the exclusive club."
        />
        <ListItem
          icon={<Users className="text-[#333333]" />}
          text="Join the Community: Connect with fellow fans, share your ideas, and help shape the future."
        />
        <ListItem
          icon={<Trophy className="text-[#333333]" />}
          text="Reap the Rewards: The top 50 $KANYE holders benefit from the Moonshot-Meteora Airlock system, which distributes fees from locked liquidity as rewards. This incentivizes holders to stay engaged and accumulate more tokens."
        />
      </ul>
      <p className="text-lg sm:text-xl">
        Find out more about the Airlock system and its reward mechanism{" "}
        <a href="#" className="text-[#333333] hover:underline">
          here
        </a>
        .
      </p>
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

function ListItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <p className="text-[#333333]">{text}</p>
    </li>
  )
}
