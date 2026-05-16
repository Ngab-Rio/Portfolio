import {
  Mail,
  MapPin,
  Code,
  Terminal,
  ArrowUpRight,
  Globe
} from "lucide-react"

function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 mt-32 pb-24 text-white overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-20 w-96 h-96 bg-teal-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* TOP LINE */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-teal-400/40" />
          <div className="w-1.5 h-1.5 bg-teal-400 rotate-45" />
        </div>

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

        <h2 className="text-teal-400 text-xl tracking-[0.3em] mb-3">
          CONTACT
        </h2>

            <h3 className="text-4xl md:text-5xl text-white leading-tight max-w-lg">
              Let’s build systems,
              infrastructure,
              and ideas together.
            </h3>

            <p className="text-zinc-400 mt-6 leading-relaxed max-w-md">
              Open for collaboration, backend engineering,
              infrastructure projects, cybersecurity discussions,
              and technology research.
            </p>

            {/* STATUS */}
            <div className="mt-8 flex items-center gap-3">

              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-teal-400 rounded-full" />
                <div className="absolute w-3 h-3 bg-teal-400 rounded-full animate-ping opacity-75" />
              </div>

              <p className="text-sm text-teal-400 tracking-[0.2em]">
                AVAILABLE FOR COLLABORATION
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="border border-white/10 bg-white/5 backdrop-blur-xl">

            {/* TERMINAL HEADER */}
            <div className="border-b border-white/10 px-5 py-4 flex items-center gap-2 text-teal-400 text-xs tracking-[0.3em]">
              <Terminal size={14} />
              COMMUNICATION PANEL
            </div>

            {/* CONTACT ITEMS */}
            <div className="divide-y divide-white/10">

              {/* EMAIL */}
              <a
                href="mailto:muhammadadifirmansyah06@gmail.com"
                className="
                  flex items-center justify-between
                  px-5 py-5
                  hover:bg-white/5
                  transition group
                "
              >

                <div className="flex items-center gap-4">
                  <Mail className="text-teal-400" size={18} />

                  <div>
                    <p className="text-white text-sm">Email</p>
                    <p className="text-zinc-400 text-sm">
                      muhammadadifirmansyah06
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    text-zinc-500
                    group-hover:text-teal-400
                    transition
                  "
                />

              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Ngab-Rio"
                target="_blank"
                className="
                  flex items-center justify-between
                  px-5 py-5
                  hover:bg-white/5
                  transition group
                "
              >

                <div className="flex items-center gap-4">
                  <Code className="text-teal-400" size={18} />

                  <div>
                    <p className="text-white text-sm">GitHub</p>
                    <p className="text-zinc-400 text-sm">
                      github.com/Ngab-Rio
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    text-zinc-500
                    group-hover:text-teal-400
                    transition
                  "
                />

              </a>
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/maman-adi-firmansyah-b837712b9/"
                target="_blank"
                className="
                  flex items-center justify-between
                  px-5 py-5
                  hover:bg-white/5
                  transition group
                "
              >

                <div className="flex items-center gap-4">
                  <Globe className="text-teal-400" size={18} />

                  <div>
                    <p className="text-white text-sm">LinkedIn</p>
                    <p className="text-zinc-400 text-sm">
                      Maman Adi Firmansyah
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    text-zinc-500
                    group-hover:text-teal-400
                    transition
                  "
                />

              </a>

              {/* LOCATION */}
              <div
                className="
                  flex items-center justify-between
                  px-5 py-5
                "
              >

                <div className="flex items-center gap-4">
                  <MapPin className="text-teal-400" size={18} />

                  <div>
                    <p className="text-white text-sm">Location</p>
                    <p className="text-zinc-400 text-sm">
                      Indonesia
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact