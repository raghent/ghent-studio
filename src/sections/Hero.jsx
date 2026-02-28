import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black px-6 text-center">

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-[200px]"
      />

      <div className="relative z-10 max-w-6xl">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Ghent Studio
        </motion.h1>

        {/* Subheadline */}
        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6, duration: 1 }}
           className="mt-6 text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto"
>
           We design and engineer cinematic digital experiences
           <br className="hidden md:block" />
           that elevate brands
           <span className="text-white"> beyond the ordinary.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-8 justify-center"
        >
          <a
          href="#services"
          className="px-10 py-4 border border-white/20 rounded-full text-sm tracking-wide uppercase hover:border-white transition duration-300"
        >
          View Work
          </a>

          <a
          href="#contact"
          className="px-10 py-4 border border-white/20 rounded-full text-sm tracking-wide uppercase hover:border-purple-400 transition duration-300"
        >
          Start a Project
          </a>
        </motion.div>

        {/* Subtle Scarcity Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-6 text-sm text-gray-500"
        >
          Limited build slots available this month.
        </motion.p>

      </div>
    </section>
  )
}