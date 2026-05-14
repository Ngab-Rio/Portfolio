function Skills() {
  const skills = [
    {
      title: "Backend",
      items: ["Golang", "Node.js", "Express", "Laravel", "PostgreSQL", "MySQL"],
    },
    {
      title: "DevOps",
      items: ["GitHub Actions (CI/CD)", "Docker", "Ansible", "Linux System Administration"],
    },
    {
      title: "CTF",
      items: ["Binary Exploitation", "Digital Forensic", "Steganography"],
    },
    {
      title: "Networking",
      items: ["Mikrotik", "Cisco"],
    },
  ]

  return (
    <section id="skills" className="relative px-6 mt-32 text-white">

      {/* HEADER */}
      {/* HEADER */}
      <div className="mb-10 max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-px bg-teal-400/40" />
          <div className="w-1.5 h-1.5 bg-teal-400 rotate-45" />
        </div>

        <h2 className="text-teal-400 text-xl tracking-[0.3em] mb-3">
          SKILLS
        </h2>

        <p className="text-zinc-400 max-w-xl">
            Building and maintaining systems across backend engineering,
            infrastructure automation, cybersecurity, and network architecture.
        </p>

      </div>

      {/* GRID PANEL */}
      <div className="max-w-6xl mx-auto">

        {/* OUTER BORDER */}
        <div className="grid grid-cols-1 md:grid-cols-4 border border-white/10">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                p-6
                bg-white/5 backdrop-blur-xl
                hover:bg-white/10
                transition
                border-r border-b border-white/10
                last:border-r-0
                md:border-b-0
              "
            >

              {/* TITLE */}
              <h3 className="text-teal-400 text-sm tracking-[0.3em] mb-4">
                {skill.title.toUpperCase()}
              </h3>

              {/* ITEMS */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="
                      text-xs px-2 py-1
                      border border-white/10
                      text-zinc-300
                      bg-white/5
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Skills