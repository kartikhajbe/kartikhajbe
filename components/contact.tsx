"use client"

import { Instagram, Mail, Youtube } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import ContactForm from "./contact-form"

const socialLinks = [
  {
    icon: Instagram,
    label: "Main Instagram",
    url: "https://www.instagram.com/kartikhajbe/",
    handle: "@kartikhajbe",
  },
  {
    icon: Instagram,
    label: "Photography",
    url: "https://www.instagram.com/shotbykrtk/",
    handle: "@shotbykrtk",
  },
  {
    icon: Youtube,
    label: "YouTube",
    url: "https://www.youtube.com/@karthikhajbe/featured",
    handle: "Kartik Hajbe",
  },
]

export default function Contact() {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 animate-in fade-in duration-700">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Have a project in mind? Fill out the form below or reach out through my social channels.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-card/30 border border-border rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <Mail className="text-primary" size={24} />
                <h3 className="text-2xl font-bold">Send me a Message</h3>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Social Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 bg-card/50 border border-border rounded-lg hover:border-primary/50 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-x-1 ${
                    isVisible ? "animate-in fade-in slide-in-from-bottom-4 duration-700" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <Icon
                    className="text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{social.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors duration-300">
                      {social.handle}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-lg border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <p className="text-sm text-muted-foreground mb-4">Follow for latest work & behind-the-scenes content</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="https://www.instagram.com/kartikhajbe/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-sm hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            >
              Follow on Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@karthikhajbe/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-medium text-sm"
            >
              Subscribe on YouTube
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Kartik Hajbe. All rights reserved. | Filmmaker • Cinematographer • Director
          </p>
        </div>
      </div>
    </section>
  )
}
