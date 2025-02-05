import type { Metadata } from "next"
import RankCheckContent from "./rankcheck-content"

export const metadata: Metadata = {
  title: "Token Holders Rank Check",
  description: "Check the top 50 holders of any Solana token by entering its mint address.",
}

export default function RankCheckPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] flex flex-col">
      <RankCheckContent />
    </div>
  )
}

