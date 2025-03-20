"use client"

import { motion } from "framer-motion"
import Tokenomics from "@/app/components/Tokenomics"
import Rewards from "@/app/components/rewards"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function TokenomicsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
      <Hero />
      <TokenomicsSection />
      <RewardsSection />
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
  )
}

function Hero() {
  return (
    <motion.section {...fadeIn} className="text-center space-y-12 max-w-5xl mx-auto w-full">
      <div className="space-y-6">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter">$KANYE</h1>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto">Understanding the tokenomics and rewards system</p>
      </div>
    </motion.section>
  )
}

function TokenomicsSection() {
  return (
    <motion.section {...fadeIn}>
      <Tokenomics />
    </motion.section>
  )
}

function RewardsSection() {
  return (
    <motion.section {...fadeIn}>
      <Rewards />
    </motion.section>
  )
}

