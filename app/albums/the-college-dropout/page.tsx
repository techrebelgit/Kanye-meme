"use client"

import { useState } from "react"
import AlbumPlayer from "../../components/AlbumPlayer"
import Script from "next/script"
import Image from "next/image"
import { TokenGate } from "@/app/components/TokenGate"

interface SongInfo {
  title: string
  author: string
}

const TheCollegeDropoutPage = () => {
  const playlistId = "OLAK5uy_mvz7Tr6ZqTX0GKxE4lP5ifCaE9Sx-AEjc"
  const [currentSong, setCurrentSong] = useState<SongInfo | null>(null)

  // Hardcoded song data with lyrics and comments
  const songData = {
    "We Don't Care": {
      lyrics: `Oh yeah
I got the perfect song for the kids to sing
And all my people that's
Drug dealing just to get by stack your money till it gets sky high
We wasn't supposed to make it past 25
Joke's on you we still alive
Throw your hands up in the sky and say
We don't care what people say`,
      comments:
        "This opening track sets the tone for the entire album. It's a defiant anthem that addresses the struggles of inner-city youth while maintaining an upbeat, celebratory vibe. The children's choir adds an interesting contrast to the heavy subject matter.",
    },
    "All Falls Down": {
      lyrics: `Man I promise, she's so self conscious
She has no idea what she's doing in college
That major that she majored in don't make no money
But she won't drop out, her parents will look at her funny
Now, tell me that ain't insecure
The concept of school seems so secure
Sophomore three years ain't picked a career`,
      comments:
        "This track showcases Kanye's storytelling abilities and his knack for social commentary. It's a critique of materialism and the pressure to maintain appearances, all set to a catchy, soulful beat.",
    },
    "Jesus Walks": {
      lyrics: `Yo, We at war
We at war with terrorism, racism but most of all we at war with ourselves
(Jesus Walks)
God show me the way because the Devil's tryin' to break me down
(Jesus Walks with me, with me, with me, with me, with me)`,
      comments:
        "One of the most powerful tracks on the album, 'Jesus Walks' blends religious themes with social issues. The production, featuring a marching band and choir, creates an epic backdrop for Kanye's introspective lyrics.",
    },
  }

  const handleSongChange = (songInfo: SongInfo) => {
    setCurrentSong(songInfo)
  }

  return (
    <TokenGate>
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-amber-800 text-white">
      <Script src="https://www.youtube.com/iframe_api" />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="relative w-[300px] h-[300px] mb-8 md:mb-0 md:mr-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LiXOTHZ1Wvy7siLXEbsDUw6lbmLZ5M.png"
              alt="The College Dropout Album Cover"
              fill
              className="rounded-lg shadow-2xl object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-4 text-amber-200">The College Dropout</h1>
            <p className="text-xl mb-4 text-amber-100">Kanye West's debut studio album</p>
            <p className="text-lg text-amber-300">Released: February 10, 2004</p>
          </div>
        </div>

        <div className="bg-amber-950 bg-opacity-50 rounded-xl p-6 mb-12 shadow-xl">
          <AlbumPlayer playlistId={playlistId} onSongChange={handleSongChange} />
        </div>

        {currentSong && songData[currentSong.title] && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-950 bg-opacity-50 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-amber-200">Lyrics</h2>
              <h3 className="text-xl font-semibold mb-2 text-amber-100">{currentSong.title}</h3>
              <pre className="whitespace-pre-wrap font-mono text-sm text-amber-100 overflow-auto max-h-96">
                {songData[currentSong.title]?.lyrics || "Lyrics not available for this track"}
              </pre>
            </div>
            <div className="bg-amber-950 bg-opacity-50 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-amber-200">Kanye's Corner</h2>
              <p className="text-amber-100 italic">
                {songData[currentSong.title]?.comments || "Comments not available for this track"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
    </TokenGate>
  )
}

export default TheCollegeDropoutPage
