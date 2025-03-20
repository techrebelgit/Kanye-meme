"use client"

import TokenGate from "@/app/components/TokenGate"
import YouTubePlayer from "../../components/video-player"

export default function Home() {
  return (
    <TokenGate>

<main className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-[calc(100vw-40px)] h-[calc(100vh-40px)]">
        <YouTubePlayer videoId="-O7xo7urW-w" autoplay={true} showControls={true} />
      </div>
    </main>

    </TokenGate>

  )
}

