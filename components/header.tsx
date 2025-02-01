import Link from "next/link"
import { Button } from "@/components/ui/button"
import { KanyeQuote } from "./kanye-quote"

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <KanyeQuote />
      <Button asChild className="bg-[#333333] text-white hover:bg-[#555555]">
        <Link
          href="https://dexscreener.com/solana/fsibnvgmfqzdkkxjfe7hkfv3gwjjewg6m2y72eyhmoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY
        </Link>
      </Button>
    </header>
  )
}

