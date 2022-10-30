import React from 'react'
import Image from "next/image";

export const SkillItem = ({title,imageURL}) => {
  return (
    <div className='p-2 aspect-square w-1/2 md:w-3/12 xl:w-2/12'>
        <div className='bg-yellow-200 rounded'>
            <div className='p-6'>
                <div className='relative h-[80px] flex justify-center items-center w-auto max-w-full pointer-events-none'>
                    <Image src={imageURL} alt={title} height={title === "Next.js" ? "":"80px"}/>
                </div>
            </div>
            <div className='w-full bg-yellow-300 px-4 py-2 min-h-[43.5px] rounded-b'>
                <span class="block text-white text-center font-mono leading-snug text-xl">{title}</span>
            </div>
        </div>
    </div>
  )
}