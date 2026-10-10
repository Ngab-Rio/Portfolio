import { ArrowUpRight } from "lucide-react"

function Footer() {
  return (
    <footer className="px-6 pb-8 text-white">
      <div className="mx-auto max-w-6xl border-t border-white/15 pt-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e4ff4f]">Maman Adi Firmansyah</p>
            <p className="mt-3 max-w-sm text-sm text-zinc-500">Backend, infrastructure, and security practice from Yogyakarta.</p>
          </div>
          <a href="#home" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-[#e4ff4f]">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-600 sm:flex-row">
          <span>© {new Date().getFullYear()} / All rights reserved</span>
          <span>Built with intent</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
