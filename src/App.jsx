import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Story from "./sections/Story"
import Work from "./sections/Work"
import Services from "./sections/Services"
import Pricing from "./sections/Pricing"
import Process from "./sections/Process"
import Contact from "./sections/Contact"
import { Routes, Route } from "react-router-dom"
import Success from "./pages/Success"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Work />
      <Services />
      <Pricing />
      <Process />
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

