import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useScrollAnimation(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll(".word")

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 60,
          filter: "blur(12px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=150%",
            scrub: true,
            pin: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [ref])
}