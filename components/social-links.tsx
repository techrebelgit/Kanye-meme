import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Link
        href="https://t.me/KanyeMemeSol"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#333333] hover:text-[#555555] transition-colors"
      >
        Telegram
        <ExternalLink className="inline-block ml-1 w-4 h-4" />
      </Link>
      <Link
        href="https://x.com/KanyeMemeSol"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#333333] hover:text-[#555555] transition-colors"
      >
        X (Twitter)
        <ExternalLink className="inline-block ml-1 w-4 h-4" />
      </Link>
    </div>
  )
}

