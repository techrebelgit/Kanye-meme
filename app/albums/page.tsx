import AlbumCard from "@/app/components/AlbumCard"

const albums = [
  {
    title: "The College Dropout",
    year: "2004",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LiXOTHZ1Wvy7siLXEbsDUw6lbmLZ5M.png",
    isActive: true,
    slug: "the-college-dropout",
  },
  {
    title: "Late Registration",
    year: "2005",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "late-registration",
  },
  {
    title: "Graduation",
    year: "2007",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "graduation",
  },
  {
    title: "808s & Heartbreak",
    year: "2008",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "808s-and-heartbreak",
  },
  {
    title: "My Beautiful Dark Twisted Fantasy",
    year: "2010",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "my-beautiful-dark-twisted-fantasy",
  },
  {
    title: "Yeezus",
    year: "2013",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "yeezus",
  },
  {
    title: "The Life of Pablo",
    year: "2016",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "the-life-of-pablo",
  },
  {
    title: "ye",
    year: "2018",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "ye",
  },
  {
    title: "Jesus Is King",
    year: "2019",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "jesus-is-king",
  },
  {
    title: "Donda",
    year: "2021",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "donda",
  },
]

export default function AlbumsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-black">KANYE WEST ALBUMS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {albums.map((album) => (
            <AlbumCard
              key={album.slug}
              title={album.title}
              year={album.year}
              imageUrl={album.imageUrl}
              isActive={album.isActive}
              slug={album.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

