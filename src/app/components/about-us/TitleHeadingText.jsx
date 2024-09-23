import HeadingTitleCard from "@/app/ui/cards/headingTitleCard";

export default function TitleHeadingText() {
  return (
    <section>
        <div className="container">
        <HeadingTitleCard btnText={'Fee Consultation'}>
            <p className="text-[14px] font-semibold text-white">
            Optimize Your Revenue Today
            </p>
        
            <h1 className="medium-heading text-white">
            Ready to maximize your practice's revenue and streamline operations?
            </h1>
            <p className="text-[12px] font-normal text-white leading-7">
            Schedule a consultation with XenMD's experts now and discover how our comprehensive suite of services can drive success for your healthcare practice. Don't let revenue opportunities slip away .
            </p>
        </HeadingTitleCard>
        </div>
        
    </section>
  )
}
