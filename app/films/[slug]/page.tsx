"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useEffect, use } from "react"
import { filmsData } from "@/components/constants/shotStories"

interface FilmDetails {
  slug: string
  title: string
  description: string
  longDescription: string
  roles: string[]
  youtubeId: string
  heroImage: string
  category: string
  releaseDate: string
}

const films = filmsData
export default function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const film = films[slug]
  if (!film) {
    notFound()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-5 mix-blend-multiply animate-grain z-0"></div>

      {/* Back button */}
      <div className="relative z-10 pt-8 px-4 md:px-8">
        <Link
          href="/#short-films"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors text-sm uppercase tracking-widest font-medium"
        >
          <span>←</span> Back to Portfolio
        </Link>
      </div>

      {/* Hero section */}
      <div className="relative z-10 mt-8 px-4 md:px-8">
        <div className="relative aspect-video max-w-6xl mx-auto overflow-hidden rounded-sm border border-foreground/20 group hover:border-accent/40 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 z-10 pointer-events-none"></div>
          <Image src={film.heroImage || "/placeholder.svg"} alt={film.title} fill className="object-cover" />
        </div>
      </div>

      {/* Film details */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-foreground/60 mb-3 font-semibold">
                {film.category}
              </h3>
              <h1 className="text-5xl md:text-6xl font-gotham font-bold text-foreground mb-4">{film.title}</h1>
              <p className="text-foreground/60 text-sm">Released {film.releaseDate}</p>
            </div>

            {/* Description */}
            <div className="border-l-2 border-accent pl-6 py-4">
              <p className="text-foreground/80 text-lg leading-relaxed font-light">{film.longDescription}</p>
            </div>

            {/* Roles */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/70 mb-4">My Roles</h3>
              <div className="flex flex-wrap gap-3">
                {film.roles.map((role) => (
                  <span
                    key={role}
                    className="px-4 py-2 bg-foreground/5 border border-foreground/20 text-foreground/80 text-sm font-medium rounded-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-accent"></div>

            {/* Film video */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-widest text-foreground">Watch Now</h3>
              <div className="relative aspect-video border border-foreground/20 rounded-sm overflow-hidden group hover:border-accent/40 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10 pointer-events-none"></div>
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${film.youtubeId}`}
                  title={film.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>


          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 border border-foreground/20 rounded-sm bg-foreground/2 hover:border-accent/40 transition-colors">
                <h4 className="text-xs uppercase tracking-widest text-foreground/60 mb-3 font-semibold">Synopsis</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">{film.description}</p>
              </div>

              {/* Social links */}
              <div className="p-6 border border-foreground/20 rounded-sm">
                <h4 className="text-xs uppercase tracking-widest text-foreground/60 mb-4 font-semibold">Share</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-sm border border-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-all text-sm font-medium"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-sm border border-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-all text-sm font-medium"
                  >
                    𝕏
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 " >
        <h3 className="font-semibold text-sm uppercase tracking-wider mb-8 text-muted-foreground ">
          Behind the Scenes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {film.stills?.map((still: string, idx: number) => (
            <img key={idx} src={still || "/placeholder.svg"} alt="Project still" className="rounded" />
          ))}
        </div>
      </div>

      {/* Related films section */}
      <section className="relative z-10 py-20 px-4 md:px-8 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-gotham font-bold text-foreground mb-8">More Films</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(films)
              .filter((f) => f.slug !== film.slug)
              .map((relatedFilm) => (
                <Link key={relatedFilm.slug} href={`/films/${relatedFilm.slug}`} className="group cursor-pointer">
                  <div className="relative aspect-video overflow-hidden rounded-sm border border-foreground/20 group-hover:border-accent/40 transition-colors mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 z-10"></div>
                    <Image
                      src={relatedFilm.heroImage || "/placeholder.svg"}
                      alt={relatedFilm.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {relatedFilm.title}
                  </h4>
                  <p className="text-foreground/60 text-sm mt-2">{relatedFilm.description}</p>
                </Link>
              ))}
          </div>
        </div>

      </section>
    </main>
  )
}
