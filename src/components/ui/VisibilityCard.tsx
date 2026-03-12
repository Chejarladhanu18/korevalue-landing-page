type CardProps = {
  icon: string
  title: string
  description: string
}

export default function VisibilityCard({ icon, title, description }: CardProps) {
  return (
    <div
      className="
      w-full
      max-w-[386px]
      min-h-[332px]
      bg-[#131814]
      rounded-[45px]
      border border-[#283E00]
      flex
      flex-col
      items-center
      pt-10
      text-center
      px-6
      "
    >
      <img
        src={icon}
        alt={title}
        className="w-[60px] h-[50px] mb-6"
      />

      <h3 className="text-white text-[20px] lg:text-[22px] font-semibold mb-4">
        {title}
      </h3>

      <p className="text-[#929292] text-[14px] lg:text-[15px] leading-[26px] lg:leading-[32px]">
        {description}
      </p>
    </div>
  )
}