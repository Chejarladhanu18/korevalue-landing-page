import { useState, useEffect, useRef } from "react";
import content from "../../content/content.json";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const resourcesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const platformTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const companyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);


  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileGetStartedOpen, setMobileGetStartedOpen] = useState(false);

  const location = useLocation();
  const navbar = content.navbar;

  const resources = navbar.resourcesDropdown || [];
  const platformItems = content.koreValue?.platform?.items || [];
  const companyItems = navbar.companyDropdown || [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      case "pricing":
        return "/pricing";
      default:
        return "/";
      
    }
  };

  const menuOrder = ["Home", "Services", "Resources", "Platform", "Company","Pricing"];

  return (
    <nav
      className={`px-4 transition-all duration-500 relative z-[9999] isolate ${
        scrolled ? "sticky top-0" : ""
      }`}
    >
      <div
        className={`w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto border border-[#436900] rounded-[20px] shadow-[0_4px_23px_rgba(119,185,0,0.24)] transition-all duration-300 ${
          scrolled
            ? "bg-[#0F1800]/90 backdrop-blur-md"
            : "bg-[#0F1800] mt-6"
        }`}
      >
        <div className="px-4 md:px-6 lg:px-8 xl:px-6 2xl:px-10 relative">

          <div className="flex items-center justfy-between h-[70px] md:h-[85px] lg:h-[95px] x1:h-[105px]">

            {/* LEFT */}
            <div className="flex justify-start">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src="/CtrlS.png"
                  alt="logo"
                  className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] object-contain"
                />
              </Link>
            </div>

            {/* CENTER */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center gap-5 md:gap-7 lg:gap-9 xl:gap-12 2xl:gap-14">

                {menuOrder.map((item, index) => {
                  const path = getPath(item);
                  const isActive = location.pathname === path;

                  const MenuItem = (
                    <div className="relative group cursor-pointer">
                      <span
                        className={`text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px] font-medium transition ${
                          isActive
                            ? "text-[#9fdc00]"
                            : "text-[#77B900] hover:text-[#9fdc00]"
                        }`}
                      >
                        {item}
                      </span>

                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-[#9fdc00] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </div>
                  );

                 if (item === "Resources") {
  return (
    <div
      key={index}
      className="relative"
      onMouseEnter={() => {
        if (resourcesTimeout.current) clearTimeout(resourcesTimeout.current);
        setShowResources(true);
      }}
      onMouseLeave={() => {
        resourcesTimeout.current = setTimeout(() => {
          setShowResources(false);
        }, 300);
      }}
    >
      {MenuItem}

      {showResources && (
        <div
          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50"
          onMouseEnter={() => {
            if (resourcesTimeout.current) clearTimeout(resourcesTimeout.current);
          }}
          onMouseLeave={() => {
            resourcesTimeout.current = setTimeout(() => {
              setShowResources(false);
            }, 300);
          }}
        >
          <div className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#0F1800] to-[#77B900] shadow-[0_0_30px_rgba(119,185,0,0.25)]">
            
            <div className="w-[90vw] max-w-[550px] lg:max-w-[600px] min-h-[270px] bg-[#0F1800]/95 backdrop-blur-xl rounded-[20px] px-8 py-7">
              
              <div className="grid grid-cols-2 gap-y-10 gap-x-16">
                {resources.map((res, i) => (
                  <Link key={i} to={res.path}>
                    <div className="group cursor-pointer p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#77B900]/10 hover:shadow-[0_0_20px_rgba(119,185,0,0.15)]">
                      
                      <p className="text-[#9fdc00] font-semibold text-[18px] group-hover:text-[#baff2a]">
                        {res.title}
                      </p>

                      <p className="text-[14px] text-white/60 mt-1 group-hover:text-white/80">
                        {res.desc}
                      </p>

                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

                 if (item === "Platform") {
  return (
    <div
      key={index}
      className="relative"
      onMouseEnter={() => {
        if (platformTimeout.current) clearTimeout(platformTimeout.current);
        setShowPlatform(true);
      }}
      onMouseLeave={() => {
        platformTimeout.current = setTimeout(() => {
          setShowPlatform(false);
        }, 300);
      }}
    >
      {MenuItem}

      {showPlatform && (
        <div
          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50"
          onMouseEnter={() => {
            if (platformTimeout.current) clearTimeout(platformTimeout.current);
          }}
          onMouseLeave={() => {
            platformTimeout.current = setTimeout(() => {
              setShowPlatform(false);
            }, 300);
          }}
        >
          {/* OUTER GLOW */}
          <div className="p-[2px] rounded-[24px] bg-gradient-to-br from-[#0F1800] to-[#77B900] shadow-[0_0_40px_rgba(119,185,0,0.25)]">
            
            {/* RESPONSIVE BOX */}
            <div
              className="
                min-w-[320px]
                max-w-[90vw]
                lg:min-w-[360px]
                xl:min-w-[400px]
                2xl:min-w-[440px]
                bg-[#0F1800]/95
                backdrop-blur-xl
                rounded-[22px]
                px-5 lg:px-6
                py-5 lg:py-6
              "
            >
              
              <div className="flex flex-col gap-3 lg:gap-4">
                {platformItems.map((p, i) => (
                  <div
                    key={i}
                    className="
                      px-4 py-2 rounded-lg cursor-pointer
                      text-white/80
                      whitespace-nowrap
                      transition-all duration-300
                      hover:bg-[#77B900]/15
                    "
                  >
                    {p}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
                 if (item === "Company") {
  return (
    <div
      key={index}
      className="relative"
      onMouseEnter={() => {
        if (companyTimeout.current) clearTimeout(companyTimeout.current);
        setShowCompany(true);
      }}
      onMouseLeave={() => {
        companyTimeout.current = setTimeout(() => {
          setShowCompany(false);
        }, 300);
      }}
    >
      {MenuItem}

      {showCompany && (
        <div
          className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50"
          onMouseEnter={() => {
            if (companyTimeout.current) clearTimeout(companyTimeout.current);
          }}
          onMouseLeave={() => {
            companyTimeout.current = setTimeout(() => {
              setShowCompany(false);
            }, 300);
          }}
        >
          <div className="p-[2px] rounded-[22px] bg-gradient-to-br from-[#0F1800] to-[#77B900] shadow-[0_0_30px_rgba(119,185,0,0.25)]">
            
            <div className="w-[200px] md:w-[230px] lg:w-[260px] bg-[#0F1800]/95 backdrop-blur-xl rounded-[20px] p-4">
              
              <div className="flex flex-col gap-2">
                {companyItems.map((c, i) => (
                  <Link key={i} to={c.path}>
                    <div
                      className="
                        px-3 py-2 rounded-lg cursor-pointer
                        text-white/80 hover:text-[#9fdc00]
                        transition-all duration-300
                        hover:bg-[#77B900]/10
                      "
                    >
                      {c.title}
                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

                  return (
                    <Link key={index} to={path}>
                      {MenuItem}
                    </Link>
                  );
                })}

              </div>
            </div>

            
            {/* RIGHT */}
<div className="hidden lg:flex items-center gap-3 xl:gap-4 ml-auto pr-4 lg:pr-6 xl:pr-8">
  
  
    <div
  className="relative"
  onMouseEnter={() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowGetStarted(true);
  }}
  onMouseLeave={() => {
    timeoutRef.current = setTimeout(() => {
      setShowGetStarted(false);
    }, 300); //
  }}
>

    {/* BUTTON */}
    <button  className="
    px-5 py-2
    rounded-[12px]
    bg-[#77B900]
    text-black
    flex items-center justify-center gap-2
    font-medium
    min-w-[150px]
  "
>
  <span>Get Started</span>

  <span
    className={`transition-transform duration-300 flex items-center ${
      showGetStarted ? "rotate-180" : ""
    }`}
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </span>
    </button>

    {/* DROPDOWN */}
    {showGetStarted && (
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50">

        {/* OUTER BORDER */}
        <div className="p-[1.5px] rounded-[16px] bg-gradient-to-br from-[#77B900] to-[#0F1800] shadow-[0_0_30px_rgba(119,185,0,0.4)]">

          {/* INNER BOX */}
          <div className="bg-[#0F1800] rounded-[14px] py-3 flex flex-col gap-3 w-[170px]">

            <Link to="/signin">
              <div className="mx-3 border border-[#436900] text-[#77B900] text-center py-2 rounded-[10px] hover:bg-[#77B900]/10 transition">
                Sign in
              </div>
            </Link>

            <Link to="/signup">
              <div className="mx-3 border border-[#436900] text-[#77B900] text-center py-2 rounded-[10px] hover:bg-[#77B900]/10 transition">
                Sign up
              </div>
            </Link>

            <Link to="/demo">
              <div className="mx-3 border border-[#436900] text-[#77B900] text-center py-2 rounded-[10px] hover:bg-[#77B900]/10 transition">
                Get Demo
              </div>
            </Link>

            <Link to="/contact">
              <div className="mx-3 border border-[#436900] text-[#77B900] text-center py-2 rounded-[10px] hover:bg-[#77B900]/10 transition">
                Contact us
              </div>
            </Link>

          </div>
        </div>

      </div>
    )}
  </div>

</div>

            {/* MOBILE ICON */}
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

        {menuOpen && (
          <div className="lg:hidden w-full bg-[#0F1800] flex flex-col gap-4 py-6 px-4 border-t border-[#436900]">

            {menuOrder.map((item, index) => {
              const path = getPath(item);

              if (item === "Resources") {
                return (
                  <div key={index}>
                    <button
                      onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      className="w-full flex justify-between text-[#77B900]"
                    >
                      Resources
                      <span>{mobileResourcesOpen ? "−" : "⌄"}</span>
                    </button>

                    {mobileResourcesOpen && (
                      <div className="mt-3 ml-3 border-l border-[#436900] pl-3 flex flex-col gap-3">
                        {resources.map((res, i) => (
                          <Link key={i} to={res.path}>
                            <div className="group cursor-pointer p-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-[#77B900]/10">
                              <p className="text-[#9fdc00] text-sm group-hover:text-[#baff2a]">
                                {res.title}
                              </p>
                              <p className="text-white/60 text-xs">
                                {res.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item === "Platform") {
                return (
                  <div key={index}>
                    <button
                      onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                      className="w-full flex justify-between text-[#77B900]"
                    >
                      Platform
                      <span>{mobilePlatformOpen ? "−" : "⌄"}</span>
                    </button>

                    {mobilePlatformOpen && (
                      <div className="mt-3 ml-3 border-l border-[#436900] pl-3 flex flex-col gap-2">
                        {platformItems.map((p, i) => (
                          <div key={i} className="px-3 py-2 text-white/80">
                            {p}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item === "Company") {
                return (
                  <div key={index}>
                    <button
                      onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                      className="w-full flex justify-between text-[#77B900]"
                    >
                      Company
                      <span>{mobileCompanyOpen ? "−" : "⌄"}</span>
                    </button>

                    {mobileCompanyOpen && (
                      <div className="mt-3 ml-3 border-l border-[#436900] pl-3 flex flex-col gap-2">
                        {companyItems.map((c, i) => (
                          <Link key={i} to={c.path}>
                            <div className="px-3 py-2 text-white/80">
                              {c.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={index} to={path} className="text-[#77B900]">
                  {item}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 mt-4">
             
             

  {/* GET STARTED BUTTON */}
  <button
    onClick={() => setMobileGetStartedOpen(!mobileGetStartedOpen)}
  className="
    w-[180px]
    mx-auto
    h-[42px]
    rounded-[12px]
    bg-[#77B900]
    text-black
    flex items-center justify-center gap-2
    font-medium
    border-none
    outline-none
    focus:outline-none
    focus:ring-0
  "
>
  <span>Get Started</span>

  <span
    className={`transition-transform duration-300 flex items-center ${
      mobileGetStartedOpen ? "rotate-180" : ""
    }`}
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </span>
  </button>

  {/* DROPDOWN */}
  {mobileGetStartedOpen && (
    <div className="mt-2">

      {/* GLOW BORDER */}
      <div className="p-[1.5px] rounded-[16px] bg-gradient-to-br from-[#77B900] to-[#0F1800] shadow-[0_0_20px_rgba(119,185,0,0.35)]">

        {/* INNER BOX */}
        <div className="bg-[#0F1800] rounded-[14px] px-4 py-3 flex flex-col gap-3">

          <Link to="/signin">
            <div className="border border-[#436900] text-[#77B900] text-center py-2 rounded-[10px] hover:bg-[#77B900]/10 transition">
              Sign in
            </div>
          </Link>

          <Link to="/signup">
            <div className="border border-[#436900] text-[#77B900] text-center py-2 rounded-[10px] hover:bg-[#77B900]/10 transition">
              Sign up
            </div>
          </Link>

          <Link to="/demo">
            <div className="border border-[#436900] text-[#77B900] text-center py-2 rounded-[10px] hover:bg-[#77B900]/10 transition">
              Get Demo
            </div>
          </Link>

          <Link to="/contact">
            <div className="border border-[#436900] text-[#77B900] text-center py-2 rounded-[10px] hover:bg-[#77B900]/10 transition">
              Contact us
            </div>
          </Link>

        </div>
      </div>

    </div>
  )}

</div>
 
            </div>

          
        )}
      </div>
    </nav>
  );
};

export default Navbar;
