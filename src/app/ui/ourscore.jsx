import Image from "next/image";

export default function OurScore() {
  return (
    <div className="container flex justify-between items-center">
        <div className="">
            <div className="flex justify-start items-center gap-2">
                <p>Reliable & Compliant</p>
                <div className="w-[200px] bg-primary-bg h-[1px]">
                </div>
            </div>
        </div>
        <div>
            <Image src={'/trust-score/trust-score.png'} width={130} height={70} alt="we hold 100 score"/>
        </div>

        <div>
            <Image src={'/trust-score/hippa-compiant.png'} width={130} height={70} alt="we hold 100 score"/>
        </div>


        <div>
            <Image src={'/trust-score/secure.png'} width={130} height={70} alt="we hold 100 score"/>
        </div>

        <div>
            <Image src={'/trust-score/100 services.png'} width={130} height={70} alt="we hold 100 score"/>
        </div>

        <div>
            <Image src={'/trust-score/clean-claimm.png'} width={130} height={70} alt="we hold 100 score"/>
        </div>

    </div>
  )
}
