import OurCommetment from "../components/about-us/ourCommetment";
import SignUpTitle from "../components/about-us/SignUpTitle";
import Testmonial from "../components/about-us/testmonial";
import TitleHeadingText from "../components/about-us/TitleHeadingText";
import WhomWeServe from "../components/about-us/whomWeServe";
import WhoWeAre from "../components/about-us/whoWeAre";
import BillingAudit from "../components/contact-us/BillingAudit";
import ContactForm from "../components/contact-us/contactForm";
import OurServices from "../components/ourServices";
import OurScore from "../ui/ourscore";


export default function AboutUs() {
  return (
    <>
    <WhoWeAre/>
    <OurCommetment/>
    <TitleHeadingText/>
    <OurServices/>
    <WhomWeServe/>
    <SignUpTitle/>
    <Testmonial/>
    <BillingAudit/>
    </>
  )
}
