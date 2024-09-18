import { WHY_XEN_MED } from "@/constants";
import GridSectionLayOut from "../ui/section-layout/gridSection";
import SectionText from "../ui/cards/sectionText";

export default function WhyXenMed() {

    const whyXenMed = WHY_XEN_MED
  const leftSectionText = (
    <div className="space-y-2">
      <p className="text-lg text-primary">
        Elevate Your Practice with Confidence
      </p>
      <h2 className="medium-heading">Why XenMD?</h2>
      <p className="para-text leading-6">
        At XenMD, we’re not just another medical billing company. We’re a
        dynamic force that goes beyond traditional billing operations. When you
        choose XenMD, you’re choosing a partner dedicated to your practice’s
        growth and financial success. We’re more than just a billing company;
        we’re your catalyst for revenue growth. Join the ranks of healthcare
        providers nationwide who’ve elevated their practices with XenMD. Your
        success is our success, and together, we’ll redefine healthcare
        excellence.
      </p>
    </div>
  );
  return (
    <section className="bg-white mt-10">
      <div className="container">
        <GridSectionLayOut
          ImgUrl={"/medium-shot.jpg"}
          leftSectionText={leftSectionText}>

            <div className="flex flex-col gap-5">
            {
                whyXenMed.map((item)=>
                <SectionText key={item.key} title={item.title} description={item.description} />
                )
            }
            </div>
            
          </GridSectionLayOut>
      </div>
    </section>
  );
}
