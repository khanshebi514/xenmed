export default function SectionText({ shadow, title, description, vertical }) {
  const shadowCardVert = (
    <div className="w-full md:w-[363px] h-[253px] shadow-lg rounded-lg bg-white text-black p-4">
      <div>
        <h2 className="small-heading">{title}</h2>
        <p className="text-[12px] md:text-[14px] opan-sans text-[#584D66] leading-7">{description}</p>
      </div>
    </div>
  );

  const shadowCardHorz = (
    <div className="w-full md:w-[555px] h-[180px] md:h-[163px] shadow-lg rounded-lg bg-white text-black p-4">
      <div>
        <h2 className="small-heading">{title}</h2>
        <p className="text-[12px] md:text-[14px] opan-sans text-[#584D66] leading-7">{description}</p>
      </div>
    </div>
  );

  const textOnlyCard = (
    <div className="">
      <div>
        <h2 className="small-heading">{title}</h2>
        <p className="text-[12px] md:text-[14px] opan-sans text-[#54595f] leading-6">{description}</p>
      </div>
    </div>
  );

  if (shadow && vertical) {
    return shadowCardVert;
  } else if (shadow) {
    return shadowCardHorz;
  } else {
    return textOnlyCard;
  }
}
