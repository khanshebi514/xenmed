import Button from "@/app/ui/button";


export default function WhoWeAre() {
  return (
    <section>
         <div
      className="w-full relative"
      style={{
        background: "url('/bg-layout.PNG')",
      }}
    >
      <div className="container h-full md:h-[600px] flex justify-start items-center">
        <div className="space-y-5 ">
          <div>
            <p className="text-lg opan-sans mb-5">
            Unveiling Innovation, Integrity, and Excellence in Healthcare Solutions
            </p>
            <h1 className="main-heading w-full md:w-[70%]">
            Empowering Healthcare providers, Elevating Care Redefining Healthcare Excellence
            </h1>
          </div>

          <div className="">
            <p className="para-text my-10 w-full md:w-[80%] leading-7">
            At XenMD, we are more than just a medical billing services provider; we are your dedicated partner in navigating the complex landscape of healthcare administration. With a proven track record of excellence, we offer a comprehensive suite of services designed to streamline operations, maximize revenue, and enhance patient care for healthcare professionals across diverse specialties
            </p>
          </div>

          <div className="flex gap-5">
            <Button btnText={'Schedule A Demo'} />
            <Button btnText={'Free consultation'}  textOnly className={'border-2 border-primary'}/>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
