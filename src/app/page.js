import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import SidebarMenu from "./ui/sidebar/sidebarMeu";
import Whyus from "./components/whyus";
import OurServices from "./components/ourServices";
import WhyXenMed from "./components/whyXenMed";
import RcmXenMed from "./components/rcmXenMed";
import TrustedPartnerHeading from "./components/trustedPartnerHeading";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Hero/>
    <SidebarMenu/>
    <Whyus/>
    <OurServices counter={true}/>
    <WhyXenMed/>
    <RcmXenMed/>
    <TrustedPartnerHeading/>
    </>
   
  );
}
