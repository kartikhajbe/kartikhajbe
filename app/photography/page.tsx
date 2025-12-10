"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Photography</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Visual Moments Captured</h1>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance">
            Exploring light, composition, and emotion through the lens. Each photograph tells a unique story.
          </p>
        </div>

        {/* Gallery */}
        <PhotoGallery />
      </div>
    </main>
  )
}
