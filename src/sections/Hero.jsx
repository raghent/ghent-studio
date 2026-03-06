import { motion } from "framer-motion"
import ParticleField from "../components/ParticleField"

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center px-8 md:px-20 pt-28 pb-20 bg-black text-white overflow-x-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(168,85,247,0.22), transparent 70%)",
        }}
      />

      <ParticleField />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          Portfolio websites for modern creatives.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-6 w-full max-w-3xl text-base md:text-lg leading-relaxed text-gray-400 text-center"
        >
          Cinematic, high-performance sites designed to make your work impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          className="mt-5 text-[11px] md:text-sm uppercase tracking-[0.2em] text-neutral-300"
        >
          Limited builds this month
        </motion.div>
      </div>
    </section>
  )
}