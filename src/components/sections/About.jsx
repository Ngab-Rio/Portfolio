import UnivImage from "../../assets/uty.png"
import SchoolImage from "../../assets/smkth.png"
import { useGsapReveal } from "../ui/useGsapReveal"

const experience = [
  ["2026 — 26", "Backend Developer Intern", "GMEDIA"],
  ["2025 — now", "Backend Developer", "UTY Software House"],
  ["2024 — 25", "Sysadmin", "THPCTF Community"],
  ["2024 — 25", "Network Engineer Intern", "Telkom Indonesia"],
]

const education = [
  ["2025 — now", "Computer Engineering", "Universitas Teknologi Yogyakarta", UnivImage],
  ["2022 — 25", "Network & Telecommunication Engineering", "SMK Tunas Harapan Pati", SchoolImage],
]

function About() {
  const sectionRef = useGsapReveal()

  return (
    <section ref={sectionRef} id="about" className="mt-32 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="grid gap-10 border-t border-white/15 pt-5 lg:grid-cols-[0.55fr_1.45fr]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#e4ff4f]">
            02 / PROFILE
          </p>
          <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr]">
            <p className="max-w-2xl text-2xl leading-tight text-[#e9e6df] md:text-4xl">
              I work across backend systems, infrastructure, and security. I like understanding the whole path from a request to the machine that serves it.
            </p>
            <div className="border-l border-[#e4ff4f]/50 pl-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#e4ff4f]">Focus now</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Building useful systems, learning in public, and growing THPSEC as a space for cybersecurity and engineering practice.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-reveal data-reveal-delay="0.1">
            <div className="mb-5 flex items-baseline justify-between border-b border-white/15 pb-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[#e4ff4f]">Experience</h2>
              <span className="font-mono text-[10px] text-zinc-500">04 — 01</span>
            </div>
            <div>
              {experience.map(([date, role, company]) => (
                <div key={`${role}-${company}`} className="grid gap-2 border-b border-white/10 py-5 sm:grid-cols-[0.55fr_1fr_0.8fr] sm:items-baseline">
                  <p className="font-mono text-xs text-zinc-500">{date}</p>
                  <p className="text-[#e9e6df]">{role}</p>
                  <p className="text-sm text-zinc-400 sm:text-right">{company}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal data-reveal-delay="0.18">
            <div className="mb-5 border-b border-white/15 pb-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-[#e4ff4f]">Education</h2>
            </div>
            <div className="divide-y divide-white/10">
              {education.map(([date, program, school, image]) => (
                <div key={school} className="relative min-h-28 overflow-hidden py-5">
                  <img src={image} alt="" className="absolute right-0 top-1/2 h-20 w-20 -translate-y-1/2 object-cover opacity-20" />
                  <div className="relative z-10 max-w-[80%]">
                    <p className="font-mono text-xs text-zinc-500">{date}</p>
                    <p className="mt-2 text-[#e9e6df]">{program}</p>
                    <p className="mt-1 text-sm text-zinc-400">{school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
