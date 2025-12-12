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
    count: 4,
    emoji: "🎬",
    color: "from-rose-500 to-pink-500",
    videos: [
      {
        id: "1",
        title: "Byte by Byte",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765444975/byte_by_byte_3x-min_tckoro.jpg",
        link: "/films/byte-by-byte",
      },
      {
        id: "2",
        title: "The Forgotten Joy",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765445082/poster_2_shy0rd.png",
        link: "/films/the-forgotten-joy",
      },
      {
        id: "3",
        title: "Sutali Bomb",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765445129/YOUTUBE_thumbnail_22_zxren5.png",
        link: "https://youtu.be/LshIwD_Lc08?si=0LkYIzILUYBjbWMA",
      },
      {
        id: "3",
        title: "Oppenheimer Marathi Spoof",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765550913/SUTALI_BOMB_r0gs6e.png",
        link: "https://youtu.be/SNqoYdUN6_M?si=PvKmQOvo3bZ2KxwH",
      },
    ],
  },
  {
    id: "reels",
    title: "Cinematic Reels",
    count: 6,
    emoji: "🎥",
    color: "from-orange-500 to-red-500",
    videos: [
      {
        id: "1",
        title: "Farebi Edit",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765558548/krtk_exp1.00_00_18_29.Still002_1_ltlubv.jpg",
        link: "https://www.instagram.com/p/DKjYaqVhoby/",
      },
      {
        id: "2",
        title: "Ganpati Aagman 2025",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765551163/Ganesh_Chaturthi_Pune.00_00_16_20.Still001_iwvgkz.jpg",
        link: "https://www.instagram.com/p/DN75Gz3DNtd/",
      },
      {
        id: "3",
        title: "Viral reel",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539296/Screenshot_402_wy9qcq.png",
        link: "https://www.instagram.com/reel/DQBzB-jAacd/",
      },
      {
        id: "4",
        title: "T20 WC Celebration",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765551614/5da06023-098a-42c0-a277-d2d5159e5bd4.png",
        link: "https://www.instagram.com/reel/C814lI2ITLn/",
      },
      {
        id: "5",
        title: "Frames of Paithan Dam",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539828/Screenshot_410_xvptyr.png",
        link: "https://www.instagram.com/reel/C71Xw2FMwBD/",
      },
      {
        id: "6",
        title: "Jagannath Rath Yatra",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765552002/Screenshot_411_fqpbjb.png",
        link: "https://www.instagram.com/reel/Ct_RZ-FAvTv/",
      },
      {
        id: "7",
        title: "Falling Transition",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765558395/7af959e2-4fc3-45d4-bfe2-dfbae1ae3199.png",
        link: "https://www.instagram.com/reel/CsZN98PsnZF/",
      },
      {
        id: "8",
        title: "Taare zameen par",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765558206/2424bab2-6bc9-4cbb-9cb8-95a1c1c87e32.png",
        link: "https://www.youtube.com/watch?v=2chjzLVAgLg",
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
        title: "Viral Reel",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539296/Screenshot_402_wy9qcq.png",
        link: "https://www.instagram.com/reel/DQBzB-jAacd/",
      },
      {
        id: "2",
        title: "Murtikar",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765552247/Screenshot_412_wqkcny.png",
        link: "https://www.instagram.com/reel/DN1NzniWJmW/",
      },
      {
        id: "3",
        title: "La La Land",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539329/Screenshot_406_btwkqx.png",
        link: "https://www.instagram.com/reel/DO9NDOqDEn9/",
      },
      {
        id: "4",
        title: "Frames of Paithan Dam",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539828/Screenshot_410_xvptyr.png",
        link: "https://www.instagram.com/reel/C71Xw2FMwBD/",
      },
      {
        id: "5",
        title: "Jagannath Rath Yatra",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765552002/Screenshot_411_fqpbjb.png",
        link: "https://youtu.be/epi9kZAp1tQ?si=jnG9BPUD1WM5piAI",
      },
      {
        id: "6",
        title: "Sutali Bomb",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765445129/YOUTUBE_thumbnail_22_zxren5.png",
        link: "https://youtu.be/LshIwD_Lc08?si=0LkYIzILUYBjbWMA",
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
        title: "Secret kya hai?",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765559221/492eee2d-0747-4b3e-8208-cf3e06dafa70.png",
        link: "https://www.instagram.com/p/C3NldleKk5F/",
      },
      {
        id: "2",
        title: "Oppenheimer Marathi Spoof",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765550913/SUTALI_BOMB_r0gs6e.png",
        link: "https://youtu.be/SNqoYdUN6_M?si=PvKmQOvo3bZ2KxwH",
      },
      {
        id: "3",
        title: "Promotional reel 2",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765559390/31b1c48a-a1dd-4d26-9767-b8ae380e4db8.png",
        link: "https://www.instagram.com/p/C30CQe4K-jT/",
      },
      {
        id: "4",
        title: "Promotional reel 3",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765559724/aad81587-ffb8-4623-979a-ac884fadb84e.png",
        link: "https://www.instagram.com/p/C3u3xELpy6Y/",
      },
    ],
  },
  {
    id: "editing-work",
    title: "Editing Work",
    count: 28,
    emoji: "✂️",
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
  {
    id: "photography",
    title: "Photography",
    count: 156,
    emoji: "📷",
    color: "from-primary via-primary to-[#ff0000]",
    videos: [
      {
        id: "1",
        title: "Photo Gallery",
        thumbnail: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765558962/23694e2e-46ed-4123-b70a-7a775f4576d5.png",
        link: "/photography",
      },
      // {
      //   id: "2",
      //   title: "Landscape Collections",
      //   thumbnail: "/placeholder.svg?height=200&width=300",
      //   link: "/photography",
      // },
      // {
      //   id: "3",
      //   title: "Street Photography",
      //   thumbnail: "/placeholder.svg?height=200&width=300",
      //   link: "/photography",
      // },
    ],
  },
]