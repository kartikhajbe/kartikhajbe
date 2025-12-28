"use client"

import { useEffect, useRef, useState } from "react"

export default function Showreel() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
    <section ref={sectionRef} className="relative py-2 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden bg-gradient-to-tr from-gray-900 via-black to-gray-900">
      {/* Animated grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xs uppercase tracking-widest text-white/60 mb-2 md:mb-3 font-semibold">One of My Recent Works</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">My Showreel</h2>
          <div className="w-16 md:w-20 h-1 bg-red-600 mt-3 md:mt-4"></div>
        </div>

        {/* Video Container */}
        <div
          className={`relative group transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >


          {/* Glow effect on hover - desktop only */}
          <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
            <div className="absolute inset-0 bg-red-600/5 blur-xl"></div>
          </div>

          {/* Film vignette effect - subtle on mobile, more prominent on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 md:from-black/30 md:to-black/30 pointer-events-none z-10"></div>

          {/* Video container with 16:9 aspect ratio */}
          <div className="relative aspect-video bg-black rounded-sm overflow-hidden shadow-xl md:shadow-2xl md:w-[70%] md:mx-auto">
            <iframe
              className="absolute inset-0 w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 ease-out"
              src="https://www.youtube.com/embed/43Hvzd7_vhE?playsinline=1&rel=0&modestbranding=1"
              title="Kartik Hajbe - Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Play button overlay - desktop only */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-black/20 transform group-hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-l-[12px] lg:border-l-[16px] border-l-white border-t-[8px] lg:border-t-[10px] border-t-transparent border-b-[8px] lg:border-b-[10px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`mt-6 md:mt-8 lg:mt-10 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {/* <p className="text-white/60 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            A curated selection of my best work, showcasing creativity, technical expertise, and storytelling through visual media.
          </p> */}
        </div>
      </div>
    </section>
  )
}