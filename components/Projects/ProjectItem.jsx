import React from 'react'
import Image from "next/image";

export const ProjectItem = ({title,photo,tags}) => {
  return (
    <div className='projectItem rounded-lg shadow-gray-900 shadow-2xl overflow-hidden bg-[#11296B] '>
        <div className='relative h-40 sm:w-96 overflow-hidden relative'>
            <Image src={photo} alt={title} layout='fill' className='image hover:scale-125 transition ease-in-out delay-150 duration-300' />
            <div className='absolute top-0 left-[-100%] transition ease-in-out delay-150 duration-300 overlay w-full h-full bg-[rgba(0,0,0,.76)] z-1 flex justify-evenly items-center'>
                <a className="rounded-lg px-4 py-2 text-sm bg-white hover:text-white w-fit hover:bg-[#00509D] hover:cursor-pointer">
                    demo
                </a>
                <a className="rounded-lg px-4 py-2 text-sm bg-white hover:text-white w-fit hover:bg-[#00509D] hover:cursor-pointer">
                    code
                </a>
            </div>

        </div>
        <div className='p-3'>
            <h3 className='text-semibold text-white'>{title}</h3>
            <div className='flex flex-wrap gap-2 mt-2'>
                {tags.map(elem => (
                    <div key={elem} className="rounded-lg px-4 py-2 text-sm text-white w-fit bg-[#00509D]">
                        {elem}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
