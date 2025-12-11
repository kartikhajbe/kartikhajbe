
export const heroData ={
  bgImageUrl:"https://res.cloudinary.com/ddgybxun8/image/upload/v1765444186/1764137723115_1_fdzzpd.jpg",
  title:"Kartik Hajbe",
  subtitle:"Visual Storyteller",
  roles:"Filmmaker · Cinematographer · Editor · Photographer",
  roles2:"Visual Storyteller · Creative Director · Indie Filmmaker"

}
export const aboutData ={
    heading:"Creative Storyteller",
    p1:"I'm a fresher filmmaker and cinematographer passionate about capturing compelling visual narratives. With a keen eye for composition and an understanding of cinematic language, I bring stories to life through carefully crafted frames and purposeful editing.",
    p2:"My work spans short films, documentaries, commercial content, and photography—each project driven by a commitment to authenticity and visual excellence.",
    profileImageUrl:"/cinematic-still-moment-dramatic-lighting.jpg",
} as const;

export const showreelData = {
    videoUrl: "https://youtu.be/43Hvzd7_vhE?si=vHtx71nNdVOCvjBP",
    thumbnailUrl: "/cinematic-still-moment-dramatic-lighting.jpg",
} as const;

interface ShortFilm {
  id: string
  slug: string
  title: string
  description: string
  roles: string[]
  image: string
}

export const shortFilms: ShortFilm[] = [
  {
    id: "byte-by-byte",
    slug: "byte-by-byte",
    title: "Byte by Byte",
    description:
      "A compelling short film about an engineering student who's not serious about coding, until a realization strikes when his friend mocks him. A story of personal growth and unexpected motivation.",
    roles: ["Writer", "Director", "DOP", "Editor"],
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765444975/byte_by_byte_3x-min_tckoro.jpg",
  },
  {
    id: "forgotten-joy",
    slug: "the-forgotten-joy",
    title: "The Forgotten Joy",
    description:
      "A poignant Marathi short film exploring the story of a 22-year-old hostel student battling gambling app addiction. When life happens outside the phone screen, everything changes in an instant.",
    roles: ["Co-Writer", "Director", "DOP", "Editor"],
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765445082/poster_2_shy0rd.png",
  },
]

interface Still {
  id: string
  image: string
  title: string
  project: string
  category: "short-film" | "cinematography" | "photography"
}

export const stillData: Still[] = [
  {
    id: "1",
    image: "/cinematic-still-moment-dramatic-lighting.jpg",
    title: "Byte by Byte - Coding Realization",
    project: "Byte by Byte",
    category: "short-film",
  },
  {
    id: "2",
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765445256/DSC_0141_m2lnbx.jpg",
    title: "Unreleased Project",
    project: "Unreleased Project",
    category: "short-film",
  },
  {
    id: "3",
    image: "/cinematic-portrait-filmmaker-professional.jpg",
    title: "Portrait - Golden Hour",
    project: "Photography",
    category: "photography",
  },
  {
    id: "4",
    image: "/cinematic-landscape-filmmaker-frame.jpg",
    title: "Landscape Cinematography",
    project: "Cinematography",
    category: "cinematography",
  },
  {
    id: "5",
    image: "/cinematic-detail-shot-filmmaker-technical.jpg",
    title: "Detail Shot - Technical Excellence",
    project: "Cinematography",
    category: "cinematography",
  },
  {
    id: "6",
    image: "/cinematic-street-photography-candid-moment.jpg",
    title: "Street Photography - Candid Moment",
    project: "Photography",
    category: "photography",
  },
]

export const timelineData =[
  {
    id: 1,
    src: "/film-still-cinematic-frame.jpg",
    project: "Byte by Byte",
    role: "DOP",
  },
  {
    id: 2,
    src: "/cinematography-still-shot.jpg",
    project: "The Forgotten Joy",
    role: "DOP",
  },
  {
    id: 3,
    src: "/cinematic-light-painting.jpg",
    project: "Corporate Video",
    role: "DOP",
  },
  {
    id: 4,
    src: "/dramatic-film-lighting.jpg",
    project: "Documentary",
    role: "DOP",
  },
  {
    id: 5,
    src: "/color-grading-film-aesthetic.jpg",
    project: "Byte by Byte",
    role: "Editor",
  },
  {
    id: 6,
    src: "/atmospheric-cinematic-frame.jpg",
    project: "The Forgotten Joy",
    role: "DOP",
  },
];