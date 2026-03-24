import { useState } from "react";
import content from "../../content/content.json";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navbar = content.navbar;

  const getPath = (item: string) => {
    switch (item.toLowerCase()) {
      case "home":
        return "/";
      case "services":
        return "/services";
      case "platform":
        return "/platform";
      case "resource":
      case "resources":
        return "/resources";
      case "company":
        return "/company";
      default:
        return "/";
    }
  };

  const menuOrder = ["Home", "Services", "Resources", "Platform", "Company"];

  return (
    <nav className="w-full bg-[#0F1800] border-b border-[#436900] shadow-[0_4px_23px_rgba(119,185,0,0.24)] relative">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-0 relative">

        <div className="grid grid-cols-3 items-center h-[80px] lg:h-[110px]">

          {/* LEFT - LOGO */}
          <div className="flex justify-start">
            <Link
              to="/"
              className="
                flex items-center justify-center
                w-[150px] sm:w-[180px] lg:w-[240px]
                h-[44px] lg:h-[56px]
                rounded-[11px]
                border border-[#436900]
                bg-[#131814]
              "
            >
              <img
                src="/logo.png"
                alt="logo"
                className="w-[130px] sm:w-[160px] lg:w-[200px] object-contain"
              />
            </Link>
          </div>

          {/* CENTER MENU */}
          <div className="hidden lg:flex justify-center">
            <div className="flex items-center gap-6 xl:gap-10">
              {menuOrder.map((item, index) => {
                const path = getPath(item);
                const isActive = location.pathname === path;

                return (
                  <Link
                    key={index}
                    to={path}
                    className={`
                      relative
                      text-[16px] xl:text-[18px]
                      font-medium whitespace-nowrap transition
                      ${
                        isActive
                          ? "text-[#9fdc00]"
                          : "text-[#77B900] hover:text-[#9fdc00]"
                      }
                    `}
                    style={{ fontFamily: "Poppins" }}
                  >
                    {item}

                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#9fdc00]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT BUTTONS (DESKTOP) */}
          <div className="hidden lg:flex justify-end items-center gap-3 xl:gap-4">
            <button className="px-4 lg:px-6 h-[38px] lg:h-[44px] text-[14px] lg:text-[16px] rounded-[11px] border border-[#436900] bg-[#131814] text-[#77B900] hover:bg-[#1a1f1a] transition">
              {navbar.buttons.contact}
            </button>

            <button className="px-4 lg:px-6 h-[38px] lg:h-[44px] text-[14px] lg:text-[16px] rounded-[11px] bg-[#77B900] text-black shadow-[0_0_20px_rgba(119,185,0,0.6)] hover:bg-[#8fd600] transition">
              {navbar.buttons.login}
            </button>
          </div>

          {/* 🔥 MOBILE HAMBURGER (FIXED TO EDGE) */}
          <div className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#77B900] text-3xl"
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-[#0F1800] flex flex-col items-center gap-5 py-6 border-t border-[#436900]">

          {menuOrder.map((item, index) => {
            const path = getPath(item);

            return (
              <Link
                key={index}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="text-[#77B900] text-base"
              >
                {item}
              </Link>
            );
          })}

          <button className="w-[160px] h-[42px] border border-[#436900] bg-[#131814] text-[#77B900] rounded-lg">
            {navbar.buttons.contact}
          </button>

          <button className="w-[160px] h-[42px] bg-[#77B900] text-black rounded-lg">
            {navbar.buttons.login}
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;