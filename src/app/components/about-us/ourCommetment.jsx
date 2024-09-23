import OurScore from "@/app/ui/ourscore";
import Image from "next/image";

export default function OurCommetment() {
  return (
    <section className="bg-white">
        <div className="py-10">
        <OurScore/>
        </div>
        <div className="container mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
                <Image src={'/about/businesspeople.jpg'} width={500} height={400} alt="Business people gather to gather" className="border-l-8 border-primary-bg"/>
            </div>
            <div className="">
                <div className="space-y-5">
                <p className="text-[14px] text-primary-bg">Driven by Dedication, Fueled by Innovation, Redefining Healthcare Standards</p>
                <h1 className="text-primary medium-heading">
                Our Commitment to <br />Excellence
                </h1>
                <p className="para-text leading-7">At XenMD, our commitment to excellence isn’t just a statement; it’s the cornerstone of everything we do. With a relentless pursuit of innovation and a steadfast dedication to improving healthcare, we’re shaping a future where quality care is not just a goal, but a standard.XenMD has earned a reputation for delivering unparalleled excellence in medical billing, coding, and provider credentialing services. We understand the unique challenges that healthcare providers face in today’s dynamic environment, and we are committed to providing tailored solutions that meet the specific needs of each client.</p>
            </div>
                </div>
            </div>
           
        </div>
    </section>
  )
}
