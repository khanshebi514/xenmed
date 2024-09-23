import { PiQuotes } from "react-icons/pi";
export default function TestmonialCard() {
  return (
    <div className="max-w-[422px] max-h-[420px] p-5 shadow-lg bg-white">
        <div className="flex flex-col justify-center items-center">
            <div className="content-center">
            <PiQuotes size={25} className="text-primary-bg"/>
            </div>
            <div className="my-5">
                <p className="text-[14px] text-[#334] text-center leading-7 tracking-wide">Our Medical Billing Company provides a wide range of specialties to ensure that clients receive the best possible care. Our expert team excels in a variety of specialized fields, delivering exceptional results and understanding that each situation is unique. Explore our specialties and see the difference for yourself.</p>
            </div>
            <div className="content-center mt-7">
                <p className="text-[14px] font-medium">Shoaib Rasool</p>
                <p className="text-[#7777] font-light text-[12px] text-center">test</p>
            </div>
        </div>
    </div>
  )
}