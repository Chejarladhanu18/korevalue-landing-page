import content from "../../content/content.json";
import Graph from "./Graph";
import FinOpsChart from "./FinOpsChart";
import SpendChart from "./SpendChart";

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

            {/* LEFT */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center lg:text-left">

              <h3 className="text-white text-[22px] sm:text-[28px] md:text-[40px] lg:text-[56px] font-semibold leading-tight">
                {card.title}
              </h3>

              <p className="text-[#7E7E7E] text-[14px] sm:text-[16px] md:text-[22px] lg:text-[28px] leading-relaxed max-w-full lg:max-w-[600px] mx-auto lg:mx-0">
                {card.description}
              </p>

            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-center lg:justify-end">

              <div className="
                w-full
                max-w-[100%] sm:max-w-[500px] lg:max-w-[700px]

                /* ❌ REMOVE FIXED HEIGHT */
                /* h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] */

                min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[400px]

                rounded-[30px] sm:rounded-[40px] lg:rounded-[63px]
                p-[2px]
                bg-[linear-gradient(135deg,#0F1800,#77B900)]
              ">

                <div className="
                  w-full h-full
                  rounded-[25px] sm:rounded-[30px] lg:rounded-[63px]
                  bg-[#131814]
                  p-3 sm:p-4 md:p-6

                  /* ❌ REMOVE CENTER */
                  /* flex flex-col justify-center */

                  flex flex-col justify-start

                  overflow-visible   /* 🔥 IMPORTANT */
                ">

                  {/* CHART */}
                  <div className="w-full h-auto">
                    {index === 0 ? (
                      <FinOpsChart />
                    ) : index === 1 ? (
                      <SpendChart />
                    ) : index === 2 ? (
                      <Graph />
                    ) : null}
                  </div>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}