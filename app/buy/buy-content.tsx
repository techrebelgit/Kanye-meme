"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Script from "next/script"

const KANYE_TOKEN_MINT = "FsiBnVGmfQzDkkXJfe7hKfV3GWjJEwg6M2Y72eyhmoon"

export default function BuyContent() {
  useEffect(() => {
    const initJupiter = () => {
      if (typeof window.Jupiter !== "undefined") {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "integrated-terminal",
          endpoint: "https://api.mainnet-beta.solana.com",
          defaultExplorer: "Solscan",
          formProps: {
            fixedOutputMint: true,
            initialOutputMint: KANYE_TOKEN_MINT,
            initialSlippageBps: 5,
          },
        })
      }
    }

    // Initialize Jupiter if the script is already loaded
    initJupiter()

    // Backup initialization in case the script loads after our first attempt
    window.addEventListener("load", initJupiter)

    return () => {
      window.removeEventListener("load", initJupiter)
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
        <Script src="https://terminal.jup.ag/main-v3.js" strategy="lazyOnload" />
        <div id="integrated-terminal" className="w-full max-w-[480px] h-[600px] bg-white rounded-lg shadow-sm" />
      </motion.div>
    </div>
  )
}

