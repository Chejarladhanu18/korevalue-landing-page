import VisibilityCard from "../ui/VisibilityCard"
import content from "../../content/content.json"

type Card = {
  icon: string
  title: string
  description: string
}

export default function VisibilitySection() {

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.dispatchEvent(new Event("highlightContact"))
  }

  return (
    <section className="relative w-full overflow-visible flex flex-col items-center py-32 lg:py-40">

      {/* 🔳 RECTANGLE */}
      <div className="w-full flex justify-center -mt-16 md:-mt-32 lg:-mt-40 mb-10 px-4">

        <div className="w-full max-w-[988px] aspect-[988/556] relative">

          <div className="absolute inset-0 rounded-[70px] p-[3px] bg-gradient-to-r from-[#0F1800] to-[#77B900]">
            <div className="w-full h-full rounded-[67px] bg-[#131814]" />
          </div>

        </div>

      </div>

      {/* 🔘 BUTTONS */}
      <div className="flex flex-wrap justify-center gap-6 mb-20 px-4">

        <button
          onClick={handleContactClick}
          className="w-[176px] h-[48px] text-[#77B900] text-[20px] font-medium rounded-lg border border-[#77B900] flex items-center justify-center"
          style={{ fontFamily: "Poppins" }}
        >
          Contact Us
        </button>

        <button
          className="w-[176px] h-[48px] bg-[#77B900] text-black text-[20px] font-medium rounded-lg flex items-center justify-center"
          style={{ fontFamily: "Poppins" }}
        >
          Get Demo
        </button>

      </div>

      {/* 🔲 MAIN CONTENT */}
      <div className="relative w-full max-w-[1600px] px-4 md:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-16 lg:mb-24">

          <h2 className="text-[#77B900] text-[32px] md:text-[42px] lg:text-[56px] font-semibold mb-6 lg:mb-8">
            {content.visibility.title}
          </h2>

          <p className="text-[#7E7E7E] text-[18px] md:text-[22px] lg:text-[28px] max-w-[1200px] mx-auto">
            {content.visibility.description}
          </p>

        </div>

        {/* CARDS */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-10 lg:gap-14
          justify-items-center
        ">

          {content.visibility.cards.map((card: Card, index: number) => (
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