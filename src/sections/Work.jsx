import { motion } from "framer-motion"

export default function Work() {
  return (
    <section
      id="work"
      className="py-32 px-8 md:px-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
          Selected Projects
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-20">
          Featured Work
        </h2>

        <div className="space-y-32">

          {/* NeonRoute */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group cursor-pointer"
>
            <div className="relative border border-white/10 rounded-2xl p-12 transition duration-500 hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(168,85,247,0.15)]">
              <h3 className="text-3xl font-semibold mb-4">
                NeonRoute
              </h3>
              <p className="text-gray-400 max-w-2xl">
                A performance-driven link management platform designed with a cinematic, motion-forward interface.
              </p>
              <p className="mt-6 text-sm uppercase tracking-wide text-gray-500">
                SaaS Concept · In Development
              </p>
            </div>
          </motion.div>

          {/* NotNewButYou */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group cursor-pointer"
>
            <div className="relative border border-white/10 rounded-2xl p-12 transition duration-500 hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(168,85,247,0.15)]">
              <h3 className="text-3xl font-semibold mb-4">
                NotNewButYou
              </h3>
              <p className="text-gray-400 max-w-2xl">
                A refined resale brand experience transforming estate and storage finds into curated digital storefronts.
              </p>
              <p className="mt-6 text-sm uppercase tracking-wide text-gray-500">
                Ecommerce Concept · In Development
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}