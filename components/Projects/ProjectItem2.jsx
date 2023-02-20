import Image from 'next/image'
import React from 'react'

export const ProjectItem2 = ({title,photo,tags}) => {
  return (
    <div className='flex '>
        <div className="rounded-lg overflow-hidden">
            <Image src={photo} alt="image"/>
        </div>
        <div className='flex flex-col items-end gap-4'>
            <h2 className='text-[#00509D]'>Featured Project</h2>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <div className='shadow-xl text-lg p-6 bg-[#11296B] rounded text-white'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
            <div className='flex flex-wrap gap-2 mt-2'>
                {tags.map(elem => (
                    <div key={elem} className="">
                        {elem}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
