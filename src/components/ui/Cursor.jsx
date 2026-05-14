import { useEffect, useRef } from "react"

function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${e.clientX - 16}px, ${e.clientY - 16}px)
        `
      }
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        top-0
        left-0

        w-8
        h-8

        rounded-full
        backdrop-blur
        border
        border-teal-400

        pointer-events-none

        z-[9999]

        will-change-transform

        shadow-[0_0_10px_rgba(45,212,191,0.6),0_0_25px_rgba(45,212,191,0.4)]
      "
    />
  )
}

export default Cursor