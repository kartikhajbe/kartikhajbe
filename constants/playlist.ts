interface VideoItem {
  id: string
  title: string
  thumbnail: string
  link: string
}

interface ContentCategory {
  id: string
  title: string
  count: number
  emoji: string
  color: string
  videos?: VideoItem[]
}

export const contentCategoriesData: ContentCategory[] = [
  {
    id: "shorts",
    title: "Short Films",
    count: 12,
    emoji: "🎬",
    color: "from-rose-500 to-pink-500",
    videos: [
      {
        id: "1",
        title: "Byte by Byte",
        thumbnail: "/short-film-coding-engineering-student.jpg",
        link: "/films/byte-by-byte",
      },
      {
        id: "2",
        title: "The Forgotten Joy",
        thumbnail: "/marathi-film-hostel-student.jpg",
        link: "/films/the-forgotten-joy",
      },
      {
        id: "3",
        title: "Urban Stories",
        thumbnail: "/cinematic-short-film.jpg",
        link: "#",
      },
      {
        id: "4",
        title: "Lost Moments",
        thumbnail: "/dramatic-short-film.jpg",
        link: "#",
      },
      {
        id: "5",
        title: "Echoes",
        thumbnail: "/indie-short-film.jpg",
        link: "#",
      },
      {
        id: "6",
        title: "Midnight Tales",
        thumbnail: "/cinematic-storytelling.jpg",
        link: "#",
      },
    ],
  },
  {
    id: "reels",
    title: "Cinematic Reels",
    count: 48,
    emoji: "🎥",
    color: "from-orange-500 to-red-500",
    videos: [
      {
        id: "1",
        title: "Urban Pulse",
        thumbnail: "/cinematic-reel-motion.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "2",
        title: "City Lights",
        thumbnail: "/urban-cinematography.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "3",
        title: "Motion Flow",
        thumbnail: "/cinematic-movement.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "4",
        title: "Neon Dreams",
        thumbnail: "/neon-reel-cinematic.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "5",
        title: "Golden Hour",
        thumbnail: "/sunset-reel.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "6",
        title: "Black and White",
        thumbnail: "/monochrome-reel.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
    ],
  },
  {
    id: "cinematography",
    title: "Cinematography",
    count: 35,
    emoji: "📹",
    color: "from-amber-500 to-orange-500",
    videos: [
      {
        id: "1",
        title: "Color Grading Study",
        thumbnail: "/color-grading-cinematography.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "2",
        title: "Lighting Setup",
        thumbnail: "/professional-lighting-setup.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "3",
        title: "Camera Movement",
        thumbnail: "/dolly-shot-cinematography.jpg",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "4",
        title: "Depth of Field",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "5",
        title: "Aerial Shots",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "6",
        title: "Night Photography",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.instagram.com/kartikhajbe/",
      },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    count: 156,
    emoji: "📷",
    color: "from-primary via-primary to-accent",
    videos: [
      {
        id: "1",
        title: "Portrait Series",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "/photography",
      },
      {
        id: "2",
        title: "Landscape Collections",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "/photography",
      },
      {
        id: "3",
        title: "Street Photography",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "/photography",
      },
    ],
  },
  {
    id: "talking-heads",
    title: "Talking Heads",
    count: 28,
    emoji: "🗣️",
    color: "from-cyan-500 to-blue-500",
    videos: [
      {
        id: "1",
        title: "Interview Setup 1",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "2",
        title: "Podcast Recording",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "3",
        title: "Testimonial",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "4",
        title: "Speaker Reel",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
    ],
  },
  {
    id: "sketches",
    title: "Sketch Videos",
    count: 21,
    emoji: "😄",
    color: "from-purple-500 to-indigo-500",
    videos: [
      {
        id: "1",
        title: "Comedy Sketch 1",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "2",
        title: "Comedy Sketch 2",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "3",
        title: "Parody Video",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.instagram.com/kartikhajbe/",
      },
      {
        id: "4",
        title: "Character Comedy",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.instagram.com/kartikhajbe/",
      },
    ],
  },
  {
    id: "longform",
    title: "Long-form Content",
    count: 15,
    emoji: "📺",
    color: "from-teal-500 to-cyan-500",
    videos: [
      {
        id: "1",
        title: "Documentary Series",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "2",
        title: "Behind the Scenes",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "3",
        title: "Tutorial Series",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "4",
        title: "Travel Vlog",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
    ],
  },
  {
    id: "educational",
    title: "Educational Videos",
    count: 42,
    emoji: "📚",
    color: "from-lime-500 to-green-500",
    videos: [
      {
        id: "1",
        title: "Cinematography Basics",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "2",
        title: "Video Editing Guide",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "3",
        title: "Lighting Techniques",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
      {
        id: "4",
        title: "Color Grading 101",
        thumbnail: "/placeholder.svg?height=200&width=300",
        link: "https://www.youtube.com/@karthikhajbe/featured",
      },
    ],
  },
]