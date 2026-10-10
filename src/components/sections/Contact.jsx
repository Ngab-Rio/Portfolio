import { ArrowUpRight, Code, Globe, Mail, MapPin } from "lucide-react"
import { useGsapReveal } from "../ui/useGsapReveal"

const links = [
  ["Email", "muhammadadifirmansyah06@gmail.com", "mailto:muhammadadifirmansyah06@gmail.com", Mail],
  ["GitHub", "github.com/Ngab-Rio", "https://github.com/Ngab-Rio", Code],
  ["LinkedIn", "Maman Adi Firmansyah", "https://www.linkedin.com/in/maman-adi-firmansyah-b837712b9/", Globe],
]

function Contact() {
  const sectionRef = useGsapReveal()

  return (
    <section ref={sectionRef} id="contact" className="mt-32 px-6 pb-24 text-white">
      <div data-reveal className="mx-auto max-w-6xl border-t border-white/15 pt-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div data-reveal data-reveal-delay="0.1">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#e4ff4f]">04 / CONTACT</p>
            <h2 className="mt-8 max-w-2xl text-5xl leading-[0.95] tracking-[-0.04em] text-[#e9e6df] md:text-7xl">
              Have a system worth building?
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-zinc-400">
              I am open to backend engineering, infrastructure work, security research, and thoughtful collaborations.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 border border-[#e4ff4f]/50 px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-[#e4ff4f]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e4ff4f]" />
              Available for collaboration
            </div>
          </div>

          <div data-reveal data-reveal-delay="0.18" className="self-end">
            <div className="mb-4 flex items-center gap-2 border-b border-white/15 pb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              <MapPin size={14} /> Yogyakarta / Indonesia
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {links.map(([label, value, href, Icon]) => (
                <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-[#e4ff4f]">
                  <span className="flex min-w-0 items-center gap-4">
                    <Icon size={18} className="shrink-0 text-[#e4ff4f]" />
                    <span className="min-w-0">
                      <span className="block text-sm text-zinc-500">{label}</span>
                      <span className="block truncate text-[#e9e6df]">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight size={18} className="shrink-0 text-zinc-500 transition-colors group-hover:text-[#e4ff4f]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
