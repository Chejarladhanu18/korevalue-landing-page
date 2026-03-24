import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

/* CONFIG */
const W = 580;
const H = 200;
const POINTS = 24;
const DIVIDER = 10;

/* DATA */
const A = [72,75,74,70,66,68,72,74,73,70,65,60,55,52,50,48,50,52,54,55,53,52,51,50];
const R = [20,18,22,24,23,25,27,26,28,29,30,32,34,33,30,28,30,32,33,34,35,36,37,38];

/* HELPERS */
const x = (i:number)=> (i/(POINTS-1))*W;
const y = (v:number)=> H-(v/100)*H;

/* CURVE */
function curve(data:number[], vis:number){
  let d=`M ${x(0)} ${y(data[0])}`;
  for(let i=1;i<vis;i++){
    const xc=(x(i-1)+x(i))/2;
    d+=` Q ${x(i-1)} ${y(data[i-1])} ${xc} ${(y(data[i-1])+y(data[i]))/2}`;
  }
  return d;
}

function getY(data:number[], progress:number){
  const i = progress * (POINTS - 1);
  const i0 = Math.floor(i);
  const i1 = Math.min(i0 + 1, POINTS - 1);
  const t = i - i0;
  return y(data[i0] * (1 - t) + data[i1] * t);
}

export default function KubexChart(){

  const [p,setP]=useState(0);
  const [loop,setLoop]=useState(0);
  const raf=useRef(0);

  useEffect(()=>{
    const start=performance.now();
    const dur=3000;

    const run=(t:number)=>{
      const k=Math.min((t-start)/dur,1);
      const e=k<0.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
      setP(e);

      if(k<1){
        raf.current=requestAnimationFrame(run);
      } else {
        setTimeout(()=>setLoop(v=>v+1),1200);
      }
    };

    raf.current=requestAnimationFrame(run);
    return()=>cancelAnimationFrame(raf.current);
  },[loop]);

  const vis=Math.max(2,Math.floor(p*POINTS));

  const pathA=curve(A,vis);
  const pathR=curve(R,vis);

  const dividerX = x(DIVIDER);

  /* 🔥 SHOW DIVIDER ONLY AFTER REACH */
  const showDivider = p * (POINTS - 1) >= DIVIDER;

  /* AREAS */
  const leftArea = (() => {
    let top = "";
    let bottom = "";

    for (let i = 0; i <= Math.min(DIVIDER, vis - 1); i++) {
      top += `${i === 0 ? "M" : "L"} ${x(i)} ${y(A[i])} `;
    }

    for (let i = Math.min(DIVIDER, vis - 1); i >= 0; i--) {
      bottom += `L ${x(i)} ${y(R[i])} `;
    }

    return `${top} ${bottom} Z`;
  })();

  const rightArea = (() => {
    if (vis <= DIVIDER) return "";

    let top = "";
    let bottom = "";

    for (let i = DIVIDER; i < vis; i++) {
      top += `${i === DIVIDER ? "M" : "L"} ${x(i)} ${y(A[i])} `;
    }

    for (let i = vis - 1; i >= DIVIDER; i--) {
      bottom += `L ${x(i)} ${y(R[i])} `;
    }

    return `${top} ${bottom} Z`;
  })();

  const dotX = p * W;
  const dotYA = getY(A, p);
  const dotYR = getY(R, p);

  const avgA=A.reduce((a,b)=>a+b,0)/POINTS;
  const avgR=R.reduce((a,b)=>a+b,0)/POINTS;
  const waste=Math.round(((avgA-avgR)/avgA)*100);

  return (
    <div className="w-full flex flex-col overflow-visible pb-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-3 px-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-[#84CC16] rounded-full shadow-[0_0_10px_#84CC16]" />
          <span className="font-mono text-xs sm:text-lg font-semibold">
            KoreValue
          </span>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-gray-400">Waste</span><br/>
          <span className="text-sm sm:text-2xl text-[#84CC16] font-bold">
            {waste}%
          </span>
        </div>
      </div>

      {/* CHART */}
      <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px]">

        {/* ✅ LABEL (appears with divider) */}
        {showDivider && (
          <motion.div
            className="absolute text-[10px] sm:text-xs text-[#84CC16] font-mono -translate-x-1/2"
            style={{ left: `${(dividerX / W) * 100}%`, top: "-6px" }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            KoreValue
          </motion.div>
        )}

        {/* Y AXIS */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[9px] sm:text-xs text-gray-400">
          <span>100%</span>
          <span>50%</span>
          <span>0%</span>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="w-full h-full"
        >

          <defs>
            <linearGradient id="redFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff1a1a" stopOpacity="0.65"/>
              <stop offset="50%" stopColor="#ff0000" stopOpacity="0.55"/>
              <stop offset="100%" stopColor="#ff4d4d" stopOpacity="0.45"/>
            </linearGradient>

            <linearGradient id="greenFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#16ff6f" stopOpacity="0.55"/>
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#a3e635" stopOpacity="0.55"/>
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="5"/>
            </filter>
          </defs>

          {/* ✅ DASHED LINE (animated + conditional) */}
          {showDivider && (
            <motion.line
              x1={dividerX}
              y1="0"
              x2={dividerX}
              y2={H}
              stroke="#84CC16"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.9, pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}

          <path d={leftArea} fill="url(#redFlow)" />
          {rightArea && <path d={rightArea} fill="url(#greenFlow)" />}

          <path d={pathR} stroke="#38BDF8" strokeWidth="2.5" fill="none" filter="url(#glow)" />
          <path d={pathA} stroke="#22C55E" strokeWidth="2.5" fill="none" filter="url(#glow)" />

          {/* DOTS */}
          <g transform={`translate(${dotX}, ${dotYA})`}>
            <motion.circle r="8" fill="#22C55E" opacity="0.3"
              animate={{ scale:[1,2.5,1], opacity:[0.4,0,0.4] }}
              transition={{ duration:1.5, repeat:Infinity }}
            />
            <circle r="4" fill="#22C55E" />
          </g>

          <g transform={`translate(${dotX}, ${dotYR})`}>
            <motion.circle r="8" fill="#38BDF8" opacity="0.3"
              animate={{ scale:[1,2.5,1], opacity:[0.4,0,0.4] }}
              transition={{ duration:1.5, repeat:Infinity }}
            />
            <circle r="4" fill="#38BDF8" />
          </g>

        </svg>
      </div>

      {/* FOOTER */}
      <div className="flex flex-wrap items-center gap-2 mt-3 px-2">

        <div className="bg-[#84CC16] text-black px-2 py-1 rounded-md text-[10px] font-mono">
          Optimized
        </div>

        <div className="text-[10px] font-mono leading-tight">
          CPU/GPU/Memory<br/>Resources
        </div>

        <div className="ml-auto text-right">
          <span className="text-[10px] text-gray-400">Allocated</span><br/>
          <span className="text-green-400 font-bold text-sm">
            {Math.round(avgA)}%
          </span>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-gray-400">Required</span><br/>
          <span className="text-blue-400 font-bold text-sm">
            {Math.round(avgR)}%
          </span>
        </div>

      </div>
    </div>
  );
}