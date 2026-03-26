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

      <div className="relative min-h-screen">

        {/* BACKGROUND */}
        <GlobalBackground />

        {/* CONTENT */}
        <div className="relative z-10">

          <Navbar />

          <main>
            <Routes>

              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Infrastructure />

                    <div className="w-full flex justify-center">
                      <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[100px]" />
                    </div>

                    <VisibilitySection />
                    <DemoSection />
                    <KoreValueSection />
                  </>
                }
              />

              <Route
                path="/services"
                element={
                  <>
                    <ServicesSection />

                    <div className="w-full flex justify-center">
                      <div className="w-full max-w-[1400px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/40 to-transparent my-[100px]" />
                    </div>

                    <KoreValueSection />
                  </>
                }
              />

            </Routes>
          </main>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;