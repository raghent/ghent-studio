export default function Services() {
  return (
    <section id="services" className="py-32 px-8 md:px-20 bg-black text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-16">
        What We Build
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Cinematic Portfolios
          </h3>
          <p className="text-gray-400">
            Scroll-driven storytelling, immersive motion, and interactive depth.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Personal Brand Sites
          </h3>
          <p className="text-gray-400">
            High-impact digital presence built to convert and impress.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Business Showcase Sites
          </h3>
          <p className="text-gray-400">
            Premium presentation with performance-focused architecture.
          </p>
        </div>
      </div>
    </section>
  )
}