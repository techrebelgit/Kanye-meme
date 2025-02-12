import type React from "react"
import Image from "next/image"
import Link from "next/link"

interface AlbumCardProps {
  title: string
  year: string
  imageUrl: string
  isActive: boolean
  slug: string
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, year, imageUrl, isActive, slug }) => {
  return (
    <div className={`relative group ${isActive ? "" : "opacity-50"}`}>
      <Link href={isActive ? `/albums/${slug}` : "#"}>
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} album cover`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {!isActive && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
              <span className="text-white text-lg font-bold">COMING SOON</span>
            </div>
          )}
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold text-black">{title}</h3>
          <p className="text-sm text-gray-600">{year}</p>
        </div>
      </Link>
    </div>
  )
}

export default AlbumCard

