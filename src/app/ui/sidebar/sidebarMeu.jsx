import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function SidebarMenu() {
  return (
    <div className="top-[30%] right-0 fixed z-10 bg-primary rounded-l-xl w-16 flex flex-col">
      <div className="w-full p-2 bg-black flex justify-center items-center rounded-tl-lg">
        <IoIosArrowRoundForward size={25} className="text-white" />
      </div>
      <div className="bg-primary w-full ">
        <div className="text-white h-[200px]">
         
            <li className="rotate-[270deg] text-nowrap list-none"> <MdOutlineEmail />Contact Us</li>
            
        
        </div>
      </div>
      <div className="bg-primary-bg flex justify-center items-center text-white p-2">
        <FaPhoneAlt size={25} />
      </div>
      <div className="">
        
      </div>
    </div>
  );
}
