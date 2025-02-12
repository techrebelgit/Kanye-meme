"use client"

import  TokenGate from "./TokenGate"
import Link from "next/link"
import { Button } from "./ui/button"


export default function KanyeBalanceCTA() {
  return (
    <TokenGate >
      <div className="text-center">
        <p className="text-green-500 mb-4">You have access to the $KANYE Experience!</p>
        <Button asChild className="bg-[#333333] text-white hover:bg-[#555555]">
          <Link href="/albums">Enter $KANYE Experience</Link>
        </Button>
      </div>
    </TokenGate>
  )
}

