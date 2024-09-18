import Image from "next/image";

export default function ServicesCard({ iconUrl, title, description, vertical }) {
  const verticalCard = (
    <div className="w-[300px] sm:w-[350px] h-[300px] sm:h-[326px] bg-white p-2 shadow-lg border-[1px] border-white hover:border-[1px] hover:border-primary transition-colors duration-500">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Image src={iconUrl} width={140} height={170} alt="" />
      </div>
      <div className="px-8">
        <h3 className="small-heading text-center">{title}</h3>
        <p className="para-text text-center leading-6">{description}</p>
      </div>
    </div>
  );

  const horizontalCard = (
    <div className="w-full sm:w-[350px] md:w-[462px] h-[200px] sm:h-[190px]  bg-white p-2 shadow-lg border-l-[4px] border-primary hover:border-l-[8px] transition-colors duration-700">
      <div className="flex justify-start items-start gap-2">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image src={iconUrl} width={100} height={90} alt=""/>
        </div>
        <div className="px-8">
          <h3 className="small-heading">{title}</h3>
          <p className="para-text leading-6">{description}</p>
        </div>
      </div>
    </div>
  );

  return vertical ? verticalCard : horizontalCard;
}
