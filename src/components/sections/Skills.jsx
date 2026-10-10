import { useGsapReveal } from "../ui/useGsapReveal"

const capabilities = [
  {
    number: "01",
    title: "Backend systems",
    description: "Designing APIs and data flows that are predictable under real use.",
    items: ["Golang", "Node.js", "Express", "Laravel", "PostgreSQL", "MySQL"],
  },
  {
    number: "02",
    title: "Infrastructure",
    description: "Keeping deployments repeatable, observable, and boring in the best way.",
    items: ["Docker", "Ansible", "GitHub Actions", "Linux administration"],
  },
  {
    number: "03",
    title: "Security practice",
    description: "Investigating how systems fail and turning those lessons into better defenses.",
    items: ["Binary exploitation", "Digital forensics", "Steganography"],
  },
  {
    number: "04",
    title: "Networks",
    description: "Building the connective layer between services, devices, and people.",
    items: ["MikroTik", "Cisco", "Network implementation"],
  },
  {
    number: "05",
    title: "Embedded systems",
    description: "Programming and debugging small devices that interact with the physical world.",
    items: ["Arduino", "ESP32", "C++"],
  }
]

function Skills() {
  const sectionRef = useGsapReveal()

  return (
    <section ref={sectionRef} id="skills" className="mt-32 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12 grid gap-6 border-t border-white/15 pt-5 md:grid-cols-[0.55fr_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#e4ff4f]">
            03 / TOOLKIT
          </p>
          <div>
            <h2 className="max-w-2xl text-3xl leading-tight text-[#e9e6df] md:text-5xl">
              A practical stack for building and operating systems.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-zinc-400">
              I move between application code and the infrastructure that keeps it useful. These are the areas I spend the most time learning and working in.
            </p>
          </div>
        </div>

        <div className="border-y border-white/15">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              data-reveal
              data-reveal-delay={Number(capability.number) * 0.06}
              className="grid gap-6 border-b border-white/10 py-7 last:border-b-0 md:grid-cols-[0.55fr_0.9fr_1.35fr] md:items-start"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-[#e4ff4f]">
                {capability.number}
              </p>
              <h3 className="text-xl text-[#e9e6df]">{capability.title}</h3>
              <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
                <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                  {capability.description}
                </p>
                <div className="flex max-w-xs flex-wrap justify-start gap-2 sm:justify-end">
                  {capability.items.map((item) => (
                    <span key={item} className="border border-white/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
