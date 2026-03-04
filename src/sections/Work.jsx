import { motion } from "framer-motion"

export default function Work() {
  return (
    <section id="work" className="py-32 px-8 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Selected builds.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            A preview of current and recent work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* NeonRoute */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900"
          >
            <h3 className="text-2xl font-semibold mb-4">
              NeonRoute
            </h3>
            <p className="text-gray-400 mb-6">
              A performance-driven link management platform designed with clarity and control.
            </p>
            <span className="text-sm text-purple-400">
              In active development
            </span>
          </motion.div>

          {/* NotNewButYou */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900"
          >
            <h3 className="text-2xl font-semibold mb-4">
              NotNewButYou
            </h3>
            <p className="text-gray-400 mb-6">
              A curated resale marketplace built with a modern, minimal interface.
            </p>
            <span className="text-sm text-purple-400">
              Rebuild in progress
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  )
}