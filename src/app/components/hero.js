import Herobg from "@/app/ui/herobg";
import React from "react";
import TypeWriter from "../ui/typewriter";
import Button from "../ui/button";

export default function Hero() {
  const words = [
    "Enhanced Patient Trust !",
    "Improved AR Recovery !",
    "Exceptional Cash Flow !",
  ];
  return (
    <div
      className="w-full relative"
      style={{
        background: "url('/bg-layout.PNG')",
      }}
    >
      <div className="container h-full md:h-[600px] flex justify-start items-center">
        <div className="space-y-5">
          <div>
            <p className="text-lg opan-sans mb-5">
              Maximize Your Practice's Revenue with our
            </p>
            <h1 className="main-heading">
              Comprehensive Healthcare IT Solutions <br /> For {"  "}
              <span className="text-primary">
                <TypeWriter words={words} />
              </span>
            </h1>
          </div>

          <div className="">
            <p className="para-text my-10">
              Discover a new era of healthcare revenue cycle management with
              XenMD. Where we redefine healthcare RCM with state-of-the-art
              solutions. Join us in shaping the future of healthcare for better
              outcomes and stronger practices.
            </p>
          </div>

          <div className="flex gap-5">
            <Button btnText={'Schedule A Demo'} />
            <Button btnText={'Free consultation'}  textOnly className={'border-2 border-primary'}/>

          </div>
        </div>
      </div>
    </div>
  );
}
