import MamanImage from "../../assets/Maman.jpg"
import CVFile from "../../assets/cv.pdf"


function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6">

      {/* background glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-72 h-72 bg-teal-400/10 blur-3xl rounded-full pointer-events-none" />

      {/* CONTAINER (biar tidak mepet layar) */}
      <div className="mt-20 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT: IMAGE */}
        <div className="flex justify-center md:justify-start mt">

          <div className="relative group w-72 h-80">

            {/* glow */}
            <div className="absolute -inset-6 bg-teal-400/20 blur-3xl opacity-70 scale-110" />

            {/* offset border */}
            <div className="absolute top-3 left-3 w-full h-full border border-teal-400/60" />

            {/* frame */}
            <div className="
              relative w-72 h-80 overflow-hidden
              border border-white/20 bg-zinc-900
              transition duration-300
              group-hover:-translate-y-1
              group-hover:shadow-[0_0_60px_rgba(45,212,191,0.25)]
            ">
              <img
                src={MamanImage}
                alt="Maman"
                className="
                  w-full h-full object-cover grayscale
                  transition duration-300
                  group-hover:scale-105 group-hover:grayscale-0
                "
              />
            </div>

          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div className="flex flex-col justify-center">

          {/* ROLE */}
          <div className="inline-flex items-center w-fit px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            <p className="text-teal-400 text-xs tracking-[0.3em] font-medium">
              BACKEND • DEVOPS • SECURITY
            </p>
          </div>

          {/* NAME */}
          <h1
            className="text-white text-5xl leading-none"
            style={{ fontFamily: "Whisper" }}
          >
            Maman Adi
          </h1>

          <h1
            className="text-white text-5xl leading-none"
            style={{ fontFamily: "Whisper" }}
          >
            Firmansyah
          </h1>

          {/* LINE DECOR */}
          <div className="mt-3 flex items-center gap-2">
            <div className="h-[1px] w-80 bg-teal-400/30" />
            <div className="w-2.5 h-2.5 rotate-45 border-r border-b border-teal-400" />
          </div>

          {/* DESCRIPTION */}
          <p className="text-zinc-400 mt-6 leading-relaxed text-sm max-w-md">
            Building scalable APIs, managing Linux server infrastructure,
            and developing modern backend systems with a passion for cyber
            security and automation.
          </p>

          <div className="flex items-center gap-4 mt-8">

              {/* CONTACT (optional kalau belum ada) */}
              <a
                href="#contact"
                className="
                  px-5 py-3
                  rounded-xl
                  bg-teal-400
                  text-black
                  font-medium
                  hover:bg-teal-300
                  transition
                "
              >
                Contact Me
              </a>
            
              {/* DOWNLOAD CV */}
              <a
                href={CVFile}
                download
                className="
                  px-5 py-3
                  rounded-xl
                  border border-white/10
                  text-white
                  hover:border-teal-400/40
                  hover:text-teal-400
                  transition
                "
              >
                Download CV
              </a>
            
            </div>
        </div>

      </div>
    </section>
  )
}

export default Hero