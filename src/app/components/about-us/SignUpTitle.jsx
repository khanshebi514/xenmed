import HeadingTitleCard from "@/app/ui/cards/headingTitleCard";

export default function SignUpTitle() {
  return (
    <section>
        <div className="container">
            <HeadingTitleCard btnText={'Sign up'}>
                <h1 className="medium-heading text-white">Experience the Future of Healthcare with XenMD!</h1>
                <p className="text-[14px] text-white">Join the healthcare revolution today! Sign up for a free trial to see XenMD in action.</p>
            </HeadingTitleCard>
        </div>
    </section>
  )
}
