import Navbar from "./components/layout/Navbar";
import GlobalBackground from "./components/ui/GlobalBackground";

import Hero from "./components/sections/Hero";
import Infrastructure from "./components/sections/Infrastructure";
import VisibilitySection from "./components/sections/VisibilitySection";
import DemoSection from "./components/sections/DemoSection";
import KoreValueSection from "./components/sections/KoreValueSection";

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">

      <GlobalBackground />

      <Navbar />

      <Hero />

      <Infrastructure />

      <VisibilitySection />

      <DemoSection />

      <KoreValueSection />

    </main>
  );
}

export default App;