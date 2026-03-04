export default function Audience() {
  return (
    <section className="py-32 px-8 md:px-20 bg-black text-white">

      <h2 className="text-4xl md:text-6xl font-bold mb-16">
        Portfolio Websites for Creatives
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <h3 className="text-2xl font-semibold mb-3">Designers</h3>
          <p className="text-gray-400">
            Showcase your work with elegant project galleries and
            detailed case studies that highlight your creative process.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Developers</h3>
          <p className="text-gray-400">
            Present projects, code work, and technical skills in a clean,
            fast portfolio built for modern web professionals.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Photographers</h3>
          <p className="text-gray-400">
            Display high-resolution photography in immersive layouts
            optimized for speed and visual storytelling.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Creators</h3>
          <p className="text-gray-400">
            Build a personal brand website that grows with your audience
            and showcases your work professionally.
          </p>
        </div>

      </div>

    </section>
  )
}