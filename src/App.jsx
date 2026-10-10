import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"
import { useState } from "react"
import Loader from "./components/sections/Loader"


function App() {
  const [loading, setLoading] = useState(() => (
    !localStorage.getItem("portfolio-loader")
  ))

  const handleFinishLoading = () => {

    localStorage.setItem("portfolio-loader", "true")

    setLoading(false)
  }

  if (loading) {
    return <Loader onFinish={handleFinishLoading} />
  }
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111315] text-[#e9e6df]">
      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}

export default App