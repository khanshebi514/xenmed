import HeadingTitleCard from "../ui/cards/headingTitleCard";

export default function TrustedPartnerHeading() {
  return (
    <section className="my-10">
      <div className="container border-l-4 border-primary-bg">
        <HeadingTitleCard btnText={"Schedule A Demo"}>
          <h2 className="medium-heading text-white">
            Simplify Billing, Multiply Profits with the Top Medical Billing
            Company
          </h2>
        </HeadingTitleCard>
      </div>
    </section>
  );
}
