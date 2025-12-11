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
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398708/post_5_ktmbbv.jpg",
    alt: "",
    category: "Street",
    title: "Varkari Shaala",
    ratio: "wide",
  },
  {
    id: "10",
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398697/post_16_jz14oa.jpg",
    alt: "",
    category: "Street",
    title: "Travelling ladies",
    ratio: "wide",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398699/post_13_eu3jvh.jpg",
    alt: "",
    category: "Street",
    title: "Doggos",
    ratio: "square",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398693/post_10_ek3ynt.jpg",
    alt: "",
    category: "Nature",
    title: "Insect on ID card",
    ratio: "wide",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398719/post_29_1_ewy9ba.png",
    alt: "Karnapura",
    category: "Street",
    title: "Karnapura",
    ratio: "square",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398696/post_3_-_aging_hands_iqnzp7.jpg",
    alt: "",
    category: "Portrait",
    title: "Ageing",
    ratio: "square",
  },
  {
    id: "6",
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398710/post_29_3_v669ns.jpg",
    alt: "",
    category: "Street",
    title: "Karnapura",
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
    src: "https://res.cloudinary.com/ddgybxun8/image/upload/v1765398697/post_6_t9f7w5.jpg",
    alt: "",
    category: "Street",
    title: "Golden hour",
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