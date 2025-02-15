"use client"

import Hero from "./Hero"
import About from "./About"
import Link from "next/link"
import { Button } from "./ui/button"

export default function HomeContent() {
  return (
    <>
      <main className="flex-grow flex flex-col justify-center items-center px-4 space-y-20">
        <Hero />
        <About />
        <TokenomicsPreview />
      </main>
    </>
  )
}

function TokenomicsPreview() {
  return (
    <section className="text-center space-y-6 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold">Tokenomics & Rewards</h2>
      <p className="text-lg">
        $KANYE offers a unique tokenomics model with fair launch, locked liquidity, and daily rewards for top holders.
      </p>
      <ul className="text-lg list-disc pl-5 text-left space-y-2">
        <li>1 Billion total supply</li>
        <li>No pre-sale, no insiders</li>
        <li>Top 50 holders earn daily LP rewards</li>
        <li>Automatic reward distribution</li>
      </ul>
      <Button asChild className="bg-[#333333] text-white hover:bg-[#555555]">
        <Link href="/tokenomics">Explore Full Tokenomics</Link>
      </Button>
    </section>
  )
}

