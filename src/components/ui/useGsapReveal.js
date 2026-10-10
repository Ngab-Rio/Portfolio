import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

export function useGsapReveal() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const elements = section.querySelectorAll("[data-reveal]")
    if (!elements.length) return undefined

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(elements, { clearProps: "all" })
      return undefined
    }

    let observer

    const context = gsap.context(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            gsap.fromTo(
              entry.target,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                delay: Number(entry.target.dataset.revealDelay || 0),
                ease: "power3.out",
                clearProps: "opacity,visibility,transform",
              },
            )
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.14 },
      )

      elements.forEach((element) => observer.observe(element))

    }, section)

    return () => {
      observer?.disconnect()
      context.revert()
    }
  }, [])

  return sectionRef
}
