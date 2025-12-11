import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Showreel from "@/components/showreel"
import ShortFilms from "@/components/short-films"
import FilmStills from "@/components/film-stills"
import WorkShowcase from "@/components/work-showcase"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Showreel />
      <ShortFilms />
      <WorkShowcase />
      <FilmStills />
      <Contact />
    </main>
  )
}
