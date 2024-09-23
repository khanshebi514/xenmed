import Button from "@/app/ui/button";
import { WHOM_WE_SERV } from "@/constants";
import Image from "next/image";

export default function WhomWeServe() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center space-y-3">
          <p className="text-primary-bg text-[14px]">
            Serving Diverse Specialties with Excellence
          </p>
          <h1 className="medium-heading text-black">Whom Do We Serve?</h1>
          <p className="para-text tracking-wide">
            At XenMD, we understand that each medical specialty comes with its
            own unique challenges and requirements. That’s why we proudly serve
            over 50 different <br /> specialties, including but not limited to.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10">
          {WHOM_WE_SERV.map((service) => (
            <div
              key={service.key}
              className="max-w-[195px] h-[100px] p-3 content-center"
            >
              <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
                <div>
                  <Image
                    src={service.iconUrl}
                    width={61}
                    height={53}
                    alt={service.label}
                    className="hover:animate-bounce"
                  />
                </div>
                <p className="text-[18px] font-medium text-[#333]">{service.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mt-10 flex justify-center items-center">
            <div>
                <Button btnText={'View More Services'}/>
            </div>
        </div>
      </div>
    </section>
  );
}
