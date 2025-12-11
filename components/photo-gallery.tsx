"use client"

import { useState } from "react"
import { photosData } from "../constants/photos"

interface Photo {
  id: string
  src: string
  alt: string
  category: string
  title: string
  ratio: "square" | "wide"
}

const photos=photosData

const categories = ["All", "Portrait", "Landscape", "Street", "Nature", "Architecture", "Travel"]

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const filteredPhotos =
    selectedCategory === "All" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12 stagger-children">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover-lift ${
              selectedCategory === category
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/50"
                : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-accent/50 hover:bg-card/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 auto-rows-max">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`group cursor-pointer fade-in-up ${photo.ratio === "wide" ? "lg:col-span-2" : ""}`}
            style={{ animationDelay: `${index * 0.08}s` }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div
              className={`relative overflow-hidden rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent/20 ${
                photo.ratio === "square" ? "aspect-square" : "aspect-video"
              }`}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent text-sm font-semibold">{photo.category}</p>
                  <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal with enhanced animations */}
      {selectedPhoto && (
        <div
          className="fixed  inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in overflow-y-auto fade-in duration-300 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
            {selectedPhoto.ratio=="square"?<img
              src={selectedPhoto.src || "/placeholder.svg"}
              alt={selectedPhoto.alt}
              className="w-[50%]  rounded-lg"
            />:<img
              src={selectedPhoto.src || "/placeholder.svg"}
              alt={selectedPhoto.alt}
              className="w-full h-auto rounded-lg"
            />}
            </div>
            {/* <img
              src={selectedPhoto.src || "/placeholder.svg"}
              alt={selectedPhoto.alt}
              className="w-full h-auto rounded-lg"
            /> */}
            <div className="mt-4 text-center fade-in-up">
              <p className="text-accent text-sm font-semibold mb-1">{selectedPhoto.category}</p>
              <h2 className="text-white text-2xl font-bold">{selectedPhoto.title}</h2>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-accent hover:text-accent-foreground text-white rounded-full p-2 transition-all duration-300 hover-lift"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
