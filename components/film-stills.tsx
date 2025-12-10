"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { stillData } from "../constants/data"

// interface Still {
//   id: string
//   image: string
//   title: string
//   project: string
//   category: "short-film" | "cinematography" | "photography"
// }

const stills= stillData

export default function FilmStills() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedStill, setSelectedStill] = useState<typeof stillData[number] | null>(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredStills = stills

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply animate-grain"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xs uppercase tracking-widest text-foreground/60 mb-3 font-semibold">Visual Frames</h3>
          <h2 className="text-4xl md:text-5xl font-gotham font-bold text-foreground">Film & Video Stills</h2>
          <p className="text-foreground/60 mt-3 text-lg font-light">
            Cinematic moments captured across my creative journey
          </p>
          <div className="w-20 h-1 bg-[#ff0000] mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStills.map((still, index) => (
            <div
              key={still.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${isVisible ? index * 100 : 0}ms`,
              }}
              onClick={() => setSelectedStill(still)}
            >
              <div className="relative aspect-video overflow-hidden rounded-sm border border-foreground/20 group-hover:border-[#ff0000]/60 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 pointer-events-none z-10 group-hover:from-black/20 group-hover:to-black/20 transition-all duration-300"></div>

                <Image
                  src={still.image || "/placeholder.svg"}
                  alt={still.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div></div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{still.title}</h4>
                    <p className="text-white/70 text-xs">{still.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStill && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedStill(null)}
        >
          <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-multiply animate-grain"></div>

          <div
            className="relative w-full h-full flex flex-col items-center justify-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStill(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10 text-2xl"
            >
              ✕
            </button>

            <div className="w-full h-full flex items-center justify-center px-4">
              <Image
                src={selectedStill.image || "/placeholder.svg"}
                alt={selectedStill.title}
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            </div>

            <div className="mt-6 text-white/80 text-center max-w-2xl">
              <h3 className="text-xl font-semibold">{selectedStill.title}</h3>
              <p className="text-white/60">{selectedStill.project}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
