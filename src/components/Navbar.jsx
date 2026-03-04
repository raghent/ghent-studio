export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-4 flex justify-between items-center">

        <div className="text-lg font-semibold tracking-wide">
          Ghent Studio
        </div>

        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#work" className="hover:text-white transition">
            Work
          </a>

          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}