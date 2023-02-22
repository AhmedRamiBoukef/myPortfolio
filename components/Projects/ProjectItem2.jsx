import Image from 'next/image'
import React from 'react'

export const ProjectItem2 = ({title,photo,tags}) => {
  return (
    <div className='grid grid-cols-12 relative'>
        <div className="rounded-lg overflow-hidden w-[70%]">
            <Image src={photo} alt="image"/>
        </div>
        <div className='flex flex-col items-end gap-4 absolute left-0 w-[70%]'>
            <h2 className='text-[#00509D]'>Featured Project</h2>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <div className='shadow-xl text-lg p-6 bg-[#11296B] rounded text-white'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
            <div className='flex flex-wrap gap-6 mt-2 mr-8'>
                {tags.map(elem => (
                    <div key={elem} className="text-lg">
                        {elem}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
