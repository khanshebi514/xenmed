import Link from "next/link"


export default function Button({ancher, className, btnText, textOnly, ...props}) {
    let cssClass = `py-[5px] md:py-[10px]  px-[10px] md:px-[30px]  block rounded-lg ${!textOnly ? 'bg-primary text-white hover:bg-primary-bg' : 'bg-transparent text-primary hover:bg-primary-bg border-2 hover:border-bg-primary-bg'} ' ' ${className}`

    let ancherLink = <Link href={ancher} className={cssClass} {...props}>{btnText}</Link>

    let btn = <button className={cssClass} {...props}>{btnText}</button>
  return (
    
    
        ancher ? ancherLink : btn
    
  )
}
