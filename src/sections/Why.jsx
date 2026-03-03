import { motion } from "framer-motion"

export default function Why() {
  return (
    <section className="py-32 px-8 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built with intention.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Every site is crafted from the ground up — designed to elevate your work and engineered to perform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">
              Craft-first design.
            </h3>
            <p className="text-gray-400">
              Every layout, transition, and interaction is deliberate. No templates. No generic builds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">
              Engineered for performance.
            </h3>
            <p className="text-gray-400">
              Fast, secure, globally distributed infrastructure — without compromising aesthetic control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">
              Designed to elevate your work.
            </h3>
            <p className="text-gray-400">
              Your portfolio shouldn’t compete with your work. It should amplify it.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}