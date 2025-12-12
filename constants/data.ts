
export const heroData ={
  bgImageUrl:"https://res.cloudinary.com/ddgybxun8/image/upload/v1765444186/1764137723115_1_fdzzpd.jpg",
  title:"Kartik Hajbe",
  subtitle:"Visual Storyteller",
  roles:"Filmmaker · Cinematographer · Editor · Photographer",
  roles2:"Visual Storyteller · Creative Director · Indie Filmmaker"

}
export const aboutData ={
    heading:"Creative Storyteller",
    p1:"I’m Kartik Hajbe, a filmmaker, cinematographer, director, editor, and visual storyteller passionate about transforming ideas into compelling visuals.",
    p2:"Over the past few years, I’ve directed, shot, and edited short films, music videos, and digital content that reflect my growing voice as a creator. I love exploring diverse visual styles, experimenting with composition and lighting, and finding beauty in simple, honest storytelling. My portfolio is a collection of the stories I’ve lived, observed, and imagined.",
    profileImageUrl:"https://res.cloudinary.com/ddgybxun8/image/upload/v1765487663/IMG_20250626_173552_ux8ppm.jpg",
} as const;

export const showreelData = {
    videoUrl: "https://youtu.be/gRHkTzLP988?si=rjyGj-Uqvy0LY_iO",
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
    id: "sutali-bomb",
    slug: "sutali-bomb",
    title: "Sutali Bomb",
    description:
      "Oppenheimer Spoof - A Diwali version of Oppenheimer",
    roles: ["Writer", "Director", "DOP", "Editor"],
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765445129/YOUTUBE_thumbnail_22_zxren5.png",
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
  category: "short-film" | "cinematography" | "Spoof"
}

export const stillData: Still[] = [
  {
    id: "1",
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539854/Screenshot_392_xap1su.png",
    title: "OPPENHEIMER Spoof",
    project: "SUTALI BOMB",
    category: "short-film",
  },
    {
    id: "3",
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539728/Screenshot_398_cvhedt.jpg",
    title: "Coding Short Film",
    project: "Byte By Byte",
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
    id: "4",
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539309/Screenshot_404_lzmm3g.png",
    title: "Cinematography",
    project: "Frames of Paithan Dam",
    category: "cinematography",
  },
  {
    id: "5",
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765539847/Screenshot_391_f4y0c9.png",
    title: "Oppenheimer spoof",
    project: "SUTALIBOMB",
    category: "Spoof",
  },
  {
    id: "6",
    image: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765541371/Screenshot_390_mumjfh.png",
    title: "Addict",
    project: "The Forgotten Joy",
    category: "short-film",
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