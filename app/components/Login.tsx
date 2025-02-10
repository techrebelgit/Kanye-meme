"use client"

import type { FC } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export const Login: FC = () => {
  const { publicKey } = useWallet()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Welcome to Token Gated Website</h1>
        {publicKey ? <p className="mt-3 text-2xl">Logged in as: {publicKey.toBase58()}</p> : <WalletMultiButton />}
      </main>
    </div>
  )
}

