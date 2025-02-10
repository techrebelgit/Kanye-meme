"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import Hero from "./Hero"
import About from "./About"
import Tokenomics from "./Tokenomics"
import Rewards from "./rewards"
import JoinMovement from "./JoinMovement"
import Footer from "./Footer"

export default function HomeContent() {
  const { publicKey } = useWallet()

  return (
    <>
      <main className="flex-grow flex flex-col justify-center items-center px-4 space-y-20">
        {publicKey && (
          <div className="text-sm">
            Connected: {publicKey.toBase58().slice(0, 4)}...
            {publicKey.toBase58().slice(-4)}
          </div>
        )}
        <Hero />
        <About />
        <Tokenomics />
        <Rewards />
        <JoinMovement />
      </main>
      <Footer />
    </>
  )
}

