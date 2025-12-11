"use client"

import { Film, Camera, Edit3, Clapperboard } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { aboutData } from "../constants/data"

const skills = [
  {
    icon: Clapperboard,
    title: "Directing",
    description: "Creating cinematic vision and guiding creative teams",
  },
  {
    icon: Camera,
    title: "Cinematography",
    description: "Crafting visual narratives through lighting and composition",
  },
  {
    icon: Edit3,
    title: "Editing",
    description: "Shaping stories through post-production excellence",
  },
  {
    icon: Film,
    title: "Film Making",
    description: "Complete production from concept to final delivery",
  },
]

export default function About() {
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
    <section id="about" className="py-10 px-4 sm:px-6 lg:px-8 bg-black" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
          {/* Image - added scale-in animation and hover effects */}
          <div
            className={`relative flex justify-center vignette scale-in ${isVisible ? "" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src={aboutData.profileImageUrl}
              alt="Kartik Hajbe"
              className="w-[80%] rounded aspect-square object-cover group-hover:scale-105 transition-transform duration-500 shadow-xl shadow-accent/10"
            />
          </div>

          {/* Text - enhanced animations with staggered children */}
          <div className={`space-y-6 fade-in-up ${isVisible ? "" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <div className="fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm text-accent font-semibold mb-2 uppercase tracking-wider">About</p>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">{aboutData.heading}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed fade-in-up" style={{ animationDelay: "0.6s" }}>
              {aboutData.p1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed fade-in-up" style={{ animationDelay: "0.7s" }}>
              {aboutData.p2}
            </p>
            <div className="pt-4 fade-in-up" style={{ animationDelay: "0.8s" }}>
              <a
                href="#work"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2 hover-lift"
              >
                Explore My Work →
              </a>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className={`p-6 bg-background rounded-lg border border-border hover:border-[#ff0000]/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                  isVisible ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <Icon className="text-[#ff0000] mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
