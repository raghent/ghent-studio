import { motion } from "framer-motion"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Success() {
  const navigate = useNavigate()

  // Optional: Auto redirect after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/")
    }, 6000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Message Sent
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          Your inquiry has been received. We’ll review your project and respond shortly.
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-block px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-purple-800 font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </button>

        <p className="text-gray-600 text-sm mt-6">
          Redirecting automatically in a few seconds...
        </p>
      </motion.div>
    </div>
  )
}