import { Connection } from "@solana/web3.js"

export const ALCHEMY_RPC_URL = `https://solana-mainnet.g.alchemy.com/v2/QHS7XyJobH44iVtoNp3CCT_0GdsUSpdV`

const FALLBACK_RPC_ENDPOINTS = [
  "https://api.mainnet-beta.solana.com",
  "https://solana-api.projectserum.com",
  "https://rpc.ankr.com/solana",
]

const RPC_ENDPOINTS = [ALCHEMY_RPC_URL, ...FALLBACK_RPC_ENDPOINTS]

async function makeRpcRequest(endpoint: string, method: string, params: any[]) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method,
      params,
    }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const result = await response.json()
  if (result.error) {
    throw new Error(`RPC error: ${JSON.stringify(result.error)}`)
  }

  return result.result
}

export async function getTokenBalance(walletAddress: string, tokenMintAddress: string) {
  for (const endpoint of RPC_ENDPOINTS) {
    try {
      const tokenAccounts = await makeRpcRequest(endpoint, "getTokenAccountsByOwner", [
        walletAddress,
        { mint: tokenMintAddress },
        { encoding: "jsonParsed" },
      ])

      if (tokenAccounts.value.length > 0) {
        return tokenAccounts.value[0].account.data.parsed.info.tokenAmount.uiAmount
      }

      return 0 // If no token account found, balance is 0
    } catch (error) {
      console.error(`Failed to fetch token balance from ${endpoint}:`, error)
    }
  }

  throw new Error("Unable to fetch token balance from any RPC endpoint")
}

export async function getConnection(): Promise<Connection> {
  for (const endpoint of RPC_ENDPOINTS) {
    try {
      const connection = new Connection(endpoint, "confirmed")
      await connection.getVersion()
      console.log(`Connected to ${endpoint}`)
      return connection
    } catch (error) {
      console.warn(`Failed to connect to ${endpoint}:`, error)
    }
  }
  throw new Error("Unable to connect to any Solana RPC endpoint")
}

