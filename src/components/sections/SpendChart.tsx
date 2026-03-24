import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const months = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

export default function SpendChart() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setKey(p => p + 1), 5000);
    return () => clearInterval(i);
  }, []);

  const chartStart = 50;
  const chartEnd = 500;
  const step = (chartEnd - chartStart) / (months.length - 1);

  const points = months.map((_, i) => ({
    x: chartStart + i * step,
    y: 180 - i * 10
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaPath = `
    ${linePath}
    L ${points[points.length - 1].x} 180
    L ${points[0].x} 180
    Z
  `;

  return (
    <div className="w-full h-full flex flex-col justify-between">

      {/* TITLE */}
      <div>
        <div className="text-white text-xs sm:text-sm md:text-base font-medium">
          Spend Over Time
        </div>
        <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
          Current Time
        </div>
      </div>

      {/* CHART */}
      <div className="flex-1 rounded-2xl bg-[#020806] px-3 sm:px-4 py-3 flex flex-col justify-between">

        <svg
          viewBox="0 0 520 200"
          className="w-full h-[110px] sm:h-[140px] md:h-full"
        >

          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#134e4a" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#052e16" stopOpacity="0.35" />
            </linearGradient>

            <clipPath id="clip">
              <motion.rect
                key={key}
                x={chartStart}
                y="0"
                height="200"
                initial={{ width: 0 }}
                animate={{ width: chartEnd - chartStart }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </clipPath>
          </defs>

          {/* AXIS */}
          <g stroke="#6b7280" strokeWidth="1">
            <line x1={chartStart} y1="20" x2={chartStart} y2="180" />
            <line x1={chartStart} y1="180" x2={chartEnd} y2="180" />
          </g>

          {/* Y LABELS */}
          {[0,50,100,150,200].map((v,i)=>{
            const y = 180 - (v/200)*160;
            return (
              <text
                key={i}
                x="8"
                y={y+4}
                className="text-[8px] sm:text-[10px]"
                fill="#9ca3af"
              >
                ${v}M
              </text>
            );
          })}

          {/* AREA */}
          <path
            d={areaPath}
            fill="url(#areaGradient)"
            clipPath="url(#clip)"
          />

          {/* LINE */}
          <motion.path
            key={key+"-line"}
            d={linePath}
            fill="none"
            stroke="#84cc16"
            strokeWidth="2"
            className="sm:stroke-[2.5]"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

        </svg>

        {/* MONTHS */}
        <div className="mt-2">
          <div className="relative h-[28px] sm:h-[34px]">

            {points.map((p, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${(p.x / 520) * 100}%`,
                  transform: "translateX(-50%)",
                }}
                className="text-center leading-tight"
              >
                <div className="text-[8px] sm:text-[11px] text-gray-300">
                  {months[i]}
                </div>
                <div className="text-[7px] sm:text-[10px] text-gray-500">
                  FY26
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* LEGEND */}
      <div className="
        flex flex-wrap justify-center items-center
        gap-3 sm:gap-6
        mt-3 sm:mt-4
        text-[9px] sm:text-[11px]
        text-gray-400
      ">

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-2 h-2 bg-[#1e3a8a]" />
          <span>Actual</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-2 h-2 bg-[#134e4a]" />
          <span>Estimate</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-4 sm:w-5 h-[2px] bg-[#84cc16]" />
          <span>Forecast</span>
        </div>

      </div>

    </div>
  );
}