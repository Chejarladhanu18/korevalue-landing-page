import ServiceCard from "../ui/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="w-full flex justify-center">

      {/* MOBILE VIEW (GRID) */}
      <div className="lg:hidden w-full px-4 py-16">

        <h2 className="text-white text-[32px] font-semibold text-center mb-10">
          Explore Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">

          <ServiceCard emoji="₹" title="Cost Analyzer" description="See exactly where every cost is being spent across clouds" />
          <ServiceCard icon="/group-icon.svg" title="Category Views" description="Slice spend by teams, projects, and business categories" />
          <ServiceCard icon="/k8s-icon.svg" title="K8s Cost Observability" description="Track Kubernetes spend by namespace, pod, and workload" />
          <ServiceCard icon="/recommendation-icon.svg" title="Recommendations" description="Get actionable suggestions to reduce waste and optimize resources" />
          <ServiceCard icon="/anomaly-icon.svg" title="Anomaly Detection" description="Spot unusual spend patterns before they become budget surprises" />
          <ServiceCard icon="/reporting-icon.svg" title="Reporting" description="Build and schedule cost reports for stakeholders" />
          <ServiceCard icon="/virtual-tags-icon.svg" title="Virtual Tags" description="Tag resources dynamically without changing cloud metadata" />
          <ServiceCard icon="/cost-allocation-icon.svg" title="Cost Allocation" description="Allocate spend to teams, products, and business units" />
          <ServiceCard icon="/unit-economics-icon.svg" title="Unit Economics" description="Understand cost per user, request, and feature usage" />
          <ServiceCard icon="/forecasting-icon.svg" title="Forecasting" description="Predict future spend with historical trends" />
          <ServiceCard icon="/budgeting-icon.svg" title="Budgeting" description="Set spending limits and get alerts when close to thresholds" />

        </div>
      </div>

      {/* DESKTOP VIEW (YOUR EXACT DESIGN — NO CHANGE) */}
      <div className="hidden lg:block w-full max-w-[1728px] h-[1117px] relative">

        {/* TITLE */}
        <h2 className="text-white text-[55px] font-semibold text-center absolute top-[80px] left-1/2 -translate-x-1/2">
          Explore Our Services
        </h2>

        {/* ALL YOUR ORIGINAL CODE (UNCHANGED) */}

        {/* Example */}
        <div className="absolute top-[250px] left-[15px]">
          <ServiceCard emoji="₹" title="Cost Analyzer" description="See exactly where every cost is being spent across clouds" />
        </div>

        <div className="absolute top-[250px] left-[325px]">
          <ServiceCard icon="/group-icon.svg" title="Category Views" description="Slice spend by teams, projects, and business categories" />
        </div>

        <div className="absolute top-[250px] left-[635px]">
          <ServiceCard icon="/k8s-icon.svg" title="K8s Cost Observability" description="Track Kubernetes spend by namespace, pod, and workload" />
        </div>

        <div className="absolute top-[250px] left-[945px]">
          <ServiceCard icon="/recommendation-icon.svg" title="Recommendations" description="Get actionable suggestions to reduce waste and optimize resources" />
        </div>

        {/* ROW 2 */}

        <div className="absolute top-[544px] left-[15px]">
          <ServiceCard icon="/anomaly-icon.svg" title="Anomaly Detection" description="Spot unusual spend patterns before they become budget surprises" />
        </div>

        <div className="absolute top-[544px] left-[325px]">
          <ServiceCard icon="/reporting-icon.svg" title="Reporting" description="Build and schedule cost reports for stakeholders" />
        </div>

        <div className="absolute top-[544px] left-[635px]">
          <ServiceCard icon="/virtual-tags-icon.svg" title="Virtual Tags" description="Tag resources dynamically without changing cloud metadata" />
        </div>

        <div className="absolute top-[544px] left-[945px]">
          <ServiceCard icon="/cost-allocation-icon.svg" title="Cost Allocation" description="Allocate spend to teams, products, and business units" />
        </div>

        {/* ROW 3 */}

        <div className="absolute top-[840px] left-[170px]">
          <ServiceCard icon="/unit-economics-icon.svg" title="Unit Economics" description="Understand cost per user, request, and feature usage" />
        </div>

        <div className="absolute top-[840px] left-[480px]">
          <ServiceCard icon="/forecasting-icon.svg" title="Forecasting" description="Predict future spend with historical trends" />
        </div>

        <div className="absolute top-[840px] left-[790px]">
          <ServiceCard icon="/budgeting-icon.svg" title="Budgeting" description="Set spending limits and get alerts when close to thresholds" />
        </div>

      </div>

    </section>
  );
};

export default ServicesSection;