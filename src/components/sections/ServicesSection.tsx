import content from "../../content/content.json";
import ServiceCard from "../ui/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="w-full flex justify-center px-4">

      <div className="w-full max-w-[1400px]">

        {/* TITLE */}
        <h2 className="text-white text-[32px] sm:text-[40px] lg:text-[55px] font-semibold text-center mt-[80px] mb-[60px]">
          Explore Our Services
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {content.services.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.iconType === "image" ? item.icon : undefined}
              emoji={item.iconType === "text" ? item.icon : undefined}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ServicesSection;