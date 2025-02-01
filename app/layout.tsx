import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$KANYE Token",
  description: "The meme token that's stronger than ever.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-clipart-smiling-man-face-illustration-kanye-west-looking-music-stars-kanye-west-843sf57P8lb4tItgMr2NE2Ji1vKAg2.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-clipart-smiling-man-face-illustration-kanye-west-looking-music-stars-kanye-west-843sf57P8lb4tItgMr2NE2Ji1vKAg2.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-clipart-smiling-man-face-illustration-kanye-west-looking-music-stars-kanye-west-843sf57P8lb4tItgMr2NE2Ji1vKAg2.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "$KANYE Token",
    description: "The meme token that's stronger than ever.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-clipart-smiling-man-face-illustration-kanye-west-looking-music-stars-kanye-west-843sf57P8lb4tItgMr2NE2Ji1vKAg2.png",
        width: 400,
        height: 400,
        alt: "$KANYE Token",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$KANYE Token",
    description: "The meme token that's stronger than ever.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-clipart-smiling-man-face-illustration-kanye-west-looking-music-stars-kanye-west-843sf57P8lb4tItgMr2NE2Ji1vKAg2.png",
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
      <head>
        <link
          rel="shortcut icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-clipart-smiling-man-face-illustration-kanye-west-looking-music-stars-kanye-west-843sf57P8lb4tItgMr2NE2Ji1vKAg2.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

