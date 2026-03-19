export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#0A0F0B] overflow-hidden">

      {/* Network Background */}
      <img
        src="/network-bg.svg"
        alt="network background"
        className="
          absolute 
          top-[-50px] 
          left-0 
          w-full 
          opacity-30 
          animate-network 
          pointer-events-none

          /* MOBILE FIX */
          max-sm:top-0 
          max-sm:h-[100%] 
          max-sm:object-cover
        "
      />

      {/* Dot Pattern */}
      <img
        src="/dot-pattern.png"
        alt="dot pattern"
        className="
          absolute 
          top-[120px] 
          left-0 
          w-full 
          opacity-10 
          pointer-events-none

          /* MOBILE FIX */
          max-sm:top-0 
          max-sm:h-[130%] 
          max-sm:object-cover
        "
      />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#77B90011] to-transparent"></div>

      {/* Vertical Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F0B]/40 to-[#273C00]/40"></div>

    </div>
  );
}