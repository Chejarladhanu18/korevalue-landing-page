import content from "../../content/content.json";

export default function KoreValueSection() {
  const footer = content.footer
  return (
    <section
      className="
      w-full
      flex
      justify-center
      py-16
      "
    >

      <div className="w-[1728px] h-[545px] flex items-center justify-center">

        <div className="text-center max-w-[900px]">

          <img
            src="/KV Logo White 1.png"
            alt="Kore Value"
            className="mx-auto mb-6 w-[360px]"
          />

          <p className="text-[#BDBDBD] text-[16px] mb-10">
            {footer.tagline}
          </p>

          <p className="text-[#9E9E9E] text-[15px] leading-[28px] max-w-[760px] mx-auto">
            {footer.description}
          </p>

          <p className="text-[#6F6F6F] text-[12px] mt-[80px]">
            {footer.copyright}
          </p>

        </div>

      </div>

    </section>
  );
}