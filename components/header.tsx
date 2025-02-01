"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KanyeQuote } from "@/components/kanye-quote"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkIfDesktop()
    window.addEventListener("resize", checkIfDesktop)

    return () => window.removeEventListener("resize", checkIfDesktop)
  }, [])

  return (
    <header className="p-6 flex justify-between items-center relative">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-2xl font-bold text-[#333333] hover:text-[#555555]">
          $KANYE
        </Link>
        {isDesktop && <KanyeQuote />}
      </div>
      {!isDesktop && (
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      )}
      <div className="flex items-center space-x-4">
        {isDesktop && (
          <Link href="/vision" className="text-[#333333] hover:text-[#555555]">
            Vision
          </Link>
        )}
        <Button asChild className="bg-[#333333] text-white hover:bg-[#555555]">
          <Link
            href="https://dexscreener.com/solana/fsibnvgmfqzdkkxjfe7hkfv3gwjjewg6m2y72eyhmoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY
          </Link>
        </Button>
      </div>
      {!isDesktop && isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-2 z-10">
          <Link href="/vision" className="block px-6 py-2 text-[#333333] hover:bg-[#f5f5f5]">
            Vision
          </Link>
        </div>
      )}
    </header>
  )
}

