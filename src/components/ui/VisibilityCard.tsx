type CardProps = {
  icon: string
  title: string
  description: string
  className?: string // ✅ reusable extension
}

export default function VisibilityCard({
  icon,
  title,
  description,
  className = ""
}: CardProps) {
  return (
    <div
      className={`
        w-full
        max-w-[340px] sm:max-w-[360px] lg:max-w-[386px]
        min-h-[280px] sm:min-h-[300px] lg:min-h-[332px]
        bg-[#131814]
        rounded-[30px] sm:rounded-[35px] lg:rounded-[45px]
        border border-[#283E00]
        flex flex-col items-center text-center
        px-5 sm:px-6 lg:px-6
        pt-8 sm:pt-9 lg:pt-10
        transition-all duration-300
        hover:border-[#77B900]
        hover:shadow-[0_0_25px_rgba(119,185,0,0.2)]
        ${className}
      `}
    >

      {/* 🔹 ICON */}
      <img
        src={icon}
        alt={title}
        className="w-[45px] h-[40px] sm:w-[55px] sm:h-[45px] lg:w-[60px] lg:h-[50px] mb-5 lg:mb-6"
      />

      {/* 🔹 TITLE */}
      <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-3 lg:mb-4">
        {title}
      </h3>

      {/* 🔹 DESCRIPTION */}
      <p className="text-[#929292] text-[13px] sm:text-[14px] lg:text-[15px] leading-[22px] sm:leading-[26px] lg:leading-[32px]">
        {description}
      </p>

    </div>
  )
}