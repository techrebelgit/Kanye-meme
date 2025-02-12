"use client"

import { useState } from "react"
import AlbumPlayer from "@/app/components/AlbumPlayer"
import type { SongInfo } from "@/app/components/AlbumPlayer"
import Image from "next/image"
import TokenGate from "@/app/components/TokenGate"
import { theCollegeDropout } from "@/app/data/albums/theCollegeDropout"
import Script from "next/script"

const TheCollegeDropoutPage = () => {
  const [currentSong, setCurrentSong] = useState<SongInfo | null>(null)

  const handleSongChange = (songInfo: SongInfo) => {
    setCurrentSong(songInfo)
  }

  const currentTrack = currentSong ? theCollegeDropout.tracks.find((track) => track.title === currentSong.title) : null

  return (
    <TokenGate>
      <Script src="https://www.youtube.com/iframe_api" />
      <div className="min-h-screen bg-gradient-to-b from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="relative w-[200px] h-[200px] mb-8 md:mb-0 md:mr-8">
              <Image
                src={theCollegeDropout.coverImage || "/placeholder.svg"}
                alt="The College Dropout Album Cover"
                fill
                className="rounded-lg shadow-2xl object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4 text-amber-200">{theCollegeDropout.title}</h1>
              <p className="text-xl mb-4 text-amber-100">Kanye West's debut studio album</p>
              <p className="text-lg text-amber-300">Released: {theCollegeDropout.releaseDate}</p>
            </div>
          </div>

          <div className="bg-amber-950 bg-opacity-50 rounded-xl p-6 mb-12 shadow-xl">
            <AlbumPlayer playlistId={theCollegeDropout.id} onSongChange={handleSongChange} />
          </div>

          {currentTrack && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-950 bg-opacity-50 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-amber-200">Lyrics</h2>
                <h3 className="text-xl font-semibold mb-2 text-amber-100">{currentTrack.title}</h3>
                <pre className="whitespace-pre-wrap font-mono text-sm text-amber-100 overflow-auto max-h-96">
                  {currentTrack.lyrics || "Lyrics not available for this track"}
                </pre>
              </div>
              <div className="bg-amber-950 bg-opacity-50 rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-amber-200">Kanye's Corner</h2>
                <pre className="whitespace-pre-wrap font-mono text-sm text-amber-100 overflow-auto max-h-96">
                  {currentTrack.comments || "Comments not available for this track"}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </TokenGate>
  )
}

export default TheCollegeDropoutPage

