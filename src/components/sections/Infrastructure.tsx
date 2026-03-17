import content from "../../content/content.json";

export default function Infrastructure() {
  const infrastructure = content.infrastructure
  return (
    <section className="w-full overflow-hidden flex justify-center">

      <div className="relative w-[1728px] lg:min-h-[950px] max-lg:w-full max-lg:min-h-[800px]">

        <div className="max-lg:hidden">

          <div className="absolute left-1/2 -translate-x-1/2 top-[120px] w-[1057px] text-center z-[40]">
            <h2 className="text-white font-semibold text-[50px] leading-[100%]">
              {infrastructure.title}
            </h2>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-[210px] w-[1220px] text-center z-[40]">
            <p className="text-[#7E7E7E] text-[30px] leading-[100%] tracking-[0.05em]">
              {infrastructure.description}
            </p>
          </div>

          <img
            src="/mockup.png"
            alt="dashboard mockup"
            className="absolute w-[1730px] h-[1118px] left-[5px] top-[64px] object-contain z-[10]"
          />

          <div className="absolute left-1/2 -translate-x-1/2 bottom-[0px] w-[1100px] text-center z-[30]">
            <p className="text-white text-[22px] leading-[100%] tracking-[0.07em]">
              {infrastructure.footerText}
            </p>
          </div>

        </div>

        <div className="lg:hidden flex flex-col items-center text-center px-6 pt-16">

          <h2 className="text-white font-semibold text-[30px] leading-[120%]">
            {infrastructure.title}
          </h2>

          <p className="text-[#7E7E7E] text-[16px] leading-[150%] mt-5">
            {infrastructure.description}
          </p>

          <img
            src="/mockup.png"
            alt="dashboard mockup"
            className="w-[120%] mt-40"
          />

          <p className="text-white text-[14px] leading-[140%] mt-4 px-2">
            {infrastructure.footerText}
          </p>

        </div>

      </div>

    </section>
  )
}