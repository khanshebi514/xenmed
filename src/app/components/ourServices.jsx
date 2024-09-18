import { SERVICES } from "@/constants"
import ServicesCard from "../ui/cards/servicesCard"
import Counter from "../ui/counter"


export default function OurServices() {
    const services = SERVICES
  return (
    <section className="mt-10 bg-[#eff2fc] py-10">
        <div className="container">
            <div>
                <p className="text-[16px] font-medium text-primary text-center">Tailer Solutions For your Patient Success</p>
                <h2 className="medium-heading text-center">Our Comprehensive Services</h2>
                <p className="para-text text-center">
                In an era where healthcare costs continue to rise, finding a reliable and cost-effective medical billing solution is essential. At XenMD, we prioritize transparency and affordability, ensuring that you can focus on what truly matters: providing top-quality care to your patients
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
                {
                    services.map((service, index)=>
                    <ServicesCard key={index} iconUrl={service.iconUrl} title={service.title} description={service.description}/>
                    )
                }
            </div>

            <div className="my-10">
                <Counter/>
            </div>
        </div>
    </section>
  )
}
