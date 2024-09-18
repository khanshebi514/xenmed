import { NAV_ITEM_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  const navItemServices = NAV_ITEM_LINKS[2].subItemMenu;
  console.log(navItemServices);

  return (
    <footer>
      <div className="container p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-5">
            <div>
              <Image
                src={"/logo-xen.png"}
                width={267}
                height={80}
                alt="xen logo image"
              />
              <div className="my-5">
                <p className="text-sm text-[#54595f]">
                  Elevating healthcare through innovative IT solutions – Your
                  trusted partner for all Medical Billing solutions .
                </p>
                <div className="flex gap-5 mt-5">
                  <div className="w-[40px] h-[40px] rounded-full bg-white drop-shadow-xl flex justify-center items-center">
                    <FaFacebookF size={20} className="text-blue-400" />
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full bg-white drop-shadow-xl flex justify-center items-center">
                    <FaLinkedinIn size={20} className="text-blue-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <h2 className="border-l-8 pl-4 border-primary uppercase font-semibold text-[16px]">
                Our Services
              </h2>
              <div className="mt-3">
                <ul>
                  {navItemServices.map((link) => (
                    <li key={link.key} className="my-1 ">
                      <Link
                        href={link.path}
                        className="hover:text-primary-bg uppercase text-xs"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="">
              <h2 className="border-l-8 pl-4 border-primary uppercase font-semibold text-[16px]">
                Quick Links
              </h2>
              <div className="mt-3 flex justify-start items-center gap-5">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href={"/testmonial"}
                      className="hover:text-primary-bg uppercase text-xs"
                    >
                      testmonisal
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/testing"}
                      className="hover:text-primary-bg uppercase text-xs"
                    >
                      testing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/privacy-policy"}
                      className="hover:text-primary-bg uppercase text-xs"
                    >
                      privacy policy
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-3">
                  <li>
                    <Link
                      href={"/blogs"}
                      className="hover:text-primary-bg uppercase text-xs"
                    >
                      blogs
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/contact-us"}
                      className="hover:text-primary-bg uppercase text-xs"
                    >
                      contact us
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={"/specialities"}
                      className="hover:text-primary-bg uppercase text-xs"
                    >
                      specialities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="">
                <h2 className="border-l-8 pl-4 border-primary uppercase font-semibold text-[16px]">
                  Our Services
                </h2>
                <div className="mt-3">
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href={"/sign-up"}
                        className="hover:text-primary-bg uppercase text-xs"
                      >
                        Sign up
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/schedule-demo"}
                        className="hover:text-primary-bg uppercase text-xs"
                      >
                        Schedule A Demo
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/schedule-demo"}
                        className="hover:text-primary-bg uppercase text-xs flex justify-start items-center gap-2"
                      >
                        <IoLocationOutline /> 415 N Camden Dr Ste 111 #602
                        Beverly Hills, CA 90210
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"/schedule-demo"}
                        className="hover:text-primary-bg uppercase text-xs flex justify-start items-center gap-2"
                      >
                        <FaPhoneAlt /> (888) 840-5215
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
