"use client"

import type React from "react"

import { Send } from "lucide-react"
import { useRef, useState } from "react"
import { sendContactEmail } from "@/app/actions/send-email"

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!name || !email || !subject || !message) {
      setStatus("error")
      setIsLoading(false)
      return
    }

    try {
      const result = await sendContactEmail({ name, email, subject, message })

      if (result.success) {
        setStatus("success")
        formRef.current?.reset()
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Kartik Hajbe"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all duration-300 disabled:opacity-50"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              disabled={isLoading}
              className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all duration-300 disabled:opacity-50"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Collaboration Request"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all duration-300 disabled:opacity-50"
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            rows={6}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
          />
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-in fade-in duration-300">
            <p className="text-green-400 text-sm font-medium">
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg animate-in fade-in duration-300">
            <p className="text-red-400 text-sm font-medium">
              ✗ Failed to send message. Please try again or use social media.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-[#ff0000] text-[#ff0000]-foreground rounded-lg hover:bg-[#ff0000]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#ff0000]/30 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-[#ff0000]-foreground border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}
