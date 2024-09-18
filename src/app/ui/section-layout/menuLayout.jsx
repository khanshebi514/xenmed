import { FaMinus } from "react-icons/fa";

export default function MenuLayout({heading,link}) {
  
  return (
    <menu className="w-[1000px] h-[400px] border-2 bg-white">
        <div className="flex">
            <div className="w-[25%] h-full bg-slate-300">
                <div className="flex justify-start items-center gap-1">
                  <div className="w-1 h-1 bg-primary">
                  </div>
                  <h2 className="heading-small">
                    {heading}
                  </h2>
                </div>
            </div>
            <div className="w-[75%] h-full bg-white">
                <ul className="grid grid-cols-2 gap-5">
                  {
                    link.map((item, index)=>
                      <li key={index} className="">   
                    <div className="flex items-center gap-1">
                    <FaMinus className="rotate-90 text-primary"/>
                    <a href={item.path}>{item.label}</a>
                    </div>
                    <p className="text-xs ml-5">{item.text}</p>
                  </li>
                    )
                  }
                  
                </ul>
            </div>
        </div>
    </menu>
  )
}
