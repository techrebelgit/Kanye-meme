import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Tokenomics() {
  return (
    <motion.section {...fadeIn} className="space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">$KANYE Tokenomics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { title: "1B Supply", desc: "Total token supply" },
          { title: "Fair Launch", desc: "No pre-sale, no insiders" },
          { title: "Ownership Renounced", desc: "Immutable contract" },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-1">
            <p className="font-bold text-lg">{item.title}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Fair Launch:</strong> No pre-sales or insider allocations—everyone gets a fair shot.
          </li>
          <li>
            <strong>Locked Liquidity:</strong> Liquidity is locked forever, ensuring long-term stability.
          </li>
          <li>
            <strong>Dynamic Fees:</strong> Fees start high and decrease over time, incentivizing early adoption.
          </li>
          <li>
            <strong>Rewards System:</strong> Top holders earn daily SOL rewards from trading fees.
          </li>
          <li>
            <strong>Solana-based:</strong> $KANYE is available on the Solana blockchain.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Trading & Fees (while on Moonshot)</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Open Market:</strong> Buy & sell anytime with open market trading.
          </li>
          <li>
            <strong>Flat 1% Fee while:</strong> Charged on buy and sell orders.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Meteora Memecoin Pools (once bonded)</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Permanently-Locked Liquidity:</strong> Ensures stability while generating rewards.
          </li>
          <li>
            <strong>Auto-Compounding:</strong> Fees are reinvested, increasing long-term earnings.
          </li>
          <li>
            <strong>Dynamic Fee Model:</strong> Starts at 15%, reducing to 0.25% after 24 hours.
          </li>
          <li>
            <strong>Volume Referral Fee:</strong> 20% of trading fees go to integrators and trading bots.
          </li>
          <li>
            <strong>Fair Distribution:</strong> Rewards go directly to holders and creators.
          </li>
        </ul>
      </div>
    </motion.section>
  )
}

