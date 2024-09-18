import Image from 'next/image'
import React from 'react'

export default function GridSectionLayOut({leftSectionText, ImgUrl, children}) {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center md:place-items-stretch p-10 md:p-0'>
            <div className='flex flex-col gap-5'>
                {leftSectionText}
                <Image src={ImgUrl} width={533} height={348} alt='compoent image' className='border-l-4 border-primary'/>
            </div>

            <div>
                {children}
            </div>
        </div>
    </div>
  )
}
