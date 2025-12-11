"use client"

import { Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CollectionModal from "./collection-modal"
import { contentCategoriesData } from "../constants/playlist"

interface VideoItem {
  id: string
  title: string
  thumbnail: string
  link: string
}

interface ContentCategory {
  id: string
  title: string
  count: number
  emoji: string
  color: string
  videos?: VideoItem[]
}

const contentCategories= contentCategoriesData

export default function WorkShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
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

  const selectedCategoryData = contentCategories.find((cat) => cat.id === selectedCategory)

  return (
    <>
      <section id="work" className="py-15 px-4 sm:px-6 lg:px-8 bg-card/50" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[#ff0000] text-sm font-semibold uppercase tracking-wider mb-2 animate-in fade-in duration-700">
              Diverse Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
              All Types of Content
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
              From intimate talking heads to explosive cinematic sequences, I create diverse content formats that engage
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative overflow-hidden rounded-lg p-6 group cursor-pointer transition-all duration-300 border border-border hover:border-[#ff0000]/50 hover:shadow-lg hover:shadow-[#ff0000]/10 hover:-translate-y-1 text-left ${
                  isVisible ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : "opacity-0"
                }`}
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)`,
                  animationDelay: isVisible ? `${index * 50}ms` : "0ms",
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300 text-[#ff0000]">
                      {category.emoji}
                    </span>
                    <Play
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#ffffff] transition-colors duration-300 ">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.count} pieces</p>

                  {/* Hover effect - Count */}
                  <div className="mt-4 pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[#ff0000] font-semibold text-sm">View Collection →</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedCategoryData && (
        <CollectionModal
          isOpen={!!selectedCategory}
          onClose={() => setSelectedCategory(null)}
          categoryTitle={selectedCategoryData.title}
          categoryId={selectedCategoryData.id}
          videos={selectedCategoryData.videos || []}
        />
      )}
    </>
  )
}
