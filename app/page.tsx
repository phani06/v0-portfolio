import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import EducationTimeline from "@/components/education-timeline"
import Publications from "@/components/publications"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <EducationTimeline />
      <Publications />
      <Projects />
      <Contact />
    </main>
  )
}
