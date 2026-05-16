import { useEffect, useState } from "react"

function Loader({ onFinish }) {

  const lines = [
    "Initializing system modules...",
    "Checking network interfaces...",
    "Starting backend services...",
    "Establishing secure connection...",
    "Access granted.",
  ]

  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {

    if (lineIndex >= lines.length) {

      setTimeout(() => {
        onFinish()
      }, 1000)

      return
    }

    const currentText = lines[lineIndex]

    if (charIndex < currentText.length) {

      const timeout = setTimeout(() => {

        setCurrentLine(prev => prev + currentText[charIndex])

        setCharIndex(prev => prev + 1)

      }, 30)

      return () => clearTimeout(timeout)

    } else {

      const timeout = setTimeout(() => {

        setDisplayedLines(prev => [...prev, currentText])

        setCurrentLine("")
        setCharIndex(0)
        setLineIndex(prev => prev + 1)

      }, 400)

      return () => clearTimeout(timeout)

    }

  }, [charIndex, lineIndex])

  return (
    <div
      className="
        fixed inset-0 z-[999]
        bg-black
        flex items-center justify-center
        px-6
      "
    >

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-teal-400/10 blur-3xl rounded-full" />

      {/* Terminal */}
      <div
        className="
          relative
          w-full max-w-3xl

          border border-white/10
          bg-black/80
          backdrop-blur-xl

          overflow-hidden
        "
      >

        {/* Scanline */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.08)_50%)] bg-[length:100%_4px]" />

        {/* Header */}
        <div
          className="
            border-b border-white/10
            px-5 py-4
            flex items-center gap-2
          "
        >

          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />

          <p className="ml-4 text-xs tracking-[0.3em] text-teal-400">
            SYSTEM BOOT
          </p>

        </div>

        {/* Content */}
        <div className="p-6 font-mono text-sm min-h-[240px] space-y-3">

          {displayedLines.map((line, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-zinc-300"
            >
              <span className="text-teal-400">{">"}</span>
              <span>{line}</span>
            </div>
          ))}

          {/* CURRENT TYPING LINE */}
          {lineIndex < lines.length && (
            <div className="flex items-center gap-2 text-zinc-300">

              <span className="text-teal-400">{">"}</span>

              <span>{currentLine}</span>

              {/* Cursor */}
              <span className="w-2 h-4 bg-teal-400 animate-pulse" />

            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default Loader