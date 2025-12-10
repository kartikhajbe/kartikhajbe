interface Photo {
  id: string
  src: string
  alt: string
  category: string
  title: string
  ratio: "square" | "wide"
}

export const photosData: Photo[] = [
  {
    id: "1",
    src: "/golden-hour-landscape.jpg",
    alt: "Golden hour landscape",
    category: "Landscape",
    title: "Golden Hour Light",
    ratio: "wide",
  },
  {
    id: "10",
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398697/post_16_jz14oa.jpg",
    alt: "Misty mountains landscape",
    category: "Landscape",
    title: "Mountain Mist",
    ratio: "wide",
  },
  {
    id: "2",
    src: "/portrait-moody-lighting.jpg",
    alt: "Portrait with moody lighting",
    category: "Portrait",
    title: "Moody Portrait",
    ratio: "square",
  },
  {
    id: "3",
    src: "/street-photography-urban.jpg",
    alt: "Urban street scene",
    category: "Street",
    title: "City Pulse",
    ratio: "wide",
  },
  {
    id: "4",
    src: "/macro-nature-details.jpg",
    alt: "Macro nature details",
    category: "Nature",
    title: "Nature's Details",
    ratio: "square",
  },
  {
    id: "5",
    src: "/candid-portrait-moment.jpg",
    alt: "Candid portrait moment",
    category: "Portrait",
    title: "Candid Moment",
    ratio: "square",
  },
  {
    id: "6",
    src: "/architectural-building-design.jpg",
    alt: "Architecture and design",
    category: "Architecture",
    title: "Structure & Lines",
    ratio: "wide",
  },
  {
    id: "7",
    src: "/travel-exotic-location.jpg",
    alt: "Travel photography exotic",
    category: "Travel",
    title: "Wanderlust",
    ratio: "square",
  },
  {
    id: "8",
    src: "/studio-portrait-lighting.jpg",
    alt: "Studio portrait",
    category: "Portrait",
    title: "Studio Light",
    ratio: "wide",
  },
  {
    id: "9",
    src: "/misty-mountains-landscape.jpg",
    alt: "Misty mountains landscape",
    category: "Landscape",
    title: "Mountain Mist",
    ratio: "square",
  },
  {
    id: "10",
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398697/post_16_jz14oa.jpg",
    alt: "Misty mountains landscape",
    category: "Landscape",
    title: "Mountain Mist",
    ratio: "wide",
  }
]