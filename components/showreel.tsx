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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-15 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply animate-grain"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={` px-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xs uppercase tracking-widest text-foreground/60 mb-3 font-semibold">One of my recent works</h3>
          <h2 className="text-4xl md:text-5xl font-gotham font-bold text-foreground">My Showreel</h2>
          <div className="w-20 h-1 bg-[#ff0000] mt-4"></div>
        </div>

        <div
          className={``}
        >
          {/* Cinematic frame effect */}
          {/* <div className="absolute inset-0  border-4 foreground/20 pointer-events-none z-20 group-hover:border-[#ff0000]/40 transition-colors duration-300 w-[75%] h-[75%] m-auto"></div> */}

          {/* Film vignette effect */}
          <div className=" inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none z-10"></div>

          {/* Video container with 16:9 aspect ratio */}
          <div className="aspect-video bg-black rounded-sm overflow-hidde  flex justify-center my-10 h-[70%] ">
            <iframe
              className="w-[70%] h-[70%] object-cover group-hover:scale-102 transition-transform duration-500 border-4 hover:border-[#ff0000]/40 hover:duration-300 hover:transition-colors "
              src="https://www.youtube.com/embed/fdiPAcjZIkU"
              title="Kartik Hajbe - Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={` mx-16  transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* <p className="text-foreground/70 font-light text-lg leading-relaxed max-w-2xl">
           Recent work 
          </p> */}
        </div>
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm">
              <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1"></div>
            </div>
          </div> */}
        </div>

        {/* <div className={` mx-6  transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-foreground/70 font-light text-lg leading-relaxed max-w-2xl">
           Recent work 
          </p>
        </div> */}
      </div>
    </section>
  )
}
