import { RCM_XEN_MED } from "@/constants";
import React from "react";
import SectionText from "../ui/cards/sectionText";

export default function RcmXenMed() {
  return (
    <section className="py-10 bg-[#eff2fc]">
      <div className="container">
        <div className="my-5 content-center">
          <p className="text-lg text-primary text-center">
            Optimize Reimbursements, Minimize Denials, and Maximize
            Profitability for Your Practice
          </p>
          <h1 className="medium-heading  text-center my-5">
            Streamline Your Revenue Cycle with XENMD's Medical Billing
          </h1>
          <p className="para-text text-center">
            Experience the XENMD difference and take your practice’s financial
            management to the next level. Contact us today to learn more about
            our medical billing services and start maximizing your revenue
            potential.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 items-center">
            {RCM_XEN_MED.map((item)=>
            <SectionText key={item.key} title={item.title} description={item.description} vertical={item.vertical} shadow/>
            )}
        </div>
      </div>
    </section>
  );
}
