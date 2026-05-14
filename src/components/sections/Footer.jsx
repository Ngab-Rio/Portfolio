import { Code, Mail, Terminal } from "lucide-react"

function Footer() {
  return (
    <footer className="relative mt-32 px-6 text-white">

      {/* glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-72 h-72 bg-teal-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* GRID DESKTOP */}
        <div className="
          grid grid-cols-1 md:grid-cols-3
          border border-white/10
          bg-white/5 backdrop-blur-xl
        ">

          {/* LEFT - IDENTITY */}
          <div className="p-6 space-y-3 border-b md:border-b-0 md:border-r border-white/10">

            <div className="flex items-center gap-2 text-teal-400 text-xs tracking-[0.3em]">
              <Terminal size={14} />
              SYSTEM INFO
            </div>

            <div className="text-sm text-zinc-400 space-y-1 font-mono">
              <p><span className="text-teal-400">user:</span> maman-adi</p>
              <p><span className="text-teal-400">role:</span> backend / devops / security</p>
              <p><span className="text-teal-400">location:</span> indonesia</p>
            </div>

          </div>

          {/* CENTER - STATUS */}
          <div className="p-6 space-y-3 border-b md:border-b-0 md:border-r border-white/10">

            <div className="flex items-center gap-2 text-teal-400 text-xs tracking-[0.3em]">
              <Terminal size={14} />
              SYSTEM STATUS
            </div>

            <div className="text-sm text-zinc-400 font-mono space-y-1">
              <p>✔ backend systems stable</p>
              <p>✔ devops pipelines active</p>
              <p>✔ security research ongoing</p>
              <p className="text-teal-400">status: available for collaboration</p>
            </div>

          </div>

          {/* RIGHT - CONTACT */}
          <div className="p-6 space-y-4">

            <div className="flex items-center gap-2 text-teal-400 text-xs tracking-[0.3em]">
              <Terminal size={14} />
              CONTACT
            </div>

            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/Ngab-Rio"
                className="flex items-center gap-2 text-zinc-300 hover:text-teal-400 transition"
              >
                <Code size={16} />
                GitHub
              </a>

              <a
                href="mailto:muhammadadifirmansyah06@gmail.com"
                className="flex items-center gap-2 text-zinc-300 hover:text-teal-400 transition"
              >
                <Mail size={16} />
                Email
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-zinc-500 px-2">

          <p>© {new Date().getFullYear()} Maman Adi Firmansyah</p>

          <p className="text-teal-400 tracking-[0.3em]">
            BUILDING SYSTEMS • NOT WEBSITES
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer