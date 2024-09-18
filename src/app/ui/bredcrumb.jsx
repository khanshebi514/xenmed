import { MdLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Bredcrumb() {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-bg h-[45px]">
      <div className="container">
        <div className="py-2 flex justify-between items-center">
          <div>
            <div className="flex justify-center items-center gap-2">
              <MdLocalPhone size={25} className="text-white font-semibold" />
              <p className="text-white">(888) 840-5215</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 text-white">
            <FaFacebookF size={20} />
            <FaLinkedinIn size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
