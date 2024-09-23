import TestmonialCard from "@/app/ui/cards/testmonialCard";
import Image from "next/image";

export default function Testmonial() {
  return (
    <section className="py-10">
        <div className="container">
            <div className="space-y-3 text-center">
            <p className="text-[20px] font-medium text-primary-bg">Testmonial</p>
            <h2 className="medium-heading text-primary">What Our Clients Say</h2>
            <p className="para-text text-[#333]">
            Our Medical Billing Company provides a wide range of specialties to ensure that clients receive the best possible care. Our expert team excels in a variety of specialized fields, delivering exceptional results and understanding that each situation is unique. Explore our specialties and see the difference for yourself.
            </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
                <TestmonialCard/>
                <TestmonialCard/>
                <TestmonialCard/>
                <TestmonialCard/>
            </div>
        </div>
    </section>
  )
}
