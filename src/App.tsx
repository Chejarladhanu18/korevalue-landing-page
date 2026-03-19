import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import GlobalBackground from "./components/ui/GlobalBackground";

import Hero from "./components/sections/Hero";
import Infrastructure from "./components/sections/Infrastructure";
import VisibilitySection from "./components/sections/VisibilitySection";
import DemoSection from "./components/sections/DemoSection";
import KoreValueSection from "./components/sections/KoreValueSection";

import ServicesSection from "./components/sections/ServicesSection";

function App() {
  return (
    <BrowserRouter>
      <GlobalBackground />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Infrastructure />
              <VisibilitySection />
              <DemoSection />
              <KoreValueSection />
            </>
          }
        />

        <Route path="/services" element={<ServicesSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;