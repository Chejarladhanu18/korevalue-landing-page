export default function DemoSection() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="w-full flex justify-center">

      {/* ================= DESKTOP ================= */}

      <div
        className="hidden lg:block relative w-[1728px] h-[1117px] border-[5px] border-transparent"
        style={{
          borderImage: "linear-gradient(180deg,#283E00,#182500) 1"
        }}
      >

        {/* HEADING */}
        <div className="absolute left-[77px] top-[150px]">
          <p className="text-white text-[36px] font-semibold">
            NO RISK PROOF OF VALUE
          </p>
        </div>

        {/* TITLE */}
        <div className="absolute left-[74px] top-[250px] w-[695px]">
          <h1 className="text-[#77B900] text-[72px] font-semibold leading-[100px]">
            Start controlling your AI and Hybrid Environment Costs.
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="absolute left-[77px] top-[740px] w-[704px]">
          <p className="text-white text-[16px] font-medium leading-[44px]">
            Monitor every expense across cloud, on-premise systems, AI and SaaS
            through a single platform. Avoid unexpected costs with real-time cost
            distribution, anomaly monitoring and predictive forecasting.
            Streamline cost management using chargebacks, spending guardrails,
            and AI-powered insights.
          </p>
        </div>

        {/* FORM AREA */}
        <div className="absolute left-[791px] top-[160px]">

          <div className="relative w-[445px] h-[652px]">

            {/* LEFT GLOW */}
            <div className="absolute left-[-40px] top-[60px] w-[120px] h-[500px] bg-[#77B900] opacity-20 blur-[90px] rounded-full"></div>

            {/* BOTTOM GLOW */}
            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[420px] h-[140px] bg-[#77B900] opacity-20 blur-[90px] rounded-full"></div>

            {/* FORM CARD */}
            <div
              className="
              relative
              w-[445px]
              h-[662px]
              rounded-[30px]
              border
              border-[#283E00]
              p-[40px]
              flex flex-col
              "
            >

              <h2 className="text-white text-[32px] font-medium mb-[30px]">
                Request a Demo
              </h2>

              {/* NAME */}
              <div className="mb-[22px]">
                <label className="text-white text-[16px]">
                  Name <span className="text-[#77B900]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-[#A6ADB3] placeholder-[#7E868C] outline-none focus:border-[#77B900] focus:shadow-[0_0_12px_rgba(119,185,0,0.6)]"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-[22px]">
                <label className="text-white text-[16px]">
                  E-Mail <span className="text-[#77B900]">*</span>
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-[#A6ADB3] placeholder-[#7E868C] outline-none focus:border-[#77B900] focus:shadow-[0_0_12px_rgba(119,185,0,0.6)]"
                />
              </div>

              {/* ORGANIZATION */}
              <div className="mb-[22px]">
                <label className="text-white text-[16px]">
                  Organization Name <span className="text-[#77B900]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-[#A6ADB3] placeholder-[#7E868C] outline-none focus:border-[#77B900] focus:shadow-[0_0_12px_rgba(119,185,0,0.6)]"
                />
              </div>

              {/* SOURCE */}
              <div className="mb-[40px]">
                <label className="text-white text-[16px]">
                  How you Know about us? <span className="text-[#77B900]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Referral, Social Media, etc."
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-[#A6ADB3] placeholder-[#7E868C] outline-none focus:border-[#77B900] focus:shadow-[0_0_12px_rgba(119,185,0,0.6)]"
                />
              </div>

              {/* BUTTON */}
              <div className="w-full flex justify-end">
                <button
                  onClick={scrollToTop}
                  className="w-[136px] h-[48px] bg-[#77B900] rounded-[11px] text-[#131814] text-[20px] font-medium shadow-[0_0_30px_rgba(119,185,0,0.7)]"
                >
                  Submit
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ================= MOBILE ================= */}

      <div className="lg:hidden w-full px-6 py-16">

        <p className="text-white text-[20px] font-semibold mb-4">
          NO RISK PROOF OF VALUE
        </p>

        <h1 className="text-[#77B900] text-[36px] font-semibold leading-[46px] mb-6">
          Start controlling your AI and Hybrid Environment Costs.
        </h1>

        <p className="text-white text-[14px] leading-[26px] mb-10">
          Monitor every expense across cloud, on-premise systems, AI and SaaS
          through a single platform.
        </p>

        {/* MOBILE FORM */}
        <div className="relative max-w-[420px] mx-auto">

          {/* LEFT GLOW */}
          <div className="absolute left-[-30px] top-[100px] w-[90px] h-[420px] bg-[#77B900] opacity-25 blur-[70px] rounded-full"></div>

          {/* BOTTOM GLOW */}
          <div className="absolute bottom-[-45px] left-1/2 -translate-x-1/2 w-[340px] h-[120px] bg-[#77B900] opacity-25 blur-[75px] rounded-full"></div>

          <div className="relative rounded-[30px] border border-[#283E00] p-[30px]">

            <h2 className="text-white text-[26px] font-medium mb-6">
              Request a Demo
            </h2>

            {[
              {label:"Name",placeholder:"Your Name"},
              {label:"E-Mail",placeholder:"your@email.com"},
              {label:"Organization Name",placeholder:"Company Name"},
              {label:"How you Know about us?",placeholder:"Referral, Social Media, etc."}
            ].map((item,i)=>(
              <div key={i} className="mb-5">
                <label className="text-white text-[14px]">
                  {item.label} <span className="text-[#77B900]">*</span>
                </label>

                <input
                  placeholder={item.placeholder}
                  className="w-full h-[55px] bg-[#0F180F] border border-[#2E5A00] rounded-[16px] mt-2 px-[14px] text-[#A6ADB3] placeholder-[#7E868C] outline-none focus:border-[#77B900] focus:shadow-[0_0_10px_rgba(119,185,0,0.6)]"
                />
              </div>
            ))}

            <div className="flex justify-end">
              <button
                onClick={scrollToTop}
                className="w-[120px] h-[44px] bg-[#77B900] rounded-[10px] text-[#131814] text-[16px] font-medium shadow-[0_0_25px_rgba(119,185,0,0.7)]"
              >
                Submit
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}