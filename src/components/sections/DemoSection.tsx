import content from "../../content/content.json";

export default function DemoSection() {
  const demo = content.demo

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="w-full flex justify-center">

      {/* DESKTOP */}

      <div
        className="hidden lg:block relative w-[1728px] h-[1117px] border-[8px] border-transparent"
        style={{
          borderImage: "linear-gradient(180deg,#283E00,#182500) 1"
        }}
      >

        <div className="absolute left-[77px] top-[150px]">
          <p className="text-white text-[36px] font-semibold">
            {demo.heading}
          </p>
        </div>

        <div className="absolute left-[74px] top-[250px] w-[695px]">
          <h1 className="text-[#77B900] text-[72px] font-semibold leading-[100px]">
            {demo.title}
          </h1>
        </div>

        <div className="absolute left-[77px] top-[740px] w-[704px]">
          <p className="text-white text-[16px] font-medium leading-[44px]">
            {demo.description}
          </p>
        </div>

        <div className="absolute left-[791px] top-[160px]">

          <div className="relative w-[445px] h-[652px]">

            <div
              className="
              relative
              w-[445px]
              h-[662px]
              rounded-[30px]
              border-2
              border-[#283E00]
              p-[40px]
              flex flex-col
              "
            >

              <h2 className="text-white text-[32px] font-medium mb-[30px]">
                {demo.form.title}
              </h2>

              <div className="mb-[22px]">
                <label className="text-white text-[16px]">
                  {demo.form.name} <span className="text-[#77B900]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-[#A6ADB3] outline-none focus:border-[#77B900]"
                />
              </div>

              <div className="mb-[22px]">
                <label className="text-white text-[16px]">
                  {demo.form.email} <span className="text-[#77B900]">*</span>
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-[#A6ADB3] outline-none focus:border-[#77B900]"
                />
              </div>

              <div className="mb-[22px]">
                <label className="text-white text-[16px]">
                  {demo.form.organization} <span className="text-[#77B900]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-[#A6ADB3] outline-none focus:border-[#77B900]"
                />
              </div>

              <div className="mb-[40px]">
                <label className="text-white text-[16px]">
                  {demo.form.source} <span className="text-[#77B900]">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Referral, Social Media, etc."
                  className="w-[370px] h-[61px] bg-[#0F180F] border border-[#2E5A00] rounded-[18px] mt-[8px] px-[18px] text-[#A6ADB3] outline-none focus:border-[#77B900]"
                />
              </div>

              <div className="w-full flex justify-end">
                <button
                  onClick={scrollToTop}
                  className="w-[136px] h-[48px] bg-[#77B900] rounded-[11px] text-[#131814] text-[20px] font-medium"
                >
                  {demo.form.submit}
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* MOBILE */}

      <div className="lg:hidden w-full px-6 py-16">

        <p className="text-white text-[20px] font-semibold mb-4">
          {demo.heading}
        </p>

        <h1 className="text-[#77B900] text-[36px] font-semibold leading-[46px] mb-6">
          {demo.title}
        </h1>

        <p className="text-white text-[14px] leading-[26px] mb-10">
          {demo.description}
        </p>

        <div className="relative max-w-[420px] mx-auto">

          <div className="relative rounded-[30px] border-2 border-[#283E00] p-[30px]">

            <h2 className="text-white text-[26px] font-medium mb-6">
              {demo.form.title}
            </h2>

            {[
              { label: demo.form.name, placeholder: "Your Name" },
              { label: demo.form.email, placeholder: "your@email.com" },
              { label: demo.form.organization, placeholder: "Company Name" },
              { label: demo.form.source, placeholder: "Referral, Social Media, etc." }
            ].map((item, i) => (
              <div key={i} className="mb-5">
                <label className="text-white text-[14px]">
                  {item.label} <span className="text-[#77B900]">*</span>
                </label>

                <input
                  placeholder={item.placeholder}
                  className="w-full h-[55px] bg-[#0F180F] border border-[#2E5A00] rounded-[16px] mt-2 px-[14px] text-[#A6ADB3] outline-none focus:border-[#77B900]"
                />
              </div>
            ))}

            <div className="flex justify-end">
              <button
                onClick={scrollToTop}
                className="w-[120px] h-[44px] bg-[#77B900] rounded-[10px] text-[#131814] text-[16px] font-medium"
              >
                {demo.form.submit}
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}