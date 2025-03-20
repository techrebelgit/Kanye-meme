interface YouTubePlayerProps {
  videoId: string
  autoplay?: boolean
  showControls?: boolean
  className?: string
}

export default function YouTubePlayer({
  videoId,
  autoplay = true,
  showControls = true,
  className = "",
}: YouTubePlayerProps) {
  // Build the YouTube URL with parameters
  const youtubeUrl =
    `https://www.youtube.com/embed/${videoId}?` +
    `autoplay=${autoplay ? 1 : 0}` +
    `&modestbranding=1` +
    `&rel=0` +
    `&showinfo=0` +
    `&color=white` +
    `&controls=${showControls ? 1 : 0}` +
    `&fs=0`

  return (
    <div className={`relative w-full h-full ${className}`}>
      <iframe
        src={youtubeUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        className="absolute inset-0 w-full h-full border-none"
      />
    </div>
  )
}

