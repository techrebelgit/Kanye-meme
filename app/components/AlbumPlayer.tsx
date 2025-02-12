"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { PlayCircle, PauseCircle } from "lucide-react"

interface AlbumPlayerProps {
  playlistId: string
  onSongChange: (songInfo: SongInfo) => void
}

export interface SongInfo {
  title: string
  artists: string[]
  videoId: string
}

interface Track {
  title: string
  artists: Array<{ name: string }>
  videoId: string
  duration: string
}

const AlbumPlayer: React.FC<AlbumPlayerProps> = ({ playlistId, onSongChange }) => {
  const [tracks, setTracks] = useState<Track[]>([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    fetchAlbumData()
  }, [])

  const fetchAlbumData = async () => {
    try {
      const response = await fetch(`/api/youtube-music?action=album&id=${playlistId}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setTracks(data.tracks)
      if (data.tracks.length > 0) {
        handleSongChange(data.tracks[0], 0)
      }
    } catch (error) {
      console.error("Error fetching album data:", error)
    }
  }

  const handleSongChange = (track: Track, index: number) => {
    setCurrentTrackIndex(index)
    onSongChange({
      title: track.title,
      artists: track.artists.map((artist) => artist.name),
      videoId: track.videoId,
    })
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    // Here you would typically control the actual audio playback
  }

  const nextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length
    handleSongChange(tracks[newIndex], newIndex)
  }

  const previousTrack = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length
    handleSongChange(tracks[newIndex], newIndex)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-amber-950 bg-opacity-50 rounded-xl p-6">
        <div className="space-y-4">
          {tracks.map((track, index) => (
            <div
              key={track.videoId}
              className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors
                ${index === currentTrackIndex ? "bg-amber-900" : "hover:bg-amber-900/50"}`}
              onClick={() => handleSongChange(track, index)}
            >
              <div className="mr-4">
                {index === currentTrackIndex ? (
                  <PlayCircle className="w-6 h-6 text-amber-300" />
                ) : (
                  <span className="text-amber-300 w-6 block text-center">{index + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-amber-100">{track.title}</h3>
                <p className="text-sm text-amber-300">{track.artists[0].name}</p>
              </div>
              <div className="text-sm text-amber-400">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button onClick={previousTrack} className="text-amber-300 hover:text-amber-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={togglePlayPause} className="text-amber-300 hover:text-amber-100">
          {isPlaying ? <PauseCircle className="h-12 w-12" /> : <PlayCircle className="h-12 w-12" />}
        </button>
        <button onClick={nextTrack} className="text-amber-300 hover:text-amber-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default AlbumPlayer

