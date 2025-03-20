"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { KanyeQuote } from "./kanye-quote"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export default function Header() {
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
      <div className="flex items-center space-x-4">
        {isDesktop ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Menu <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                  <Link href="/albums" className="w-full">
                    LISTEN
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/vision" className="w-full">
                    VISION
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/rank" className="w-full">
                    KANYE RANK
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tokenomics" className="w-full">
                    TOKENOMICS
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/vision" className="w-full">
                  VISION
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/rank" className="w-full">
                  KANYE RANK
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/rankcheck" className="w-full">
                  RANKCHECK
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <WalletMultiButton className="!bg-[#333333] !text-white hover:!bg-[#555555]" />

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
    </header>
  )
}

