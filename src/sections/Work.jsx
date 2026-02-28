import { motion } from "framer-motion"

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-40 px-8 md:px-20 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
          Selected Projects
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-24">
          Featured Work
        </h2>

        <div className="space-y-40">

          {/* NeonRoute */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10">

              {/* Parallax Gradient Background */}
              <motion.div
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-purple-700/40 via-black to-black"
              />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_70%)]" />

              {/* Content */}
              <div className="relative z-10 p-16 flex flex-col justify-end h-full">
                <h3 className="text-4xl font-semibold mb-4">
                  NeonRoute
                </h3>
                <p className="text-gray-300 max-w-xl">
                  A performance-driven link management platform designed with a cinematic, motion-forward interface.
                </p>
                <p className="mt-6 text-sm uppercase tracking-wide text-gray-500">
                  SaaS Concept · In Development
                </p>
              </div>

            </div>
          </motion.div>


          {/* NotNewButYou */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10">

              {/* Parallax Gradient Background */}
              <motion.div
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-black to-black"
              />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

              {/* Content */}
              <div className="relative z-10 p-16 flex flex-col justify-end h-full">
                <h3 className="text-4xl font-semibold mb-4">
                  NotNewButYou
                </h3>
                <p className="text-gray-300 max-w-xl">
                  A refined resale brand experience transforming estate and storage finds into curated digital storefronts.
                </p>
                <p className="mt-6 text-sm uppercase tracking-wide text-gray-500">
                  Ecommerce Concept · In Development
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}