import { motion } from "framer-motion"
import ParticleField from "../components/ParticleField"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-20 bg-black text-white overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-4xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          Portfolio websites that elevate your work.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Ghent Studio builds cinematic, high-performance websites for modern creatives who refuse to look ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#work"
            className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-purple-800 font-semibold hover:opacity-90 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-neutral-700 hover:border-neutral-500 transition"
          >
            Start a Project
          </a>
        </motion.div>
        <section className="relative ...">
  <ParticleField />

  <div className="relative z-10">
     
  </div>
</section>

      </div>
    </section>
  )
}