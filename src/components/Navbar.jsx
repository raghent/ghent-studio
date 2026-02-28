export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50 bg-black/40 backdrop-blur-md">
      <div className="text-lg font-semibold">
        Ghent Studio
      </div>

      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#pricing" className="hover:text-white transition">Pricing</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </nav>
  )
}