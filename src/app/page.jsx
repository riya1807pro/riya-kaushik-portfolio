"use client"
import Hero from "../components/hero";
import About from "./about/page";
import SkillsPage from "./skills/page";
import Projects from "./project/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 min-h-screen text-gray-800 transition-all">
      <section id="home" className="min-h-screen flex items-center justify-center not-first:font-inter">
        <Hero />
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center font-inter">
        <About />
      </section>
      <section id="skills" className="min-h-screen flex items-center justify-center font-inter">
        <SkillsPage />
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center font-inter">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center font-inter">
        <Contact />
      </section>
    </div>
  );
}