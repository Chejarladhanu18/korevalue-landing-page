import content from "../../content/content.json";

export default function KoreValueSection() {
  const data = content.koreValue;

  return (
    <section className="w-full flex justify-center">

      {/* 🔴 MOBILE VIEW */}
      <div className="w-full px-4 py-10 lg:hidden">

        {/* LOGO */}
        <img
          src="/KV Logo White 1.png"
          alt="logo"
          className="w-[200px] mb-8"
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* SERVICES */}
          <div>
            <h3 className="text-[#77B900] text-[18px] font-medium mb-2">
              {data.services.title}
            </h3>

            <div className="flex gap-6 text-[#7E7E7E] text-[14px] leading-[24px]">
              <div>
                {data.services.left.map((item: string, i: number) => (
                  <div key={i}>{item}</div>
                ))}
              </div>

              {/* keep words in single line */}
              <div className="whitespace-nowrap">
                {data.services.right.map((item: string, i: number) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* RESOURCE */}
          <div>
            <h3 className="text-[#77B900] text-[18px] font-medium mb-2">
              {data.resource.title}
            </h3>

            <div className="text-[#7E7E7E] text-[14px] leading-[24px]">
              {data.resource.items.map((item: string, i: number) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-[#77B900] text-[18px] font-medium mb-2">
              {data.company.title}
            </h3>

            <div className="text-[#7E7E7E] text-[14px] leading-[24px]">
              {data.company.items.map((item: string, i: number) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-[#77B900] text-[18px] font-medium mb-2">
              {data.platform.title}
            </h3>

            <div className="text-[#7E7E7E] text-[14px] leading-[24px]">
              {data.platform.items.map((item: string, i: number) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-[#77B900] my-8" />

        {/* FOLLOW */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#77B900] text-[16px]">
            {data.followText}
          </span>

          <img src="/Insta.svg" className="w-4" />
          <img src="/Linkedin.svg" className="w-4" />
          <img src="/twitter.svg" className="w-5" />
        </div>

        {/* COPYRIGHT */}
        <div className="text-[#7E7E7E] text-[12px] text-center">
          {data.copyright}
        </div>

      </div>

      {/* 🟢 DESKTOP VIEW (UNCHANGED) */}
      <div className="hidden lg:flex w-full justify-center overflow-visible">

        <div className="w-full flex justify-center">

          <div
            style={{
              transform: `scale(${
                typeof window !== "undefined"
                  ? Math.min(window.innerWidth / 1728, 1)
                  : 1
              })`,
              transformOrigin: "top center",
              width: "1728px"
            }}
          >

            <div className="relative w-[1728px] h-[650px]">

              {/* LOGO */}
              <img
                src="/KV Logo White 1.png"
                alt="logo"
                className="absolute"
                style={{
                  width: "392px",
                  height: "73px",
                  top: "43px",
                  left: "74px"
                }}
              />

              {/* SERVICES */}
              <div className="absolute" style={{ top: "133px", left: "74px" }}>
                <h3 className="text-[#77B900] text-[32px] font-medium">
                  {data.services.title}
                </h3>

                <div className="text-[#7E7E7E] text-[18px] mt-4 leading-[32px]">
                  {data.services.left.map((item: string, i: number) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>

                {/* FIX: prevent breaking */}
                <div
                  className="absolute text-[#7E7E7E] text-[18px] leading-[32px] w-[320px] whitespace-nowrap"
                  style={{ top: "48px", left: "240px" }}
                >
                  {data.services.right.map((item: string, i: number) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>

              {/* RESOURCE */}
              <div className="absolute" style={{ top: "133px", left: "577px" }}>
                <h3 className="text-[#77B900] text-[32px] font-medium">
                  {data.resource.title}
                </h3>

                <div className="text-[#7E7E7E] text-[18px] mt-4 leading-[32px]">
                  {data.resource.items.map((item: string, i: number) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>

              {/* COMPANY */}
              <div className="absolute" style={{ top: "125px", left: "791px" }}>
                <h3 className="text-[#77B900] text-[32px] font-medium">
                  {data.company.title}
                </h3>

                <div className="text-[#7E7E7E] text-[18px] mt-4 leading-[32px]">
                  {data.company.items.map((item: string, i: number) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>

              {/* PLATFORM */}
              <div className="absolute" style={{ top: "125px", left: "1016px" }}>
                <h3 className="text-[#77B900] text-[32px] font-medium">
                  {data.platform.title}
                </h3>

                <div className="text-[#7E7E7E] text-[18px] mt-4 leading-[32px]">
                  {data.platform.items.map((item: string, i: number) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>

              {/* LINE */}
              <div
                className="absolute w-[1728px] border-t-[3px] border-[#77B900]"
                style={{ top: "650px" }}
              />

              {/* FOLLOW */}
              <div
                className="absolute text-[#77B900] text-[22px]"
                style={{ top: "680px", left: "74px" }}
              >
                {data.followText}
              </div>

              {/* ICONS */}
              <img src="/Insta.svg" className="absolute" style={{ top: "684px", left: "229px", width: "20px" }} />
              <img src="/Linkedin.svg" className="absolute" style={{ top: "685px", left: "273px", width: "20px" }} />
              <img src="/twitter.svg" className="absolute" style={{ top: "686px", left: "313px", width: "22px" }} />

              {/* COPYRIGHT */}
              <div
                className="absolute text-center w-full text-[#7E7E7E] text-[14px]"
                style={{ top: "730px" }}
              >
                {data.copyright}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}