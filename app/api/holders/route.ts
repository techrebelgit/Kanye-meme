import { Connection, PublicKey } from "@solana/web3.js"

const KANYE_TOKEN_MINT = "FsiBnVGmfQzDkkXJfe7hKfV3GWjJEwg6M2Y72eyhmoon"
const HELIUS_RPC_URL = "https://mainnet.helius-rpc.com/?api-key=" + (process.env.HELIUS_API_KEY || "")

const connection = new Connection(HELIUS_RPC_URL)

export async function GET() {
  try {
    const mintPublicKey = new PublicKey(KANYE_TOKEN_MINT)
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
    return new Response("Error fetching token holders", { status: 500 })
  }
}

