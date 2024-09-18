import { WHY_US } from "@/constants";
import OurScore from "../ui/ourscore";
import WhyusCard from "../ui/cards/servicesCard";

export default function Whyus() {
  const whyus = WHY_US
  return (
    <section>
        <div className="mt-5">
        <OurScore/>
        </div>
        <div className="flex justify-center items-center gap-5 mt-5 md:mt-[100px] flex-wrap">
        {whyus.map((item, index)=>
        <WhyusCard key={index} iconUrl={item.iconUrl} title={item.title} description={item.description} vertical/>
        )}
        </div>
        
    </section>
  )
}
