import { Code, Mail, Send, MessageCircle } from "lucide-react"

function Contact() {
  return (
    <section id="contact" className="relative px-6 mt-32 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-72 h-72 bg-teal-400/10 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-teal-400 text-xs tracking-[0.3em] mb-3">
          CONTACT
        </h2>

        <h3 className="text-2xl font-semibold text-white">
          LET’S BUILD SOMETHING
        </h3>

        <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto">
          Open for backend development, DevOps collaboration, and security-related projects.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

        {/* LEFT CARD */}
        <div className="
          p-6
          border border-white/10
          bg-white/5 backdrop-blur-xl
          hover:border-teal-400/30
          transition
        ">
          <h4 className="text-teal-400 text-sm tracking-[0.2em] mb-4">
            GET IN TOUCH
          </h4>

          <p className="text-zinc-400 text-sm leading-relaxed">
            If you have a project, collaboration idea, or just want to connect,
            feel free to reach out.
          </p>

          <div className="mt-6 flex flex-col gap-3">

            {/* Email */}
            <a
              href="mailto:muhammadadifirmansyah06@gmail.com"
              className="
                flex items-center gap-3
                text-zinc-300
                hover:text-teal-400
                transition
              "
            >
              <Mail size={16} />
              Email
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Ngab-Rio"
              className="
                flex items-center gap-3
                text-zinc-300
                hover:text-teal-400
                transition
              "
            >
              <Code size={16} />
              GitHub
            </a>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="
          p-6
          border border-white/10
          bg-white/5 backdrop-blur-xl
          hover:border-teal-400/30
          transition
        ">
          <h4 className="text-teal-400 text-sm tracking-[0.2em] mb-4">
            QUICK MESSAGE
          </h4>

          <p className="text-zinc-400 text-sm mb-6">
            Prefer a direct message?
          </p>

          <a
            href="https://t.me/yourtelegram"
            className="
              flex items-center justify-center gap-2

              w-full
              py-3

              bg-teal-400
              text-black
              font-medium

              hover:bg-teal-300
              transition
            "
          >
            <MessageCircle size={16} />
            Telegram
          </a>

          <a
            href="mailto:muhammadadifirmansyah06@gmail.com"
            className="
              flex items-center justify-center gap-2

              w-full
              mt-3
              py-3

              border border-white/10
              text-white

              hover:border-teal-400/30
              hover:text-teal-400
              transition
            "
          >
            <Send size={16} />
            Send Email
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact