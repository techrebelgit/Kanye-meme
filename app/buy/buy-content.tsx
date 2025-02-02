"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const KANYE_TOKEN_MINT = "FsiBnVGmfQzDkkXJfe7hKfV3GWjJEwg6M2Y72eyhmoon"

export default function BuyContent() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://terminal.jup.ag/main-v3.js"
    script.async = true

    script.onload = () => {
      if (typeof window.Jupiter !== "undefined" && containerRef.current) {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "integrated-terminal",
          endpoint: "https://api.mainnet-beta.solana.com", // You can change this to your preferred RPC endpoint
          defaultExplorer: "Solscan",
          formProps: {
            initialOutputMint: KANYE_TOKEN_MINT,
            fixedOutputMint: true,
          },
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 mb-12"
      >
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter">Buy $KANYE</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Use Jupiter Terminal to swap any token for $KANYE. Jupiter aggregates all DEXes to find you the best price.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center"
      >
        <div
          id="integrated-terminal"
          ref={containerRef}
          style={{ width: "100%", maxWidth: "480px", height: "660px" }}
        />
      </motion.div>
    </div>
  )
}


