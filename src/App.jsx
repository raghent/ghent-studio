import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Why from "./sections/Why"
import Tech from "./sections/Tech"
import Work from "./sections/Work"
import Process from "./sections/Process"
import Pricing from "./sections/Pricing"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import Success from "./pages/Success"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <Tech />
      <Work />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
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