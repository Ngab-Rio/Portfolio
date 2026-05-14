import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Cursor from "./components/ui/Cursor"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      <Cursor />
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-30" />

      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}

export default App