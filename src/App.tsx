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

      {/* GLOBAL BACKGROUND */}
      <GlobalBackground />

      <div className="relative z-10">

        <Navbar />

        <div className="pt-[90px] lg:pt-[133px]">

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <Hero />

                  <Infrastructure />

                  {/* 🔥 DIVIDER (ADDED HERE) */}
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[100px]" />
                  </div>

                  <VisibilitySection />

                  <DemoSection />

                  <KoreValueSection />
                </>
              }
            />

            {/* SERVICES */}
            <Route
              path="/services"
              element={
                <>
                  <ServicesSection />

                  {/* ✅ DIVIDER */}
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[100px]" />
                  </div>

                  <KoreValueSection />
                </>
              }
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;