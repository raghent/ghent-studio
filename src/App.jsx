import Hero from "./sections/Hero"
import Story from "./sections/Story"
import Services from "./sections/Services"
import Pricing from "./sections/Pricing"
import Process from "./sections/Process"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Story />
      <Services />
      <Pricing />
      <Process />
      <Contact />
    </div>
  )
}

export default App