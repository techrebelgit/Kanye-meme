import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$KANYE Token",
  description: "The meme token that's stronger than ever.",
  openGraph: {
    title: "$KANYE Token",
    description: "The meme token that's stronger than ever.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaintPablo-OrECXD3hT1a7z0t9Z9YbPkeBBEMWcL.png",
        width: 1200,
        height: 800,
        alt: "Dramatic black and white photograph from Saint Pablo tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$KANYE Token",
    description: "The meme token that's stronger than ever.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaintPablo-OrECXD3hT1a7z0t9Z9YbPkeBBEMWcL.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

