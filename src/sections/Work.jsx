export default function Work() {
  return (
    <section
      id="work"
      className="py-32 px-8 md:px-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-6xl font-bold mb-20">
          Featured Work
        </h2>

        <div className="space-y-24">

          {/* NeonRoute */}
          <div className="group cursor-pointer">
            <div className="border border-white/10 rounded-2xl p-12 hover:border-white/30 transition duration-500">
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
          </div>

          {/* NotNewButYou */}
          <div className="group cursor-pointer">
            <div className="border border-white/10 rounded-2xl p-12 hover:border-white/30 transition duration-500">
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
          </div>

        </div>

      </div>
    </section>
  )
}