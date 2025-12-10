"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50 animate-fade-in">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#ffffff]  to-[#ffffff] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            KH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#films"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Films
            </Link>
            <Link
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Work
            </Link>
            <Link
              href="/photography"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Photography
            </Link>
            <Link
              href="#contact"
              className="text-sm px-4 py-2 bg-[#ffffff] text-primary-foreground rounded-lg hover:bg-[#f0f0f0] transition-all duration-300"
            >
              Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-4 animate-in slide-in-from-top-2">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#films" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Films
            </Link>
            <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/photography" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Photography
            </Link>
            <Link
              href="#contact"
              className="text-sm px-4 py-2 bg-[#ffffff] text-primary-foreground rounded-lg hover:bg-[#f0f0f0] transition-all w-fit"
            >
              Connect
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
