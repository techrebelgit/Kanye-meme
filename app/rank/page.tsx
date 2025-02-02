import type { Metadata } from "next"
import RankContent from "./rank-content"

export const metadata: Metadata = {
  title: "$KANYE Token Holders Rank",
  description: "See the top 50 holders of the $KANYE token.",
}

export default function RankPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] flex flex-col">
      <RankContent />
    </div>
  )
}

