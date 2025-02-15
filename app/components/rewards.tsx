import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Rewards() {
  return (
    <motion.section {...fadeIn} className="space-y-8 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">How $KANYE Rewards Holders</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">AirLock System & Meteora Integration</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Daily LP Rewards:</strong> Top 50 holders earn rewards airdropped directly.
            </li>
            <li>
              <strong>Random Snapshots:</strong> Daily snapshots determine top holders.
            </li>
            <li>
              <strong>Automatic Distribution:</strong> No claiming required, rewards are sent automatically.
            </li>
            <li>
              <strong>Competitive Model:</strong> Stay in the Top 50 to keep earning.
            </li>
            <li>
              <strong>Dev Accountability:</strong> Developers must hold to earn, no tolerance for ruggers.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Migration to Meteora & LP Rewards</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Migration Trigger:</strong> Occurs when market cap reaches 432 SOL.
            </li>
            <li>
              <strong>Permanent Liquidity Lock:</strong> Ensures long-term safety and stability.
            </li>
            <li>
              <strong>Reward Distribution:</strong> Top 50 holders share 90% of LP rewards.
            </li>
            <li>
              <strong>Perpetual Earnings:</strong> Creators & holders earn trading fees indefinitely.
            </li>
            <li>
              <strong>Auto-Compounding:</strong> Rewards grow over time as fees are reinvested.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-2xl font-bold">Example: How You Earn SOL Rewards</h3>
        <p>Let&apos;s say:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You hold <strong>5M $KANYE tokens</strong>.
          </li>
          <li>
            The top 50 wallets together hold <strong>50M tokens</strong>.
          </li>
          <li>
            Your share of the top 50 wallets = <strong>5M / 50M = 10%</strong>.
          </li>
        </ul>
        <p>
          Now, assume the locked liquidity pool generates <strong>X SOL per day</strong> from trading fees.
        </p>
        <p>
          Your <strong>daily SOL earnings</strong> = <strong>10% of X</strong> → <strong>0.10 × X SOL</strong>.
        </p>
        <h4 className="text-xl font-semibold mt-4">Real-World Example:</h4>
        <p>If the locked liquidity generates:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>100 SOL per day</strong> → You receive <strong>10 SOL per day</strong>.
          </li>
          <li>
            <strong>500 SOL per day</strong> → You receive <strong>50 SOL per day</strong>.
          </li>
        </ul>
      </div>



        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Gamifying the Experience</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Top 50 Incentive:</strong> Encourages long-term holding and discourages sell pressure.
            </li>
            <li>
              <strong>Community Growth:</strong> More engagement leads to higher trading volume and rewards.
            </li>
            <li>
              <strong>Seamless Rewards:</strong> Automatic distribution creates a frictionless experience.
            </li>
            <li>
              <strong>Anti Pump & Dump:</strong> Model favors diamond-hand holders over short-term flippers.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-2xl font-bold">Tracking & Transparency</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Track rewards via airlock.sol</li>
          <li>Snapshots & distribution are public and verifiable.</li>
          <li>Ensures fairness and long-term sustainability for the $KANYE ecosystem.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-2xl font-bold">Join the $KANYE Experience</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Get in early, accumulate tokens, and enjoy exclusive benefits.</li>
          <li>Be part of an innovative fan-driven project that leverages tokenomics for engagement and rewards.</li>
          <li>No more pump and dump—grow the community and earn lifetime rewards!</li>
          <li>Your holdings give you real, perpetual ownership in the token&apos;s success!</li>
        </ul>
      </div>
    </motion.section>
  )
}

