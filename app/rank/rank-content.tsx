"use client"

import { useState, useEffect } from "react"
import { Connection, PublicKey } from "@solana/web3.js"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const KANYE_TOKEN_MINT = "FsiBnVGmfQzDkkXJfe7hKfV3GWjJEwg6M2Y72eyhmoon"
const HELIUS_RPC_URL = process.env.NEXT_PUBLIC_HELIUS_RPC_URL || ""

interface TokenHolder {
  address: string
  amount: number
  rank: number
  rewardPercentage: number
}

const connection = new Connection(HELIUS_RPC_URL)

async function getTokenHolders(mintAddress: string): Promise<TokenHolder[]> {
  try {
    const mintPublicKey = new PublicKey(mintAddress)
    const tokenAccounts = await connection.getProgramAccounts(
      new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
      {
        filters: [{ dataSize: 165 }, { memcmp: { offset: 0, bytes: mintPublicKey.toBase58() } }],
      },
    )

    const holders = tokenAccounts.map((account) => {
      const data = account.account.data
      const owner = new PublicKey(data.slice(32, 64)).toBase58()
      const amount = Number(data.readBigUInt64LE(64))

      return { address: owner, amount, rank: 0, rewardPercentage: 0 }
    })

    const sortedHolders = holders
      .sort((a, b) => b.amount - a.amount)
      .slice(1, 51)
      .map((holder, index) => ({ ...holder, rank: index + 1 }))

    const totalAmount = sortedHolders.reduce((sum, holder) => sum + holder.amount, 0)

    return sortedHolders.map((holder) => ({
      ...holder,
      rewardPercentage: (holder.amount / totalAmount) * 100,
    }))
  } catch (error) {
    console.error("Error fetching token holders:", error)
    throw error
  }
}

export default function RankContent() {
  const [holders, setHolders] = useState<TokenHolder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchTopHolders() {
    setLoading(true)
    setError(null)
    try {
      const holderData = await getTokenHolders(KANYE_TOKEN_MINT)
      setHolders(holderData)
    } catch (err) {
      console.error("Error fetching token holders:", err)
      setError(`Failed to fetch token holders: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTopHolders()
  }, []) //Fixed: Added empty dependency array to useEffect

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 text-center tracking-tighter">Top 50 $KANYE Holders</h1>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Discover the top holders of the $KANYE token, their current balances, and potential rewards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-6 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">How Rewards Work</h2>
          <p className="mb-4">
            In the $KANYE ecosystem, the top 50 token holders are eligible for daily SOL rewards. These rewards are
            generated from the fees collected in the locked liquidity pool.
          </p>
          <p className="mb-4">
            The amount of rewards each holder receives is proportional to their share of the total tokens held by the
            top 50 wallets. For example, if you hold 10% of the tokens among the top 50 holders, you&apos;ll receive 10% of
            the daily rewards.
          </p>
          <p>
            The percentages shown in the table below represent each wallet&apos;s share of the potential rewards, based on
            their current token balance.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-lg">Loading top holders...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">{error}</p>
            <Button onClick={fetchTopHolders} className="mt-4">
              Try Again
            </Button>
          </div>
        ) : (
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
                        Reward %
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
                          {holder.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          {holder.rewardPercentage.toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button onClick={fetchTopHolders} disabled={loading}>
                Refresh Data
              </Button>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  )
}

