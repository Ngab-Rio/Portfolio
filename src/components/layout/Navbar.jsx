import { Menu, X } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

{/* ================= DESKTOP ================= */}
<div className="hidden md:block border-b border-white/10 bg-black/40 backdrop-blur-xl">

  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">

    {/* BRAND */}
    <div
      className="text-white text-2xl"
      style={{ fontFamily: "League Script" }}
    >
      Maman.
    </div>

    {/* MENU */}
    <div className="flex items-center gap-10 text-sm text-zinc-400">
      <a href="#home" className="hover:text-teal-400 transition">Home</a>
      <a href="#about" className="hover:text-teal-400 transition">About</a>
      <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
      <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
    </div>

    {/* CONTACT */}
    <a
      href="#contact"
      className="
        px-4 py-2
        border border-teal-400/40
        text-teal-400 text-sm
        hover:bg-teal-400/10
        transition
      "
    >
      Contact
    </a>

  </div>
</div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 w-full px-4">

        <div className="
          max-w-md mx-auto
          rounded-3xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-lg shadow-black/20
          overflow-hidden
        ">

          {/* TOP BAR */}
          <div className="h-14 px-6 flex items-center justify-between">

            <h1
              className="text-white text-2xl"
              style={{ fontFamily: "League Script" }}
            >
              Maman.
            </h1>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-teal-400 transition"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>

          {/* DROPDOWN */}
          {isOpen && (
            <div className="px-6 pb-6 flex flex-col gap-4 text-zinc-300">

              <a href="#home" className="hover:text-teal-400">Home</a>
              <a href="#about" className="hover:text-teal-400">About</a>
              <a href="#projects" className="hover:text-teal-400">Projects</a>
              <a href="#skills" className="hover:text-teal-400">Skills</a>

              <a
                href="#contact"
                className="
                  mt-2 text-center
                  px-4 py-2
                  border border-teal-400/40
                  text-teal-400
                "
              >
                Contact
              </a>

            </div>
          )}

        </div>
      </div>

    </nav>
  )
}

export default Navbar