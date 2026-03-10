import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Infrastructure from "./components/Infrastructure"
import VisibilitySection from "./components/VisibilitySection"
import DemoSection from "./components/DemoSection"
import KoreValueSection from "./components/KoreValueSection"
import GlobalBackground from "./components/GlobalBackground";

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">

      {/* GLOBAL BACKGROUND */}
      <GlobalBackground />

      <Navbar />

      <Hero />

      <Infrastructure />

      <VisibilitySection />

      <DemoSection />

      <KoreValueSection />

    </main>
  )
}

export default App