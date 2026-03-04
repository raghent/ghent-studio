import { useEffect, useRef } from "react"

export default function AmbientGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      glowRef.current.style.transform = `translateY(${scrollY * 0.2}px)`
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600 opacity-20 blur-[220px] rounded-full -z-10"
    />
  )
}