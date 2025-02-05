import { Connection, PublicKey } from "@solana/web3.js"
import type { NextRequest } from "next/server"

const HELIUS_API_KEY = process.env.HELIUS_API_KEY
const HELIUS_RPC_URL = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`

export async function GET(request: NextRequest) {
  if (!HELIUS_API_KEY) {
    console.error("HELIUS_API_KEY is not set")
    return new Response("Server configuration error", { status: 500 })
  }

  const mintAddress = request.nextUrl.searchParams.get("mintAddress")

  if (!mintAddress) {
    return new Response("Missing mintAddress parameter", { status: 400 })
  }

  const connection = new Connection(HELIUS_RPC_URL)

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

      return { address: owner, amount }
    })

    const sortedHolders = holders
      .sort((a, b) => b.amount - a.amount)
      .slice(1, 51)
      .map((holder, index) => ({ ...holder, rank: index + 1 }))

    const totalAmount = sortedHolders.reduce((sum, holder) => sum + holder.amount, 0)

    const holdersWithPercentage = sortedHolders.map((holder) => ({
      ...holder,
      rewardPercentage: (holder.amount / totalAmount) * 100,
    }))

    return Response.json(holdersWithPercentage)
  } catch (error) {
    console.error("Error fetching token holders:", error)
    return new Response(`Error fetching token holders: ${error instanceof Error ? error.message : String(error)}`, {
      status: 500,
    })
  }
}

