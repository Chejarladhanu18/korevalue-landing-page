import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Chart dimensions
const POINTS = 24;
const CHART_W = 580;
const CHART_H = 200;
const KUBEX_IDX = 10; // Where the dashed line appears

// Allocated: high before kubex (~65-75), drops to hug required after (~35-40)
const ALLOCATED = [
  72, 75, 74, 70, 66, 68, 72, 74, 73, 70,   // Before: high (waste zone)
  65, 60, 55, 52, 50, 48, 50, 52, 54, 55, 53, 52, 51, 50, // After: drops to hug required
];
// Required: stays consistently low (~28-34)
const REQUIRED = [
  20, 18, 22, 24, 23, 25, 27, 26, 28, 29,  // Before
  30, 32, 34, 33, 30, 28, 30, 32, 33, 34, 35, 36, 37, 38, // After
];

function ptX(i: number) { return (i / (POINTS - 1)) * CHART_W; }
function ptY(val: number, maxVal: number) { return CHART_H - (val / maxVal) * CHART_H; }

// Catmull-Rom spline path
function splinePath(data: number[], maxVal: number, count: number): string {
  const len = Math.min(count, data.length);
  if (len < 2) return "";
  const pts = Array.from({ length: len }, (_, i) => ({ x: ptX(i), y: ptY(data[i], maxVal) }));

  let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(i + 2, pts.length - 1)];
    const t = 0.25;
    d += ` C${(p1.x + (p2.x - p0.x) * t).toFixed(1)},${(p1.y + (p2.y - p0.y) * t).toFixed(1)} ${(p2.x - (p3.x - p1.x) * t).toFixed(1)},${(p2.y - (p3.y - p1.y) * t).toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

// Fill area between two curves
function fillBetween(top: number[], bot: number[], maxVal: number, from: number, to: number): string {
  const s = Math.max(from, 0);
  const e = Math.min(to, top.length - 1);
  if (e - s < 1) return "";

  const tPts = [], bPts = [];
  for (let i = s; i <= e; i++) {
    tPts.push({ x: ptX(i), y: ptY(top[i], maxVal) });
    bPts.push({ x: ptX(i), y: ptY(bot[i], maxVal) });
  }

  // Forward along top
  let d = `M${tPts[0].x.toFixed(1)},${tPts[0].y.toFixed(1)}`;
  for (let i = 0; i < tPts.length - 1; i++) {
    const p0 = tPts[Math.max(i - 1, 0)], p1 = tPts[i], p2 = tPts[i + 1], p3 = tPts[Math.min(i + 2, tPts.length - 1)];
    const t = 0.35;
    d += ` C${(p1.x + (p2.x - p0.x) * t).toFixed(1)},${(p1.y + (p2.y - p0.y) * t).toFixed(1)} ${(p2.x - (p3.x - p1.x) * t).toFixed(1)},${(p2.y - (p3.y - p1.y) * t).toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }

  // Line down to bottom last point, then reverse along bottom
  d += ` L${bPts[bPts.length - 1].x.toFixed(1)},${bPts[bPts.length - 1].y.toFixed(1)}`;
  for (let i = bPts.length - 2; i >= 0; i--) {
    const p0 = bPts[Math.min(i + 2, bPts.length - 1)], p1 = bPts[i + 1], p2 = bPts[i], p3 = bPts[Math.max(i - 1, 0)];
    const t = 0.35;
    d += ` C${(p1.x + (p2.x - p0.x) * t).toFixed(1)},${(p1.y + (p2.y - p0.y) * t).toFixed(1)} ${(p2.x - (p3.x - p1.x) * t).toFixed(1)},${(p2.y - (p3.y - p1.y) * t).toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d + " Z";
}

// Interpolated point on a data curve at fractional progress
function interpPt(data: number[], maxVal: number, progress: number) {
  const idx = progress * (data.length - 1);
  const i = Math.floor(idx);
  const frac = idx - i;
  const next = Math.min(i + 1, data.length - 1);
  const val = data[i] + (data[next] - data[i]) * frac;
  return { x: ptX(idx), y: ptY(val, maxVal) };
}

// Colors
const COL_ALLOCATED = "#22C55E";
const COL_REQUIRED = "#38BDF8";
const COL_DIVIDER = "#84CC16";

type Phase = "idle" | "drawing" | "divider" | "done";

export default function KubexChart() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [drawProgress, setDrawProgress] = useState(0);
  const rafRef = useRef(0);

  const restart = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setPhase("idle");
    setDrawProgress(0);
    setTimeout(() => setPhase("drawing"), 600);
  }, []);

  useEffect(() => { restart(); }, [restart]);

  // Progressive draw
  useEffect(() => {
    if (phase !== "drawing") return;
    const start = performance.now();
    const dur = 3500;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setDrawProgress(eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("divider"), 300);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  useEffect(() => {
    if (phase === "divider") {
      const t = setTimeout(() => setPhase("done"), 800);
      return () => clearTimeout(t);
    }
    if (phase === "done") {
      const t = setTimeout(() => restart(), 2500);
      return () => clearTimeout(t);
    }
  }, [phase, restart]);

  const maxVal = 100;
  const visibleCount = phase === "idle" ? 0 : phase === "drawing"
    ? Math.max(2, Math.round(drawProgress * POINTS))
    : POINTS;

  const kubexX = ptX(KUBEX_IDX);
  const showDivider = phase === "divider" || phase === "done";
  const isAfter = phase === "divider" || phase === "done";

  // Stats
  const beforeAllocAvg = ALLOCATED.slice(0, KUBEX_IDX).reduce((a, b) => a + b, 0) / KUBEX_IDX;
  const afterAllocAvg = ALLOCATED.slice(KUBEX_IDX).reduce((a, b) => a + b, 0) / (POINTS - KUBEX_IDX);
  const reqAvg = REQUIRED.reduce((a, b) => a + b, 0) / POINTS;
  const wastePercent = isAfter
    ? Math.round(((afterAllocAvg - reqAvg) / afterAllocAvg) * 100)
    : Math.round(((beforeAllocAvg - reqAvg) / beforeAllocAvg) * 100);
  const allocPercent = isAfter ? Math.round(afterAllocAvg) : Math.round(beforeAllocAvg);
  const reqPercent = Math.round(reqAvg);

  const statusLabel = phase === "done" ? "Optimized" : "Analyzing...";

  // Leading edge dot positions
  const dotAlloc = phase === "drawing" ? interpPt(ALLOCATED, maxVal, drawProgress) : interpPt(ALLOCATED, maxVal, 1);
  const dotReq = phase === "drawing" ? interpPt(REQUIRED, maxVal, drawProgress) : interpPt(REQUIRED, maxVal, 1);

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className="relative w-full h-full rounded-2xl cursor-pointer select-none"
        onClick={restart}
        style={{
          background: "linear-gradient(160deg, hsl(var(--card)), hsl(var(--background)))",
          boxShadow: "0 30px 70px -15px rgba(0,0,0,0.7)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: COL_DIVIDER,
                boxShadow: `0 0 10px ${COL_DIVIDER}`,
              }}
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono font-semibold text-lg text-foreground">
              KoreValue
            </span>
          </div>

          {/* Waste % top-right */}
          <div className="text-right">
            <span className="text-[11px] font-mono text-muted-foreground">Waste</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={wastePercent}
                className="text-2xl font-bold font-mono"
                style={{ color: "hsl(var(--destructive))" }}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
              >
                {wastePercent}%
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Chart area */}
        <div className="relative flex-1 ">
          {/* Y axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[11px] font-mono text-muted-foreground">
            <span>100%</span>
            <span>50%</span>
            <span>0%</span>
          </div>

          <div className="w-full h-full">
            <svg
              viewBox={`0 0 ${CHART_W} ${CHART_H}`}
              className="w-full"
              style={{ overflow: "visible" }}
            >
              <defs>
                <clipPath id="draw-clip">
                  <rect x={-5} y={-30} width={drawProgress * (CHART_W + 25)} height={CHART_H + 62} />
                </clipPath>

                {/* Waste fill before divider */}
                <linearGradient id="waste-red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(0, 75%, 50%)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(0, 65%, 42%)" stopOpacity="0.3" />
                </linearGradient>

                {/* Efficiency fill after divider - olive/dark green */}
                <linearGradient id="eff-green" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(90, 50%, 35%)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="hsl(90, 40%, 25%)" stopOpacity="0.35" />
                </linearGradient>

                {/* Line glow */}
                <filter id="line-glow" x="-15%" y="-15%" width="130%" height="130%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="big-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              

              <g clipPath={phase === "drawing" ? "url(#draw-clip)" : undefined}>
                {/* RED waste area: between allocated & required, BEFORE kubex */}
                {visibleCount >= 2 && (
                  <path
                    d={fillBetween(ALLOCATED, REQUIRED, maxVal, 0, Math.min(KUBEX_IDX, visibleCount - 1))}
                    fill="url(#waste-red)"
                  />
                )}

                {/* GREEN efficiency area: between allocated & required, AFTER kubex */}
                {visibleCount > KUBEX_IDX && (
                  <path
                    d={fillBetween(ALLOCATED, REQUIRED, maxVal, KUBEX_IDX, visibleCount - 1)}
                    fill="url(#eff-green)"
                  />
                )}

                {/* Allocated line — green */}
                {visibleCount >= 2 && (
                  <path
                    d={splinePath(ALLOCATED, maxVal, visibleCount)}
                    fill="none"
                    stroke={COL_ALLOCATED}
                    strokeWidth={2.5}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                )}

                {/* Required line — blue with glow */}
                {visibleCount >= 2 && (
                  <>
                    <path
                      d={splinePath(REQUIRED, maxVal, visibleCount)}
                      fill="none"
                      stroke={COL_REQUIRED}
                      strokeWidth={6}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      opacity={0.2}
                      filter="url(#line-glow)"
                    />
                    <path
                      d={splinePath(REQUIRED, maxVal, visibleCount)}
                      fill="none"
                      stroke={COL_REQUIRED}
                      strokeWidth={2.8}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </g>

              {/* Leading edge: vertical connector line + two dots */}
              {phase === "drawing" && drawProgress > 0.02 && (
                <g>
                  {/* Vertical connector line between dots */}
                  <line
                    x1={dotAlloc.x} y1={dotAlloc.y}
                    x2={dotReq.x} y2={dotReq.y}
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth={1.5}
                    strokeDasharray="3 3"
                    opacity={0.5}
                  />
                  {/* Green allocated dot */}
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={8} fill={COL_ALLOCATED} opacity={0.2} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={5} fill={COL_ALLOCATED} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={2} fill="hsl(155, 90%, 80%)" />
                  {/* Blue required dot */}
                  <circle cx={dotReq.x} cy={dotReq.y} r={8} fill={COL_REQUIRED} opacity={0.2} />
                  <circle cx={dotReq.x} cy={dotReq.y} r={5} fill={COL_REQUIRED} />
                  <circle cx={dotReq.x} cy={dotReq.y} r={2} fill="hsl(200, 85%, 80%)" />
                </g>
              )}

              {/* KoreValue dashed divider */}
              {showDivider && (
                <motion.g
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ transformOrigin: `${kubexX}px ${CHART_H / 2}px` }}
                >
                  <line
                    x1={kubexX} y1={-14} x2={kubexX} y2={CHART_H}
                    stroke={COL_DIVIDER}
                    strokeWidth={1.5}
                    strokeDasharray="6 5"
                    opacity={0.8}
                  />
                  <text
                    x={kubexX} y={-16}
                    textAnchor="middle"
                    fill="hsl(var(--foreground))"
                    fontSize={11}
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    KoreValue
                  </text>
                </motion.g>
              )}

              {/* Big sparkling end dot on green (Allocated) line */}
              {(phase === "divider" || phase === "done") && (
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring", damping: 12 }}
                >
                  <motion.circle
                    cx={dotAlloc.x} cy={dotAlloc.y} r={20}
                    fill={COL_ALLOCATED} opacity={0.07}
                    animate={{ r: [20, 26, 20], opacity: [0.07, 0.14, 0.07] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={14}
                    fill={COL_ALLOCATED} opacity={0.12} filter="url(#big-glow)" />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={10}
                    fill="none" stroke={COL_ALLOCATED} strokeWidth={2} opacity={0.45} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={7}
                    fill={COL_ALLOCATED} />
                  <circle cx={dotAlloc.x} cy={dotAlloc.y} r={3}
                    fill="hsl(155, 90%, 85%)" />
                </motion.g>
              )}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-3 ml-10 text-sm font-mono">
            <div className="flex items-center gap-2">
              <div className="w-6 h-[3px] rounded-full" style={{ backgroundColor: COL_REQUIRED, boxShadow: `0 0 4px ${COL_REQUIRED}` }} />
              <span className="text-muted-foreground">Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-[3px] rounded-full" style={{ backgroundColor: COL_ALLOCATED }} />
              <span className="text-muted-foreground">Allocated</span>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="flex items-center gap-4 px-6 pb-4 pt-2">    
          <AnimatePresence mode="wait">
            <motion.div
              key={statusLabel}
              className="px-4 py-1.5 rounded-lg text-sm font-mono font-bold whitespace-nowrap"
              style={{
                backgroundColor: statusLabel === "Optimized"
                  ? COL_DIVIDER
                  : "hsl(var(--muted))",
                color: statusLabel === "Optimized" ? "hsl(0, 0%, 5%)" : "hsl(var(--foreground))",
                boxShadow: statusLabel === "Optimized"
                  ? `0 0 12px hsl(65, 80%, 50%, 0.4)`
                  : "none",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {statusLabel}
            </motion.div>
          </AnimatePresence>

          <div className="text-sm font-mono leading-tight text-muted-foreground">
            CPU/GPU/Memory<br />Resources
          </div>

          <div className="ml-auto text-right">
            <span className="text-[11px] font-mono text-muted-foreground">Allocated</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={allocPercent}
                className="text-xl font-bold font-mono"
                style={{ color: COL_ALLOCATED }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {allocPercent}%
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-mono text-muted-foreground">Required</span>
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={reqPercent}
                className="text-xl font-bold font-mono"
                style={{ color: COL_REQUIRED }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {reqPercent}%
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
