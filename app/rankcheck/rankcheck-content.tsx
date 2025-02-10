"use client"

import { useState } from "react"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { Button } from "@/app/components/ui/button"
import { Input } from "../components/ui/input"
import { motion } from "framer-motion"
import { formatNumber } from "@/lib/utils"

interface TokenHolder {
  address: string
  amount: number
  rank: number
  rewardPercentage: number
}

export default function RankCheckContent() {
  const [mintAddress, setMintAddress] = useState("")
  const [holders, setHolders] = useState<TokenHolder[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchTopHolders() {
    if (!mintAddress) {
      setError("Please enter a valid Solana token mint address.")
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/rankcheck?mintAddress=${mintAddress}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const holderData = await response.json()
      setHolders(holderData)
    } catch (err) {
      console.error("Error fetching token holders:", err)
      setError(`Failed to fetch token holders: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 text-center tracking-tighter">Token Holders Rank Check</h1>
          <div className="mb-8 text-center">
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Enter a Solana token mint address to see its top 50 holders, their balances, and percentage of total
              fees that should be airdropped by the airlock system.
            </p>
            <p className="text-lg mb-4 max-w-2xl mx-auto">
              Note: The first wallet (rank 1) is excluded as it&apos;s typically the liquidity pool. Percentages shown
              represent each holder&apos;s share of the total tokens held by the top 50 wallets.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center space-x-4">
            <Input
              type="text"
              placeholder="Enter Solana token mint address"
              value={mintAddress}
              onChange={(e) => setMintAddress(e.target.value)}
              className="max-w-md"
            />
            <Button onClick={fetchTopHolders} disabled={loading}>
              {loading ? "Fetching..." : "Check Holders"}
            </Button>
          </div>
        </motion.div>

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-center mb-4">
            {error}
          </motion.div>
        )}

        {holders.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        % of Top 50
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {holders.map((holder) => (
                      <tr key={holder.address} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{holder.rank}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                          {holder.address.slice(0, 4)}...{holder.address.slice(-4)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          {formatNumber(Math.floor(holder.amount))}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          {holder.rewardPercentage.toFixed(4)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  )
}

