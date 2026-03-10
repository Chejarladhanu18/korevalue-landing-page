import VisibilityCard from "./VisibilityCard"

const cards = [
  {
    icon: "/workload.png",
    title: "Track AI Workloads End-to-End",
    description:
      "Monitor the cost of every model call, agent interaction, and GPU hour while enabling detailed visibility for precise chargeback allocation."
  },
  {
    icon: "/shared-icon.png",
    title: "Handle Complex Shared Resources",
    description:
      "Allocate costs across Kubernetes clusters, shared databases, and multi-tenant infrastructure effortlessly with KoreValue’s intelligent allocation engine."
  },
  {
    icon: "/cloud.png",
    title: "Unify Multi-Cloud Cost Data",
    description:
      "Move beyond scattered reports from AWS, Azure, GCP and on-prem with a unified platform that standardizes cost data across environments."
  },
  {
    icon: "/pie-chart.svg",
    title: "Govern Before you Spend",
    description:
      "Implement budget protections to stop unapproved resource creation before it impacts your billing."
  },
  {
    icon: "/settings.svg",
    title: "Integrate into Existing Workflows",
    description:
      "Built on an API-first model, it integrates with ERP, ITSM, and BI platforms."
  },
  {
    icon: "/graph.svg",
    title: "Deploy in Days, not Months",
    description:
      "Integrated discovery automation and virtual tagging start working right away."
  }
]

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

        {/* HEADING */}
        <div className="text-center mb-12 lg:mb-16">

          <h2 className="text-[#77B900] text-[28px] lg:text-[45px] font-semibold mb-4 lg:mb-6">
            One Platform, End-to-End Visibility
          </h2>

          <p className="text-[#7E7E7E] text-[16px] lg:text-[26px] max-w-[1180px] mx-auto">
            Track and manage the true cost of workloads across every
            environment with clarity.
          </p>

        </div>

        {/* CARD GRID */}
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

          {cards.map((card, index) => (
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