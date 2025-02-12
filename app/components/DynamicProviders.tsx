"use client"

import dynamic from "next/dynamic"
import type React from "react"

const WalletContextProvider = dynamic(() => import("./WalletProvider"), { ssr: false })
const Navbar = dynamic(() => import("./Header"), { ssr: false })
const Footer = dynamic(() => import("./Footer"), { ssr: false })

export function DynamicProviders({ children }: { children: React.ReactNode }) {
  return (
    <WalletContextProvider>
      <Navbar />
      {children}
      <Footer />
    </WalletContextProvider>
  )
}

