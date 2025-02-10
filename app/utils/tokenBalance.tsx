import { Connection, PublicKey } from "@solana/web3.js"
import { TOKEN_PROGRAM_ID } from "@solana/spl-token"

export async function getTokenBalance(walletAddress: string, tokenMintAddress: string): Promise<number> {
  const connection = new Connection("https://api.devnet.solana.com", "confirmed")
  const walletPublicKey = new PublicKey(walletAddress)
  const tokenMintPublicKey = new PublicKey(tokenMintAddress)

  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(walletPublicKey, {
    programId: TOKEN_PROGRAM_ID,
  })

  for (const account of tokenAccounts.value) {
    const tokenAmount = account.account.data.parsed.info.tokenAmount

    if (account.account.data.parsed.info.mint === tokenMintPublicKey.toBase58()) {
      return tokenAmount.uiAmount
    }
  }

  return 0
}

