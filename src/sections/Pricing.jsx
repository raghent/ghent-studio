import { motion } from "framer-motion"
import { useRef } from "react"
import useScrollAnimation from "../animations/useScrollAnimation"

export default function Pricing() {
   
   const sectionRef = useRef(null)
   useScrollAnimation(sectionRef)
  return (
    <section ref={sectionRef} id="pricing" className="py-32 px-8 md:px-20 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Select your build.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Crafted to match your ambition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-neutral-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Foundation</h3>
            <p className="text-gray-400 mb-6">
              Starting at $1,200
            </p>
            <ul className="space-y-3 text-gray-400 mb-8">
              <li>• Custom 1–3 page portfolio</li>
              <li>• Motion-enhanced hero section</li>
              <li>• Responsive layout</li>
              <li>• Secure contact system</li>
              <li>• Performance-optimized deployment</li>
              <li>• 2 revision rounds</li>
            </ul>
            <a
              href="#contact"
              className="px-8 py-4 border border-neutral-700 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-white"
            >
              Start a Project
            </a>
          </motion.div>

          {/* Signature (Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-purple-600 rounded-2xl p-8 bg-neutral-900"
          >
            <h3 className="text-2xl font-semibold mb-4">Signature</h3>
            <p className="text-gray-300 mb-6">
              Starting at $2,000
            </p>
            <ul className="space-y-3 text-gray-400 mb-8">
              <li>• Everything in Foundation</li>
              <li>• Multi-section portfolio architecture</li>
              <li>• Advanced motion + scroll effects</li>
              <li>• Project showcase system</li>
              <li>• SEO foundation</li>
              <li>• 3 revision rounds</li>
            </ul>
            <a
              href="#contact"
              className="px-8 py-4 bg-purple-600 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.35)] hover:bg-purple-500"
            >
              Start a Project
            </a>
          </motion.div>

          {/* Cinematic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="border border-neutral-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Cinematic</h3>
            <p className="text-gray-400 mb-6">
              Starting at $3,500+
            </p>
            <ul className="space-y-3 text-gray-400 mb-8">
              <li>• Everything in Signature</li>
              <li>• Fully cinematic interactive experience</li>
              <li>• Custom motion choreography</li>
              <li>• Advanced UI effects</li>
              <li>• Strategic content structure guidance</li>
              <li>• Extended launch support</li>
            </ul>
            <a
              href="#contact"
              className="px-8 py-4 border border-neutral-700 rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-white"
            >
              Start a Project
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}