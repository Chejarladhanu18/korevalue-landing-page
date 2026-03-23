import content from "../../content/content.json";
import ServiceCard from "../ui/ServiceCard";

type Service = {
  iconType: string;
  icon: string;
  title: string;
  description: string;
};

const ServicesSection = () => {
  const services: Service[] = content.services;

  return (
    <section className="w-full flex justify-center px-4 min-h-screen">

      <div className="w-full max-w-[1400px]">

        {/* TITLE */}
        <h2 className="
          text-white 
          text-[32px] 
          sm:text-[40px] 
          lg:text-[55px] 
          font-semibold 
          text-center 
          mt-[60px] 
          mb-[80px]
        ">
          Explore Our Services
        </h2>

        {/* ROWS */}
        <div className="flex flex-col gap-8">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {services.slice(0, 4).map((item, index) => (
              <ServiceCard
                key={index}
                icon={item.iconType === "image" ? item.icon : undefined}
                emoji={item.iconType === "text" ? item.icon : undefined}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {services.slice(4, 8).map((item, index) => (
              <ServiceCard
                key={index}
                icon={item.iconType === "image" ? item.icon : undefined}
                emoji={item.iconType === "text" ? item.icon : undefined}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* ROW 3 */}
          <div className="flex justify-center gap-6 flex-wrap">
            {services.slice(8, 11).map((item, index) => (
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

      </div>

    </section>
  );
};

export default ServicesSection;