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
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect width='1200' height='630' fill='%23FFFFFF'/%3E%3C/svg%3E",
        width: 1200,
        height: 630,
        alt: "$KANYE Token",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$KANYE Token",
    description: "The meme token that's stronger than ever.",
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'%3E%3Crect width='1200' height='630' fill='%23FFFFFF'/%3E%3C/svg%3E",
    ],
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

