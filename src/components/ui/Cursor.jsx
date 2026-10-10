import { useEffect, useRef } from "react"

function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return undefined

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

        hidden
        md:block
        w-3
        h-3

        rounded-full
        bg-[#e4ff4f]

        pointer-events-none

        z-[9999]

        will-change-transform

        mix-blend-difference
      "
    />
  )
}

export default Cursor