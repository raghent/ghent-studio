export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-8 md:px-20 bg-neutral-950 text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-16">
        Investment
      </h2>

      <div className="grid md:grid-cols-3 gap-12">

        <div className="border border-neutral-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Essential</h3>
          <p className="text-4xl font-bold mb-6">$1,200+</p>
          <ul className="space-y-3 text-gray-400">
            <li>Custom Design</li>
            <li>Smooth Animations</li>
            <li>Mobile Optimized</li>
            <li>Deployment Included</li>
          </ul>
        </div>

        <div className="border border-purple-600 p-8 rounded-xl bg-neutral-900">
          <h3 className="text-2xl font-semibold mb-4">Cinematic</h3>
          <p className="text-4xl font-bold mb-6">$2,500+</p>
          <ul className="space-y-3 text-gray-400">
            <li>GSAP Scroll Storytelling</li>
            <li>Interactive Depth</li>
            <li>Advanced Motion</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        <div className="border border-neutral-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Signature</h3>
          <p className="text-4xl font-bold mb-6">$4,500+</p>
          <ul className="space-y-3 text-gray-400">
            <li>Three.js 3D Integration</li>
            <li>Full Storyboarding</li>
            <li>Custom Visual System</li>
            <li>Premium Support</li>
          </ul>
        </div>

      </div>
    </section>
  )
}