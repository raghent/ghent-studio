import { motion } from "framer-motion"

export default function Process() {
  return (
    <section className="py-32 px-8 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          The build process
        </motion.h2>

        <p className="text-gray-400 text-lg mb-16">
          A focused approach to crafting your portfolio.
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-left">

          <div>
            <h3 className="text-xl font-semibold mb-3">Discovery</h3>
            <p className="text-gray-400">
              We discuss your work, goals, and the feeling your portfolio should create.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Design Direction</h3>
            <p className="text-gray-400">
              Layout, structure, and motion are crafted to elevate your work.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Build</h3>
            <p className="text-gray-400">
              Your site is developed using modern performance-first technology.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Launch</h3>
            <p className="text-gray-400">
              Your portfolio is deployed globally and ready to share.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}