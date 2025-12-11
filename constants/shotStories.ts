interface FilmDetails {
  slug: string
  title: string
  description: string
  longDescription: string
  roles: string[]
  youtubeId: string
  heroImage: string
  category: string
  releaseDate: string,
  stills?: string[],
  writer?: string[],
  cast?: string[],
}

export const filmsData: Record<string, FilmDetails> = {
  "byte-by-byte": {
    slug: "byte-by-byte",
    title: "Byte by Byte",
    description:
      "The short film is about an engineering student who is not so serious about coding and a realization strikes him when his friend mocks him",
    longDescription:
      "A compelling narrative exploring the journey of self-realization. Byte by Byte follows an engineering student through a transformative moment that challenges his perspective on dedication and passion. Through cinematic storytelling and emotional depth, the film captures the essence of personal growth and the impact of peer relationships.",
    roles: ["Writer", "Director", "DOP", "Editor"],
    youtubeId: "gRHkTzLP988",
    heroImage: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765444975/byte_by_byte_3x-min_tckoro.jpg",
    category: "Short Film",
    releaseDate: "2024",
    stills: [
      "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398697/post_16_jz14oa.jpg",
      "/placeholder.svg?height=500&width=700",
      "/placeholder.svg?height=500&width=700",
    ],
    writer:["Kartik Hajbe"],
    cast:["Yashwant Bhosale","Soham Dalal","Priti Sharma"],
  },
  "the-forgotten-joy": {
    slug: "the-forgotten-joy",
    title: "The Forgotten Joy",
    description:
      "A Marathi short film about a 22-year-old student living in a hostel who is addicted to gambling apps and doesn't care about life outside his phone screen until an incident happens",
    longDescription:
      "A powerful Marathi language short film that explores the dangers of digital addiction and the impact of distraction on real-life relationships. The Forgotten Joy tells the story of a hostel student whose life revolves around gambling apps until a pivotal incident forces him to confront reality. This film is a poignant reminder of what truly matters in life.",
    roles: ["Co-writer", "Director", "DOP", "Editor"],
    youtubeId: "fdiPAcjZIkU",
    heroImage: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765445082/poster_2_shy0rd.png",
    category: "Marathi Short Film",
    releaseDate: "2024",
    stills: [
      "/placeholder.svg?height=500&width=700",
      "/placeholder.svg?height=500&width=700",
      "/placeholder.svg?height=500&width=700",
    ],
    writer:["Vaibhav Shelke","Sidhant Manale","Kartik Hajbe","Chaitanya Paraye","Pratapsinh Misal","Prasad Dinnapurkar"],
    cast:["Prasad Dinnapurkar","Chaitanya Paraye","Suyog Nagbhide","Vaibhav Shelke","Sidhant Manale","Pratapsinh Misal","Yashwant Bhosale"],

  },
}


