import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import MamanImage from "../../assets/Maman.jpg"
import CVFile from "../../assets/cv.pdf"

function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-[calc(100vh-105px)] w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
      <div className="order-1 lg:order-1">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[#e4ff4f]">
          Backend engineer / infrastructure builder
        </p>

        <h1 className="max-w-4xl text-[clamp(3.6rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#e9e6df]">
          <span className="block">Systems that stay</span>
          <span className="block text-[#e4ff4f]">useful.</span>
        </h1>

        <div className="mt-10 grid max-w-2xl gap-8 border-t border-white/15 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="max-w-md text-base leading-relaxed text-[#a8aaa3]">
            I build reliable backend services and the infrastructure around them. My work sits between APIs, Linux, networks, and security.
          </p>

          <div className="flex gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-[#e4ff4f] px-4 py-3 text-sm font-medium text-[#182000] transition-transform hover:-translate-y-1">
              See selected work <ArrowDownRight size={16} />
            </a>
            <a href={CVFile} download aria-label="Download CV" className="inline-flex h-12 w-12 items-center justify-center border border-white/20 text-[#e9e6df] transition-colors hover:border-[#e4ff4f] hover:text-[#e4ff4f]">
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative order-2 mx-auto w-full max-w-sm lg:order-2 lg:justify-self-end">
        <div className="absolute -right-4 -top-4 h-full w-full border border-[#e4ff4f]/50" />
        <div className="relative aspect-[4/5] overflow-hidden bg-[#292d2a]">
          <img src={MamanImage} alt="Maman Adi Firmansyah" className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
        </div>
        <p className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b8e88]">
          <span>Yogyakarta, ID</span>
          <span>01 / 05</span>
        </p>
      </div>
    </section>
  )
}

export default Hero
