"use client"

import { useEffect, useState } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { getTokenBalance } from "@/app/utils/token/rpcEndpoints"

interface TokenBalanceProps {
  tokenMint: string
  tokenSymbol: string
  requiredBalance: number
  onBalanceCheck: (balance: number) => void
}

export function TokenBalance({ tokenMint, tokenSymbol, requiredBalance, onBalanceCheck }: TokenBalanceProps) {
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
          const balance = await getTokenBalance(publicKey.toBase58(), tokenMint)
          setBalance(balance)
          onBalanceCheck(balance)
        } catch (error) {
          console.error("Error fetching token balance:", error)
          setError("Failed to fetch balance. Please try again later.")
          onBalanceCheck(0)
        } finally {
          setIsLoading(false)
        }
      } else {
        setBalance(null)
        onBalanceCheck(0)
      }
    }

    fetchBalance()
  }, [connected, publicKey, tokenMint, onBalanceCheck])

  if (!connected) {
    return null
  }

  if (isLoading) {
    return <p>Fetching your {tokenSymbol} balance...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  if (balance !== null) {
    return (
      <p>
        You have {balance.toLocaleString()} {tokenSymbol}
        <span className={balance >= requiredBalance ? "text-green-500" : "text-red-500"}>
          {" "}
          (Required: {requiredBalance})
        </span>
      </p>
    )
  }

  return null
}

