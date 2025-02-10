import Link from "next/link"
import { Button } from "./ui/button"
import { SocialLinks } from "./social-links"
import { KanyeQuote } from "./kanye-quote"

export default function JoinMovement() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold">Join the Movement</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-[#333333] text-white hover:bg-[#555555]">
          <Link
            href="https://dexscreener.com/solana/fsibnvgmfqzdkkxjfe7hkfv3gwjjewg6m2y72eyhmoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-[#333333] text-[#333333] hover:bg-[#EEEEEE]">
          <Link href="https://t.me/KanyeMemeSol" target="_blank" rel="noopener noreferrer">
            Join Community
          </Link>
        </Button>
      </div>
      <SocialLinks />
      <KanyeQuote />
    </section>
  )
}

