import type { Metadata } from "next"
import BuyContent from "./buy-content"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Buy $KANYE Token",
  description: "Buy $KANYE token using Jupiter Terminal - the most efficient DEX aggregator on Solana.",
}

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] flex flex-col">
      <Header />
      <main className="flex-grow">
        <BuyContent />
      </main>
      <Footer />
    </div>
  )
}

