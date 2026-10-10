import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
  ["01", "Work", "#projects"],
  ["02", "About", "#about"],
  ["03", "Skills", "#skills"],
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50 mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
      <div className="flex items-center justify-between border-b border-white/15 pb-5">
        <a href="#home" className="font-mono text-sm tracking-[0.18em] text-[#e9e6df]">
          MAF<span className="text-[#e4ff4f]">/</span>2026
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([number, label, href]) => (
            <a key={label} href={href} className="font-mono text-xs uppercase tracking-[0.16em] text-[#8b8e88] transition-colors hover:text-[#e4ff4f]">
              <span className="mr-2 text-[#e4ff4f]">{number}</span>{label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden border border-[#e4ff4f] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-[#e4ff4f] transition-colors hover:bg-[#e4ff4f] hover:text-[#182000] md:block">
          Start a conversation
        </a>

        <button type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsOpen(!isOpen)} className="text-[#e4ff4f] md:hidden">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-b border-white/15 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([number, label, href]) => (
              <a key={label} href={href} onClick={() => setIsOpen(false)} className="font-mono text-xs uppercase tracking-[0.16em] text-[#e9e6df]">
                <span className="mr-3 text-[#e4ff4f]">{number}</span>{label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="font-mono text-xs uppercase tracking-[0.16em] text-[#e4ff4f]">
              Contact me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
