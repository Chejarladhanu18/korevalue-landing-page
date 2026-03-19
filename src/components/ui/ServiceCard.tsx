type Props = {
  icon?: string;
  emoji?: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, emoji, title, description }: Props) => {
  return (
    <div className="w-[290px] h-[224px] bg-[#0F1A12] border border-[#77B900]/30 rounded-[20px] flex flex-col items-center justify-center text-center">

      {icon ? (
        <img src={icon} className="mb-[12px]" />
      ) : (
        <div className="text-[#77B900] text-[48px] mb-[12px]">
          {emoji}
        </div>
      )}

      <h3 className="text-white text-[20px] font-semibold mb-[8px]">
        {title}
      </h3>

      <p className="text-[#929292] text-[13px] leading-[28px] px-6">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;