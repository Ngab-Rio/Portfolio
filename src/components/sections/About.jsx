import UnivImage from "../../assets/uty.png"
import SchoolImage from "../../assets/smkth.png"

function About() {
  return (
    <section id="about" className="relative px-6 mt-24 text-white">

      {/* glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-72 h-72 bg-teal-400/10 blur-3xl rounded-full pointer-events-none" />

      {/* ================= ABOUT (FULL WIDTH) ================= */}
      <div className="max-w-6xl mx-auto mb-14">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-px bg-teal-400/40" />
          <div className="w-1.5 h-1.5 bg-teal-400 rotate-45" />
        </div>

        <h2 className="text-teal-400 text-xl tracking-[0.3em] mb-3">
          PROFILE SUMMARY
        </h2>

        <p className="text-zinc-300 leading-relaxed max-w-2xl">
          I’m Maman Adi Firmansyah, an IT enthusiast focused on backend systems,
          network infrastructure, and Linux administration. I work with MikroTik
          and Cisco for network implementation, with strong interest in automation
          and cybersecurity. I am also the Founder of THPSEC, a community focused
          on cybersecurity and system engineering.
        </p>

      </div>

      {/* ================= GRID SECTION ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ================= EXPERIENCE ================= */}
        <div className="space-y-6">

          <h3 className="text-teal-400 text-xs tracking-[0.3em]">
            EXPERIENCE
          </h3>

          <div className="relative pl-6 border-l border-white/10 space-y-6">

            {/* ITEM */}
            {[
              {
                title: "Network Engineer Internship",
                place: "Telkom Indonesia",
                date: "Dec 2024 - Feb 2025",
              },
              {
                title: "Sysadmin",
                place: "THPCTF Community",
                date: "2024 - 2025",
              },
              {
                title: "Backend Developer",
                place: "UTY Software House",
                date: "2025 - Present",
              },
            ].map((item, i) => (
              <div key={i} className="relative">

                {/* DOT */}
                <div className="absolute -left-[30px] top-6 w-3 h-3 bg-teal-400 rotate-45" />

                <div className="p-4 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-teal-400/30 transition">
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.place}</p>
                  <p className="text-xs text-zinc-500 mt-1">{item.date}</p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div className="space-y-6">

          <h3 className="text-teal-400 text-xs tracking-[0.3em]">
            EDUCATION
          </h3>

          <div className="space-y-6">

            {/* CARD 1 */}
            <div className="relative p-4 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-teal-400/30 transition">

              <div className="relative z-10">
                <p className="text-white">Universitas Teknologi Yogyakarta</p>
                <p className="text-sm text-zinc-400">Computer Engineering</p>
                <p className="text-sm text-zinc-500 italic">2025 - Present</p>
              </div>

              <img
                src={UnivImage}
                alt="edu"
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-24 h-24 object-cover opacity-15 pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/60" />
            </div>

            {/* CARD 2 */}
            <div className="relative p-4 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-teal-400/30 transition">

              <div className="relative z-10">
                <p className="text-white">SMK Tunas Harapan Pati</p>
                <p className="text-sm text-zinc-400">
                  Computer Network & Telecommunication Engineering
                </p>
                <p className="text-sm text-zinc-500 italic">2022 - 2025</p>
              </div>

              <img
                src={SchoolImage}
                alt="edu"
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-24 h-24 object-cover opacity-15 pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/60" />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About