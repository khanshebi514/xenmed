import Button from "../button";

export default function HeadingTitleCard({children, btnText}) {
  return (
    <div className="bg-primary p-10">
        <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="my-5 w-full md:w-[65%] space-y-3">
            {children}
        </div>
        <div className="w-full md:w-[25%]">
            <Button btnText={btnText} textOnly className={'text-white'}/>
        </div>
        </div>
        
    </div>
  )
}
