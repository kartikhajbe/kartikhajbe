"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface VideoItem {
  id: string
  title: string
  thumbnail: string
  link: string
}

interface CollectionModalProps {
  isOpen: boolean
  onClose: () => void
  categoryTitle: string
  categoryId: string
  videos: VideoItem[]
}

export default function CollectionModal({ isOpen, onClose, categoryTitle, categoryId, videos }: CollectionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[70%] max-h-[90vh] overflow-y-auto bg-background border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{categoryTitle}</DialogTitle>
        </DialogHeader>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {videos.map((video, index) => (
            <Link
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-2"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden bg-black">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/80 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2">Click to view →</p>
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
