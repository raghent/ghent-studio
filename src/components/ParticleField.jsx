import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ParticleField() {
  const mountRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Respect reduced motion
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduceMotion) return

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000)
    camera.position.z = 120

    // Renderer (transparent so gradients show through)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    // Particles
    const count = 1200
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3 + 0] = (Math.random() - 0.5) * 260 // x
      positions[i3 + 1] = (Math.random() - 0.5) * 160 // y
      positions[i3 + 2] = (Math.random() - 0.5) * 260 // z
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Subtle mouse parallax
    let targetX = 0
    let targetY = 0

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      targetX = x * 0.35
      targetY = -y * 0.25
    }
    window.addEventListener("mousemove", onMove)

    // Resize handling
    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    }
    window.addEventListener("resize", onResize)

    // Animation loop
    let t = 0
    const animate = () => {
      t += 0.0025

      // gentle drift + rotation
      points.rotation.y += 0.0008
      points.rotation.x += 0.0003
      points.position.y = Math.sin(t) * 2.0

      // ease toward mouse parallax
      points.position.x += (targetX * 14 - points.position.x) * 0.03
      points.position.z += (targetY * 14 - points.position.z) * 0.03

      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("resize", onResize)

      scene.remove(points)
      geometry.dispose()
      material.dispose()
      renderer.dispose()

      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-20 pointer-events-none"
      aria-hidden="true"
    />
  )
}