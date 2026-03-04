import { useEffect, useRef } from "react"

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let particles = []
    const particleCount = 60

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        vx: Math.random() * 0.3 - 0.15,
        vy: Math.random() * 0.3 - 0.15
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(168,85,247,0.4)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)

    return () => window.removeEventListener("resize", resize)

  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
    />
  )
}