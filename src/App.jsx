import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Why from "./sections/Why"
import Work from "./sections/Work"
import Pricing from "./sections/Pricing"
import Contact from "./sections/Contact"
import Success from "./pages/Success"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <Work />
      <Pricing />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <div className="bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  )
}