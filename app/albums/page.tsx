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
    imageUrl: "/Late-Registration-Cover.jpg",
    isActive: false,
    slug: "late-registration",
  },
  {
    title: "Graduation",
    year: "2007",
    imageUrl: "/Graduation-Cover.jpg",
    isActive: false,
    slug: "graduation",
  },
  {
    title: "808s & Heartbreak",
    year: "2008",
    imageUrl: "/808s-Cover.png",
    isActive: false,
    slug: "808s-and-heartbreak",
  },
  {
    title: "My Beautiful Dark Twisted Fantasy",
    year: "2010",
    imageUrl: "/My-Beautiful-Dark-Twisted-Fantasy-Cover.jpg",
    isActive: false,
    slug: "my-beautiful-dark-twisted-fantasy",
  },
  {
    title: "Watch the Throne",
    year: "2011",
    imageUrl: "/Watch-The-Throne-Cover.jpg",
    isActive: false,
    slug: "watch-the-throne",
  },
  {
    title: "Yeezus",
    year: "2013",
    imageUrl: "/Yeezus-Cover.png",
    isActive: false,
    slug: "yeezus",
  },
  {
    title: "The Life of Pablo",
    year: "2016",
    imageUrl: "/The-Life-Of-Pablo-Cover.jpg",
    isActive: false,
    slug: "the-life-of-pablo",
  },
  {
    title: "ye",
    year: "2018",
    imageUrl: "/Ye-Cover.jpg",
    isActive: false,
    slug: "ye",
  },
  {
    title: "Kids See Ghosts",
    year: "2018",
    imageUrl: "/Kids-See-Ghosts-Cover.png",
    isActive: false,
    slug: "kids-see-ghosts",
  },
  {
    title: "Jesus Is King",
    year: "2019",
    imageUrl: "/Jesus-Is-King-Cover.png",
    isActive: false,
    slug: "jesus-is-king",
  },
  {
    title: "Donda",
    year: "2021",
    imageUrl: "/Donda-Cover.png",
    isActive: false,
    slug: "donda",
  },
  {
    title: "Vultures 1",
    year: "2024",
    imageUrl: "/Vultures-1.png",
    isActive: false,
    slug: "vultures-1",
  },
  {
    title: "Vultures 2",
    year: "2024",
    imageUrl: "/Vultures-2-Cover.png",
    isActive: false,
    slug: "vultures-2",
  },
  {
    title: "BUlly",
    year: "2025",
    imageUrl: "/placeholder.svg?height=300&width=300",
    isActive: false,
    slug: "bully",
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

