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
        return "/resources";
      case "company":
        return "/company";
      default:
        return "/";
    }
  };

  return (
    <nav className="w-full bg-[#0F1800] border-b border-[#436900] shadow-[0_4px_23px_rgba(119,185,0,0.24)]">

      <div className="flex items-center justify-between h-[90px] lg:h-[133px] px-4 md:px-6 lg:px-8 xl:px-12">

        {/* 🔹 LEFT - LOGO */}
        <Link
          to="/"
          className="flex items-center justify-center
          w-[180px] md:w-[220px] lg:w-[298px]
          h-[50px] lg:h-[59px]
          rounded-[11px] border border-[#436900] bg-[#131814]"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-[160px] md:w-[200px] lg:w-[274px] object-contain"
          />
        </Link>

        {/* 🔹 CENTER MENU */}
        <div className="hidden lg:flex flex-1 justify-center">

          <div className="flex items-center gap-[4px] xl:gap-[6px]">

            {navbar.menu.map((item: string, index: number) => {
              const path = getPath(item);
              const isActive = location.pathname === path;

              return (
                <Link
                  key={index}
                  to={path}
                  className={`
                    w-[90px] xl:w-[116px]
                    h-[36px]
                    flex items-center justify-center
                    text-[16px] xl:text-[20px]
                    font-medium
                    whitespace-nowrap
                    transition
                    ${
                      isActive
                        ? "text-[#9fdc00]"
                        : "text-[#77B900] hover:text-[#9fdc00]"
                    }
                  `}
                  style={{ fontFamily: "Poppins" }}
                >
                  {item}
                </Link>
              );
            })}

          </div>

        </div>

        {/* 🔹 RIGHT BUTTONS */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">

          <button
            className="
            px-4 xl:w-[176px]
            h-[40px] xl:h-[48px]
            text-[14px] xl:text-[20px]
            rounded-[11px]
            border border-[#436900]
            bg-[#131814] text-[#77B900]
            flex items-center justify-center
            whitespace-nowrap
            hover:bg-[#1a1f1a] transition
          "
          >
            {navbar.buttons.contact}
          </button>

          <button
            className="
            px-4 xl:w-[176px]
            h-[40px] xl:h-[48px]
            text-[14px] xl:text-[20px]
            rounded-[11px]
            bg-[#77B900] text-black
            flex items-center justify-center
            whitespace-nowrap
            shadow-[0_0_23px_rgba(119,185,0,0.65)]
            hover:bg-[#8fd600] transition
          "
          >
            {navbar.buttons.login}
          </button>

        </div>

        {/* 🔹 MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#77B900] text-3xl"
        >
          ☰
        </button>
      </div>

      {/* 🔹 MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-[#0F1800] flex flex-col items-center gap-6 py-6 border-t border-[#436900]">

          {navbar.menu.map((item: string, index: number) => {
            const path = getPath(item);

            return (
              <Link
                key={index}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="text-[#77B900] text-lg"
              >
                {item}
              </Link>
            );
          })}

          <button className="w-[160px] h-[44px] border border-[#436900] bg-[#131814] text-[#77B900] rounded-lg">
            {navbar.buttons.contact}
          </button>

          <button className="w-[160px] h-[44px] bg-[#77B900] text-black rounded-lg">
            {navbar.buttons.login}
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;