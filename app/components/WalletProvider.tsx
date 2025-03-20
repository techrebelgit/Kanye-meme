"use client"

import { useMemo } from "react"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets"
import { ALCHEMY_RPC_URL } from "../utils/token/rpcEndpoints"
import type React from "react" // Added import for React

require("@solana/wallet-adapter-react-ui/styles.css")

export default function WalletContextProvider({ children }: { children: React.ReactNode }) {
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], [])

  return (
    <ConnectionProvider endpoint={ALCHEMY_RPC_URL}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
