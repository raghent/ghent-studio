export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-neutral-800 py-16 px-8 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Ghent Studio
          </h3>
          <p className="max-w-sm">
            Modern portfolio websites crafted for creatives who want to stand apart.
          </p>
        </div>

        <div className="flex gap-10 md:justify-end">

          <div className="flex flex-col gap-3">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-sm text-gray-500">
        © {new Date().getFullYear()} Ghent Studio. All rights reserved.
      </div>

    </footer>
  )
}