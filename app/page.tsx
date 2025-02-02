import Image from "next/image"
import { Button } from "@/components/ui/button"
import { KanyeQuote } from "@/components/kanye-quote"
import { SocialLinks } from "@/components/social-links"
import Header from "@/components/header"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333] flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col justify-center items-center px-4 space-y-20">
        <section className="text-center space-y-12 max-w-5xl mx-auto w-full">
          <div className="space-y-6">
            <h2 className="text-7xl sm:text-9xl font-bold tracking-tighter">$KANYE</h2>
            <p className="text-xl sm:text-2xl max-w-2xl mx-auto">The meme token that&apos;s stronger than ever.</p>
          </div>
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
            <Image
              src="/kanye-portrait.jpg"
              alt="Artistic portrait of Kanye in vibrant colors"
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        <section className="text-center space-y-6 max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold">About</h3>
          <p className="text-lg sm:text-xl">
            $KANYE is not just a meme token. It&apos;s a movement. A statement. A digital revolution inspired by the
            unapologetic creativity of Kanye West.
          </p>
          <KanyeQuote />
        </section>

        <section className="text-center space-y-6 w-full max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold">Tokenomics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "1B Supply", desc: "Total token supply" },
              { title: "LP Locked", desc: "Liquidity locked" },
              { title: "LP Fees", desc: "TOP 50 earn LP fees" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-1">
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 w-full max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-center">How $KANYE Rewards Holders</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-2">🌑 Phase 1: Fair Launch on Moonshot</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>No pre-sales or insider allocations—everyone gets a fair shot.</li>
                <li>1% fee on buys & sells keeps the market balanced.</li>
                <li>Liquidity migrates to Meteora once market cap hits 432 SOL (or 25 ETH).</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-2">🚀 Phase 2: Transition to Meteora</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Liquidity is locked forever—no rug pulls.</li>
                <li>Fees start at 15%, gradually dropping to 0.25% after 24 hours.</li>
                <li>Every trade generates fees for the next phase.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-2">💰 Phase 3: AirLock – Daily Rewards</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fees from locked liquidity are airdropped daily to top 50 wallets.</li>
                <li>Big holders have a huge incentive not to sell, keeping the market stable.</li>
                <li>All holders benefit from increased market stability.</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">
              This Moonshot + Meteora combo makes $KANYE a fairer, safer, and stronger memecoin.
            </p>
          </div>
        </section>

        <section className="text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold">Join the Movement</h3>
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
      </main>

      <footer className="p-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} $KANYE Token. All rights reserved.</p>
      </footer>
    </div>
  )
}

