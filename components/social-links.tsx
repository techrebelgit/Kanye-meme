import Link from "next/link"
import { Twitter, DiscIcon as Discord, Github } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4">
      <Link href="https://twitter.com/KanyeMemeSol" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6 text-[#333333] hover:text-[#555555]" />
      </Link>
      <Link href="https://t.me/KanyeMemeSol" target="_blank" rel="noopener noreferrer">
        <Discord className="w-6 h-6 text-[#333333] hover:text-[#555555]" />
      </Link>
      <Link href="https://github.com/KanyeMemeSol" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 text-[#333333] hover:text-[#555555]" />
      </Link>
    </div>
  )
}

