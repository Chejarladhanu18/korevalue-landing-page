import content from "../../content/content.json";

export default function Hero() {
  const hero = content.hero
  return (
    <section className="relative w-full min-h-[900px] lg:min-h-[1200px] overflow-hidden">

      <div className="relative z-10 flex flex-col items-center text-center pt-[120px] md:pt-[160px] lg:pt-[200px] px-6 max-w-[1728px] mx-auto">

        <h1 className="text-white font-semibold text-[34px] md:text-[48px] lg:text-[65px] leading-[110%] max-w-[1505px] tracking-tight">
          {hero.title}
        </h1>

        <p className="text-white text-[16px] md:text-[20px] lg:text-[24px] mt-6 md:mt-8 lg:mt-10 max-w-[1271px] opacity-80 leading-relaxed">
          {hero.description}
        </p>

        <div className="mt-14 md:mt-20 lg:mt-28 flex justify-center relative w-full">

          <img
            src="/laptop_1.png"
            alt="dashboard laptop"
            className="relative z-10 w-[90%] md:w-[700px] lg:w-[1036px] laptop-float drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
          />

          <div className="absolute bottom-[-20px] md:bottom-[-30px] w-[70%] md:w-[700px] lg:w-[900px] h-[60px] md:h-[80px] bg-black/60 blur-3xl rounded-full"></div>

        </div>

      </div>

    </section>
  );
}