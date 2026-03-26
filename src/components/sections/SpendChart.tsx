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

  // 🔥 SPLIT INDEX (June → July)
  const splitIndex = 6;

  const leftPoints = points.slice(0, splitIndex);
  const rightPoints = points.slice(splitIndex - 1);

  const buildPath = (pts: any[]) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  const buildArea = (pts: any[]) => `
    ${buildPath(pts)}
    L ${pts[pts.length - 1].x} 180
    L ${pts[0].x} 180
    Z
  `;

  const linePath = buildPath(points);

  return (
    <div className="w-full h-full flex flex-col justify-between">

      {/* TITLE */}
      <div>
        <div className="text-white text-sm font-medium">
          Spend Over Time
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Current Time
        </div>
      </div>

      {/* CHART */}
      <div className="flex-1 rounded-2xl bg-[#020806] px-4 py-3 flex flex-col justify-between">

        <svg viewBox="0 0 520 200" className="w-full h-full">

          <defs>
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
          <g stroke="#14532d" strokeWidth="1">
            <line x1={chartStart} y1="20" x2={chartStart} y2="180" />
            <line x1={chartStart} y1="180" x2={chartEnd} y2="180" />
          </g>

          {/* Y LABELS */}
          {[0,50,100,150,200].map((v,i)=>{
            const y = 180 - (v/200)*160;
            return (
              <text key={i} x="8" y={y+4} fill="#9ca3af" className="text-[10px]">
                ${v}M
              </text>
            );
          })}

          {/* 🔵 LEFT AREA (Actual) */}
          <path
            d={buildArea(leftPoints)}
            fill="#0f3d3e"
            opacity="0.7"
            clipPath="url(#clip)"
          />

          {/* 🟢 RIGHT AREA (Estimate) */}
          <path
            d={buildArea(rightPoints)}
            fill="#065f46"
            opacity="0.8"
            clipPath="url(#clip)"
          />

          {/* 🔥 FORECAST LINE */}
          <motion.path
            key={key+"-line"}
            d={linePath}
            fill="none"
            stroke="#84cc16"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

        </svg>

        {/* MONTHS */}
        <div className="mt-2 relative h-[30px]">
          {points.map((p, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${(p.x / 520) * 100}%`,
                transform: "translateX(-50%)",
              }}
              className="text-center"
            >
              <div className="text-[11px] text-gray-300">{months[i]}</div>
              <div className="text-[10px] text-gray-500">FY26</div>
            </div>
          ))}
        </div>

      </div>

      {/* LEGEND */}
      <div className="flex justify-center gap-6 mt-4 text-[11px] text-gray-400">

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#0f3d3e]" />
          <span>Actual</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#065f46]" />
          <span>Estimate</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-[2px] bg-[#84cc16]" />
          <span>Forecast</span>
        </div>

      </div>

    </div>
  );
}