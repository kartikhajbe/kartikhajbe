"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { shortFilms } from "../constants/data"


const shortFilmsData = shortFilms

export default function ShortFilms() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="short-films" className="py-10 px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply animate-grain"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          <p className="text-[#ff0000] text-sm font-semibold uppercase tracking-wider mb-2 animate-in fade-in duration-700">
            Featured Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-0 text-balance font-gotham animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
            Short Films
          </h2>
          {/* <p className="text-lg text-foreground/70 text-balance max-w-2xl font-light animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
            Compelling stories crafted with cinematic vision, each showcasing different aspects of filmmaking mastery
          </p> */}
          <div className="w-20 h-1 bg-[#ff0000] mt-4 animate-in fade-in duration-700 delay-300"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {shortFilmsData.map((film, index) => (
            <Link key={film.id} href={`/films/${film.slug}`}>
              <div
                className={`group overflow-hidden rounded-sm border border-border/60 hover:border-[#ff0000] transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1 cursor-pointer ${
                  isVisible ? "animate-in fade-in slide-in-from-bottom-8 duration-700" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-card h-64 sm:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 z-10 group-hover:from-black/20 group-hover:to-black/20 transition-all duration-300 pointer-events-none"></div>
                  <img
                    src={film.image || "/placeholder.svg"}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-card/50 border-t border-border/30">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ff0000] transition-colors duration-300 font-gotham">
                    {film.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm leading-relaxed font-light">{film.description}</p>

                  {/* Roles */}
                  <div className="flex flex-wrap gap-2">
                    {film.roles.map((role, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#ff0000]/10 text-[#ff0000] text-xs font-semibold rounded-sm hover:bg-[#ff0000]/20 transition-colors duration-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-[#ffffff] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>View Film</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
