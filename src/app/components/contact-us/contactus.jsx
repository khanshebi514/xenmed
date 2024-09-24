import ContactForm from "./contactForm";

export default function ContactUs() {
  return (
    <section className="py-10">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <div>
                    <div className="space-y-5">
                        <p className="text-primary text-[16px font-medium]">Ready to Transform Your Business? Contact Us for a FREE Consultation!</p>
                        <h1 className="medium-heading">
                        Have Questions? We're Here to Help
                        </h1>
                        <p className="text-para leading-7">Don’t wait until inefficiencies start to impact your bottom line – reach out to us today! Our expert consultation is FREE, and we’re ready to partner with you in taking your business to the next level. Contact us now and discover how we can help you ensure compliance, boost profitability, and streamline your billing practices for a stronger financial future!</p>
                    </div>
                </div>
                <div>
                    <ContactForm label={'Contact us'}/>
                </div>
            </div>
        </div>
    </section>
  )
}
