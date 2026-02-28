import { useRef, useEffect } from "react"
import useScrollAnimation from "../animations/useScrollAnimation"
import ParticleField from "../components/ParticleField"

function splitWords(text) {
  return text.split(" ").map((word, index) => (
    <span key={index} className="word inline-block mr-3">
      {word}
    </span>
  ))
}

export default function Story() {
  const sectionRef = useRef(null)
  const lightRef = useRef(null)

  useScrollAnimation(sectionRef)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!lightRef.current) return

      const x = e.clientX
      const y = e.clientY

      lightRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center px-8 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* ParticleField */}
      <div className="gradient-bg absolute inset-0 -z-30" />

      {/* Mouse Light */}
      <div
        ref={lightRef}
        className="mouse-light absolute w-75 h-75 -z-10 pointer-events-none"
      />

      <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
        {splitWords(
          "Ghent Studio designs and engineers digital experiences that feel immersive, intentional, and distinctly premium."
        )}
      </h2>
    </section>
  )
}