"use client"

import Hero from "./Hero"
import About from "./About"
import Tokenomics from "./Tokenomics"
import Rewards from "./rewards"
import JoinMovement from "./JoinMovement"
import KanyeBalanceCTA from "./KanyeBalanceCTA"

export default function HomeContent() {
  return (
    <>
      <main className="flex-grow flex flex-col justify-center items-center px-4 space-y-20">
        <Hero />
        <About />
        <Tokenomics />
        <Rewards />
        <JoinMovement />
      </main>
    </>
  )
}

