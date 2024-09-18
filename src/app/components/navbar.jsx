import Bredcrumb from "@/app/ui/bredcrumb";
import Button from "@/app/ui/button";
import NavItem from "@/app/ui/navItem";
import Image from "next/image";


export default function Navbar() {
  return (
    <>
    <Bredcrumb/>
    <header className="w-full bg-white h-[60px] py-2">
      <div className="container">
        <div className="grid grid-cols-3 align-middle items-center">
            <div className="logo justify-self-start">
                <Image src="/logo-xen.png" width={168} height={50} alt="Log image for xenmed" />
            </div>
            <div className="justify-self-center">
              <NavItem/>
            </div>
            <div className="justify-self-end">
              <Button
              ancher='/sign-up'
              btnText={'Sign Up'}
              />
            </div>
        </div>
      </div>
    </header>
    </>
    
  );
}
