"use client"

import { useState, useEffect } from "react"

const quotes = [
  "I am Warhol. I am the No. 1 most impactful artist of our generation. I am Shakespeare in the flesh.",
  "My greatest pain in life is that I will never be able to see myself perform live.",
  "I&apos;m a creative genius and there&apos;s no other way to word it.",
  "I feel like I&apos;m too busy writing history to read it.",
  "I&apos;m not a businessman, I&apos;m a business, man.",
  "Everything I&apos;m not made me everything I am.",
  "I think I do myself a disservice by comparing myself to Steve Jobs and Walt Disney and human beings that we&apos;ve seen before. It should be more like Willy Wonka.",
  "I will go down as the voice of this generation, of this decade, I will be the loudest voice.",
  "I&apos;m on a pursuit of awesomeness. Excellence is the bare minimum.",
  "I&apos;m not always going to say things the perfect way, the right way. But I&apos;m going to say how I feel.",
]

export function KanyeQuote() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return <div className="italic text-sm sm:text-base max-w-md">&quot;{quote}&quot;</div>
}

