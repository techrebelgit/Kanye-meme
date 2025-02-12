"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface AlbumPlayerProps {
  playlistId: string
  onSongChange: (songInfo: SongInfo) => void
}

interface SongInfo {
  title: string
  author: string
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void
    YT: any
  }
}

const AlbumPlayer: React.FC<AlbumPlayerProps> = ({ playlistId, onSongChange }) => {
  const [player, setPlayer] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player("youtube-player", {
        height: "390",
        width: "640",
        playerVars: {
          listType: "playlist",
          list: playlistId,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
      setPlayer(newPlayer)
    }
  }, [playlistId]) // Added playlistId to dependencies

  const onPlayerReady = (event: any) => {
    updateCurrentSongInfo(event.target)
  }

  const onPlayerStateChange = (event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true)
      updateCurrentSongInfo(event.target)
    } else {
      setIsPlaying(false)
    }
  }

  const updateCurrentSongInfo = (player: any) => {
    const videoData = player.getVideoData()
    onSongChange({
      title: videoData.title,
      author: videoData.author,
    })
  }

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo()
      } else {
        player.playVideo()
      }
    }
  }

  const nextTrack = () => {
    if (player) {
      player.nextVideo()
    }
  }

  const previousTrack = () => {
    if (player) {
      player.previousVideo()
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <div id="youtube-player" className="w-full aspect-w-16 aspect-h-9"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex space-x-4">
            <button onClick={previousTrack} className="text-white hover:text-amber-300 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={togglePlayPause} className="text-white hover:text-amber-300 transition-colors">
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>
            <button onClick={nextTrack} className="text-white hover:text-amber-300 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumPlayer

