import { ArrowUpRight, Code } from "lucide-react"
import { useGsapReveal } from "../ui/useGsapReveal"
import Project1Img from "../../assets/project1.png"
import Project2Img from "../../assets/project2.png"
import Project3Img from "../../assets/project3.png"

const projects = [
  {
    number: "01",
    type: "Backend system / API",
    title: "Bid Web APIs",
    desc: "A backend service for managing bidding workflows, with a structured API layer and PostgreSQL data model built for reliable transactions.",
    image: Project1Img,
    stack: ["PostgreSQL", "Node.js", "Express", "Docker"],
    github: "https://github.com/Ngab-Rio/BidHouse",
  },
  {
    number: "02",
    type: "Automation / CTF",
    title: "THPCTF Bot",
    desc: "A Telegram bot that distributes and manages CTF challenges through chat commands.",
    image: Project2Img,
    stack: ["Python", "CTF"],
    github: "#",
  },
  {
    number: "03",
    type: "Backend system / Finance",
    title: "E-Money APIs",
    desc: "An API system for expense tracking, transaction recording, and split bill workflows.",
    image: Project3Img,
    stack: ["Node.js", "PostgreSQL", "Express"],
    github: "https://github.com/Ngab-Rio/API-E_Money",
  },
]

function ProjectLink({ href }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-zinc-300 transition-colors hover:text-[#e4ff4f]">
      <Code size={15} /> View source <ArrowUpRight size={15} />
    </a>
  )
}

function Projects() {
  const [featured, ...supporting] = projects
  const sectionRef = useGsapReveal()

  return (
    <section ref={sectionRef} id="projects" className="mt-32 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12 grid gap-6 border-t border-white/15 pt-5 md:grid-cols-[0.55fr_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#e4ff4f]">
            01 / SELECTED WORK
          </p>
          <div>
            <h2 className="max-w-2xl text-3xl leading-tight text-[#e9e6df] md:text-5xl">
              A few systems I have put into the world.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
              Projects shaped by a simple preference: make the underlying system clear, dependable, and easy to build on.
            </p>
          </div>
        </div>

        <article data-reveal data-reveal-delay="0.1" className="grid overflow-hidden border border-white/15 bg-[#191c1b] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[20rem] overflow-hidden border-b border-white/15 lg:border-b-0 lg:border-r">
            <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.2em] text-[#e4ff4f]">{featured.number} / FEATURED</span>
          </div>
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#e4ff4f]">{featured.type}</p>
              <h3 className="mt-5 text-3xl text-[#e9e6df]">{featured.title}</h3>
              <p className="mt-5 max-w-md leading-relaxed text-zinc-400">{featured.desc}</p>
            </div>
            <div className="mt-10">
              <div className="mb-6 flex flex-wrap gap-2">
                {featured.stack.map((item) => <span key={item} className="border border-white/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-300">{item}</span>)}
              </div>
              <ProjectLink href={featured.github} />
            </div>
          </div>
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {supporting.map((project) => (
            <article key={project.number} data-reveal data-reveal-delay={0.18 + supporting.indexOf(project) * 0.08} className="grid gap-5 border-t border-white/15 pt-5 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#191c1b]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0" />
              </div>
              <div className="flex flex-col justify-between gap-5">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-[#e4ff4f]">{project.number} / {project.type}</p>
                  <h3 className="mt-3 text-xl text-[#e9e6df]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.desc}</p>
                </div>
                <ProjectLink href={project.github} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
