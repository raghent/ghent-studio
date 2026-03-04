import { motion } from "framer-motion"
import { useRef } from "react"
import useScrollAnimation from "../animations/useScrollAnimation"

export default function Tech() {

    const sectionRef = useRef(null)
    useScrollAnimation(sectionRef)
  return (
    <section ref={sectionRef} className="py-24 px-8 md:px-20 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Built on modern infrastructure.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          Every Ghent Studio build is designed for speed, security,
          and global performance.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">

          <div className="border border-neutral-800 rounded-xl p-6">
            Cloudflare Edge Deployment
          </div>

          <div className="border border-neutral-800 rounded-xl p-6">
            Performance-Optimized Builds
          </div>

          <div className="border border-neutral-800 rounded-xl p-6">
            Modern Motion Frameworks
          </div>

          <div className="border border-neutral-800 rounded-xl p-6">
            Secure Contact Infrastructure
          </div>

        </div>

      </div>
    </section>
  )
}