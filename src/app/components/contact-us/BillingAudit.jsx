import ContactForm from "./contactForm";

export default function BillingAudit() {
  return (
    <section className="py-10">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <div>
                    <div className="space-y-5">
                        <p className="text-primary text-[16px font-medium]">Uncover Hidden Revenue, Guarantee Compliance, and Elevate Your Practice</p>
                        <h1 className="medium-heading">
                        Unlock The Full Potential Of Your Practice With Our Free Medical Billing Audit.
                        </h1>
                        <p className="text-para leading-7">Our seasoned team of experts will conduct a comprehensive review of your billing procedures, pinpointing opportunities for revenue maximization and ensuring adherence to industry regulations. Don’t overlook this chance to ignite your revenue streams – secure your FREE audit today!</p>
                    </div>
                </div>
                <div>
                    <ContactForm label={'Billing Audit'}/>
                </div>
            </div>
        </div>
    </section>
  )
}
