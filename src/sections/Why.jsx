import { motion } from "framer-motion"
import { useRef } from "react"
import useScrollAnimation from "../animations/useScrollAnimation"

export default function Why() {

    const sectionRef = useRef(null)
    useScrollAnimation(sectionRef)
  return (
    <section ref={sectionRef} className="py-32 px-8 md:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        > 
        <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.35)]">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built with intention.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Every site is crafted from the ground up — designed to elevate your work and engineered to perform.
          </p>
         </div> 
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
           <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.35)]">
            <h3 className="text-xl font-semibold mb-4">
              Craft-first design.
            </h3>
            <p className="text-gray-400">
              Every layout, transition, and interaction is deliberate. No templates. No generic builds.
            </p>
            </div> 
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
           <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.35)]">
            <h3 className="text-xl font-semibold mb-4">
              Engineered for performance.
            </h3>
            <p className="text-gray-400">
              Fast, secure, globally distributed infrastructure — without compromising aesthetic control.
            </p>
           </div> 
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
           <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.35)]"> 
            <h3 className="text-xl font-semibold mb-4">
              Designed to elevate your work.
            </h3>
            <p className="text-gray-400">
              Your portfolio shouldn’t compete with your work. It should amplify it.
            </p>
           </div> 
          </motion.div>

        </div>
      </div>
    </section>
  )
}