"use client";
import { NAV_ITEM_LINKS } from "@/constants";
import Link from "next/link";
import MenuLayout from "./section-layout/menuLayout";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import MobileMenu from "./section-layout/mobileMenu";

export default function NavItem() {
  const links = NAV_ITEM_LINKS;
  const [hoverdIndex, setHoveredIndex] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="h-full relative">
      <ul className="hidden md:flex justify-center items-center gap-5 h-full">
        {links.map((link, index) => (
          <Link
            className={`text-[16px] opan-sans font-medium text-black hover:text-primary-bg text-nowrap`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={link.key}
            href={link.pathUrl}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="block md:hidden">
        <button onClick={()=>{setMobileMenu((prev)=>!prev)}}>
          <HiMenuAlt1
            size={25}
            className="rotate-180 cursor-pointer text-primary"
          />
        </button>
      </div>
      <div className="absolute top-10 left-0 z-10">
      {mobileMenu ? <MobileMenu /> : null}
      </div>
      

      <div className="absolute top-10 left-0 z-10">
        {hoverdIndex == 1 ? (
          <MenuLayout heading={"Services"} link={links[1].subItemMenu} />
        ) : null}
      </div>
    </nav>
  );
}
