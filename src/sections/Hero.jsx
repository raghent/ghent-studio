import { motion } from "framer-motion"
import ParticleField from "../components/ParticleField"

export default function Hero() {
  return (
    <section className="relative pt-32 min-h-screen flex items-center justify-center px-8 md:px-20 bg-black text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
      backgroundImage: "radial-gradient(circle at center, rgba(168,85,247,0.22), transparent 70%)",
      }}
       />

      {/* Particles */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
        >
          Portfolio websites for modern creatives.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-5xl mx-auto mb-12"
        >
          Cinematic, high-performance sites designed to make your work impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-purple-600 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.35)] hover:bg-purple-500"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-neutral-700 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-white"
          >
            Start a Project
          </a>

        </motion.div>

      </div>
    </section>
  )
}