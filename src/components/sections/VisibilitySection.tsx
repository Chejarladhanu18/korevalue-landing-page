import VisibilityCard from "../ui/VisibilityCard"
import visibility from "../../content/Visibility.json"

type Card = {
  icon: string
  title: string
  description: string
}

export default function VisibilitySection() {
  return (
    <section
      className="
      relative
      w-full
      overflow-hidden
      flex
      justify-center
      py-24
      lg:py-32
      "
    >

      <div className="relative w-full max-w-[1300px] px-6">

        <div className="text-center mb-12 lg:mb-16">

          <h2 className="text-[#77B900] text-[28px] lg:text-[45px] font-semibold mb-4 lg:mb-6">
            {visibility.title}
          </h2>

          <p className="text-[#7E7E7E] text-[16px] lg:text-[26px] max-w-[1180px] mx-auto">
            {visibility.description}
          </p>

        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          lg:gap-10
          justify-items-center
          "
        >

          {visibility.cards.map((card: Card, index: number) => (
            <VisibilityCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}

        </div>

      </div>

    </section>
  )
}