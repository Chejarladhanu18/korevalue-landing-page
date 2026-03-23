import content from "../../content/content.json";
import Graph from "./Graph";

export default function Infrastructure() {
  const cards = content.infrastructure.cards;

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-[1400px]">

        {cards.map((card, index) => (
          <div
            key={index}
            className="
              grid grid-cols-1 lg:grid-cols-2
              items-center
              gap-8 sm:gap-10 lg:gap-20
              mb-16 sm:mb-20 lg:mb-32
            "
          >

            {/* 🔹 LEFT CONTENT */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center lg:text-left">

              <h3 className="
                text-white
                text-[22px] sm:text-[28px] md:text-[40px] lg:text-[56px]
                font-semibold
                leading-tight
              ">
                {card.title}
              </h3>

              <p className="
                text-[#7E7E7E]
                text-[14px] sm:text-[16px] md:text-[22px] lg:text-[28px]
                leading-relaxed
                max-w-full lg:max-w-[600px]
                mx-auto lg:mx-0
              ">
                {card.description}
              </p>

            </div>

            {/* 🔹 RIGHT CARD */}
            <div className="flex justify-center lg:justify-end">

              <div className="
                w-full
                max-w-[100%] sm:max-w-[500px] lg:max-w-[700px]
                h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]
                rounded-[30px] sm:rounded-[40px] lg:rounded-[63px]
                p-[2px]
                bg-[linear-gradient(135deg,#0F1800,#77B900)]
              ">

                {/* Card Content */}
                <div className="
                  w-full h-full
                  rounded-[25px] sm:rounded-[30px] lg:rounded-[63px]
                  bg-[#131814]
                  p-3 sm:p-4 md:p-6
                  flex items-center justify-center
                ">

                  {index === 2 ? (
                    <Graph />
                  ) : (
                    <div className="w-full h-full relative overflow-hidden">

                      {/* 🔥 KEEP EXACT VALUES (unchanged) */}
                      <img
                        src={index === 0 ? "/card1.svg" : "/card2.svg"}
                        alt="card"
                        className="
                          absolute
                          top-[55%]
                          left-[50%]
                          translate-x-[-50%]
                          translate-y-[-50%]
                          w-[111%]
                          h-auto
                          max-w-none
                        "
                      />

                    </div>
                  )}

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}