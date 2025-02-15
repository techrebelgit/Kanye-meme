import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const faqData = [
  {
    question: "What is the $KANYE Experience?",
    answer:
      "The $KANYE Experience is a token-gated website available exclusively to holders of more than 1,000,000 $KANYE tokens. It offers a curated listening experience for Kanye West&apos;s discography, featuring a cleaner, more immersive platform than traditional streaming services like YouTube or Spotify.",
  },
  {
    question: "How do I access the site?",
    answer:
      "Connect your wallet to verify ownership of 1,000,000+ $KANYE tokens. Once verified, you gain access to browse and listen to albums. Clicking on an album takes you to a dedicated page where you can stream tracks, read lyrics, and see community commentary.",
  },
  {
    question: "Is it safe?",
    answer:
      "Yes! The website operates in read-only mode—your wallet is only used for verification. No transactions, approvals, or spending prompts occur at any time. Users must remain logged in to access the experience, but nothing is ever deducted from their wallets.",
  },
  {
    question: "What is the purpose of this project?",
    answer:
      "The $KANYE Experience demonstrates how tokens can be leveraged to enhance fan engagement. It is an experiment in token-gated content curation, showing how blockchain technology can offer exclusive, community-driven experiences.",
  },
  {
    question: "What rewards do $KANYE holders receive?",
    answer:
      "Daily LP Rewards: Top 50 holders automatically earn airdropped SOL rewards via the AirLock System & Meteora Integration. Fair Distribution: No pre-sales or insider allocations; ownership is entirely community-driven. Perpetual Ownership Model: Holders benefit from ongoing trading fees and incentives as long as they remain engaged.",
  },
  {
    question: "Will more albums be added?",
    answer:
      "Yes! Currently, the experience is limited to Late Registration, but more albums will be added over time, alongside improvements to the interface and content.",
  },
  {
    question: "Is this an official Kanye West project?",
    answer:
      "No, this project is independent and not affiliated with Kanye West or his team. It utilizes publicly available content in a curated format for token holders.",
  },
  {
    question: "What happens if I sell my $KANYE tokens?",
    answer:
      "Selling tokens below the 1,000,000 threshold will revoke access to the experience. To regain access, you must reaccumulate the required amount.",
  },
  {
    question: "How does liquidity and trading work?",
    answer:
      "Liquidity is locked permanently, ensuring market stability. There&apos;s a 1% transaction fee on buys and sells, contributing to long-term rewards. AirLock rewards allow top holders to earn from trading fees and volume incentives.",
  },
  {
    question: "What&apos;s next for the $KANYE Experience?",
    answer:
      "We&apos;re planning on expanding the discography with additional albums, improving the UI/UX for better engagement, and exploring more ways to integrate token-gated content and community-driven features.",
  },
  {
    question: "How do I get started?",
    answer:
      "Acquire 1,000,000+ $KANYE tokens on supported exchanges, connect your wallet to the platform, and enjoy a new way to experience Kanye&apos;s music!",
  },
]

export default function FAQ() {
  return (
    <section className="w-full max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

