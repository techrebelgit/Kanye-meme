"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { getTokenBalance } from "@/app/utils/token/rpcEndpoints"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Link from "next/link"
import { Button } from "./ui/button"

const KANYE_TOKEN_MINT = "FsiBnVGmfQzDkkXJfe7hKfV3GWjJEwg6M2Y72eyhmoon"
const REQUIRED_BALANCE = 5000000000000

interface TokenGateProps {
  children: ReactNode
}

export function TokenGate({ children }: TokenGateProps) {
  const { publicKey, connected } = useWallet()
  const [balance, setBalance] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBalance() {
      if (connected && publicKey) {
        setIsLoading(true)
        setError(null)
        try {
          const balance = await getTokenBalance(publicKey.toBase58(), KANYE_TOKEN_MINT)
          setBalance(balance)
        } catch (error) {
          console.error("Error fetching token balance:", error)
          setError("Failed to fetch balance. Please try again later.")
        } finally {
          setIsLoading(false)
        }
      } else {
        setBalance(null)
      }
    }

    fetchBalance()
  }, [connected, publicKey])

  if (!connected) {
    return (
      <div className="text-center">
        <p className="mb-4">Connect your wallet to access this content</p>
        <WalletMultiButton className="bg-black text-white hover:bg-gray-800" />
      </div>
    )
  }

  if (isLoading) {
    return <p>Fetching your $KANYE balance...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  if (balance === null) {
    return <p>Unable to fetch your $KANYE balance</p>
  }

  if (balance < REQUIRED_BALANCE) {
    return (
      <div className="text-center">
        {balance === 0 ? (
          <p className="text-red-500 mb-4">Yo, broke-ass! You ain&apos;t got no $KANYE? That&apos;s wack!</p>
        ) : (
          <p className="text-yellow-500 mb-4">
            You only got {balance.toLocaleString()} $KANYE. You need at least {REQUIRED_BALANCE} to access this content.
          </p>
        )}
        <Button asChild className="bg-[#333333] text-white hover:bg-[#555555]">
          <Link
            href="https://dexscreener.com/solana/fsibnvgmfqzdkkxjfe7hkfv3gwjjewg6m2y72eyhmoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY $KANYE
          </Link>
        </Button>
      </div>
    )
  }

  return <>{children}</>
}

