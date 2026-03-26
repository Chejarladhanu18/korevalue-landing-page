import content from "../../content/content.json";

export default function Hero() {
  const hero = content.hero;

  return (
    <section className="relative w-full overflow-hidden">

      <div className="relative z-10 flex flex-col items-center text-center 
        pt-[100px] md:pt-[140px] lg:pt-[180px] 
        pb-[20px] md:pb-[40px] lg:pb-[60px] 
        px-6 max-w-[1728px] mx-auto">

        {/* TITLE */}
        <h1 className="text-white font-semibold 
          text-[34px] md:text-[48px] lg:text-[65px] 
          leading-[110%] max-w-[1505px] tracking-tight">
          {hero.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white 
          text-[16px] md:text-[20px] lg:text-[24px] 
          mt-6 md:mt-8 lg:mt-10 
          max-w-[1271px] opacity-80 leading-relaxed">
          {hero.description}
        </p>

        {/* LAPTOP */}
        <div className="mt-10 md:mt-16 lg:mt-20 flex justify-center relative w-full">

          <img
            src="/ctrlslaptop.png"
            alt="dashboard laptop"
            className="
              relative z-10 
              w-[95%] md:w-[700px] lg:w-[1036px]
              laptop-float 
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]

              /* ✅ FIXED: no overlap on mobile */
              mb-0 md:-mb-[120px] lg:-mb-[180px]
            "
          />

          {/* SHADOW */}
          <div className="absolute bottom-[-10px] md:bottom-[-20px] 
            w-[70%] md:w-[700px] lg:w-[900px] 
            h-[50px] md:h-[70px] 
            bg-black/50 blur-2xl rounded-full">
          </div>

        </div>

      </div>

    </section>
  );
}