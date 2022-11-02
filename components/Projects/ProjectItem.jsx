import React from 'react'
import Image from "next/image";

export const ProjectItem = ({title,photo,tags}) => {
  return (
    <div className='rounded-lg shadow-gray-900 shadow-2xl overflow-hidden bg-[#11296B]'>
        <div className='h-40 w-96 overflow-hidden relative'>
            <Image src={photo} alt={title} layout='fill' />
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
