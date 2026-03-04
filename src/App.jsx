import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import AmbientGlow from "./components/AmbientGlow"
import Hero from "./sections/Hero"
import Audience from "./sections/Audience"
import Why from "./sections/Why"
import Tech from "./sections/Tech"
import Work from "./sections/Work"
import Process from "./sections/Process"
import Pricing from "./sections/Pricing"
import Audit from "./sections/Audit"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import Success from "./pages/Success"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Audience />
      <Why />
      <Tech />
      <Work />
      <Process />
      <Pricing />
      <Audit />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className="bg-black text-white">

      <AmbientGlow />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  )
}