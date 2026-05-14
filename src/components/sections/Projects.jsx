import { Code, Link } from "lucide-react"
import Project1Img from "../../assets/project1.png"
import Project2Img from "../../assets/project2.png"
import Project3Img from "../../assets/project3.png"

function Projects() {
  const projects = [
    {
      title: "Bid Web APIs",
      desc: "A backend API service for managing bidding workflows, built with scalable architecture and PostgreSQL for reliable data storage.",
      image: Project1Img,
      stack: ["PostgreSQL", "Node.js", "Express", "API", "Docker"],
      github: "https://github.com/Ngab-Rio/BidHouse",
      demo: "#",
    },
    {
      title: "THPCTF Bot",
      desc: "Telegram bot for delivering and managing CTF challenges, enabling automated challenge distribution and interaction via chat commands.",
      image: Project2Img,
      stack: ["Python", "CTF"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Money APIs",
      desc: "Backend API system for managing personal finance, including expense tracking, transaction recording, and split bill functionality in real-time.",
      image: Project3Img,
      stack: ["Node.js", "PostgreSQL", "Express"],
      github: "https://github.com/Ngab-Rio/API-E_Money",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="relative px-6 mt-32 text-white">

      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-72 h-72 bg-teal-400/10 blur-3xl rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="mb-10 max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-px bg-teal-400/40" />
          <div className="w-1.5 h-1.5 bg-teal-400 rotate-45" />
        </div>

        <h2 className="text-teal-400 text-xl tracking-[0.3em] mb-3">
          PROJECTS
        </h2>

        <p className="text-zinc-400 max-w-xl">
          A collection of systems, tools, and backend-focused projects I’ve built
          around networking, automation, and cybersecurity.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              relative overflow-hidden
              border border-white/10
              bg-white/5 backdrop-blur-xl
              hover:border-teal-400/30
              transition duration-300
            "
          >

            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-full object-cover
                  grayscale group-hover:grayscale-0
                  group-hover:scale-105
                  transition duration-500
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-3">

              <h3 className="text-white font-medium text-lg">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.desc}
              </p>

              {/* STACK */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, i) => (
                  <span
                    key={i}
                    className="
                      text-xs px-2 py-1
                      border border-teal-400/20
                      text-teal-400 bg-teal-400/5
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 pt-2">

                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-teal-400 transition"
                >
                  <Code size={16} /> Code
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-teal-400 transition"
                >
                  <Link size={16} /> Demo
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Projects