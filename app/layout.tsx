import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import thumbnail from "../public/thumbnail.jpg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$KANYE Token",
  description: "The meme token that's stronger than ever.",
  openGraph: {
    title: "$KANYE Token",
    description: "The meme token that's stronger than ever.",
    images: [
      {
        url: thumbnail.src,
        width: thumbnail.width,
        height: thumbnail.height,
        alt: "Artistic portrait of Kanye in vibrant colors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$KANYE Token",
    description: "The meme token that's stronger than ever.",
    images: [thumbnail.src],
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

