"use client"

import { useState, useEffect } from "react"

const quotes = [
  "I am Warhol. I am the No. 1 most impactful artist of our generation. I am Shakespeare in the flesh.",
  "My greatest pain in life is that I will never be able to see myself perform live.",
  "I'm a creative genius and there's no other way to word it.",
  "I feel like I'm too busy writing history to read it.",
  "I'm not a businessman, I'm a business, man.",
  "Everything I'm not made me everything I am.",
  "I think I do myself a disservice by comparing myself to Steve Jobs and Walt Disney and human beings that we've seen before. It should be more like Willy Wonka.",
  "I will go down as the voice of this generation, of this decade, I will be the loudest voice.",
  "I'm on a pursuit of awesomeness. Excellence is the bare minimum.",
  "I'm not always going to say things the perfect way, the right way. But I'm going to say how I feel.",
]

export function KanyeQuote() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return <div className="italic text-sm sm:text-base max-w-md">"{quote}"</div>
}

