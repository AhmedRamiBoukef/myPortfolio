import Image from 'next/image'
import React from 'react'

export const ProjectItem2 = ({title,image,tags,orientation,description,links}) => {
  return (
    <div className='w-full relative my-4 aspect-video drop-shadow md:drop-shadow-none'>
        <div className={`overflow-hidden rounded-lg w-[60%] absolute aspect-video ${orientation ? "left-0" : "right-0"}`}>
            <Image src={image} width='100%' height="100%" layout="fill" alt="image" className='rounded-lg blur-sm brightness-50 hover:blur-0 hover:brightness-100 transition delay-75 ease-in-out'  />    
        </div>
        <div className={`z-10 ${orientation ? "ml-auto md:items-end right-0" : "md:items-start left-0"} flex flex-col gap-4 absolute w-[60%]`}>
            <h2 className='text-[#00509D] font-semibold cursor-default'>Featured Project</h2>
            <h1 className='text-3xl cursor-pointer hover-accent font-[600]'>{title}</h1>
            <div className={`shadow-2xl text-lg p-6 bg-[#11296B] text-white cursor-default rounded drop-shadow-xl`}>{description}</div>
            <ul className='mt-6 flex flex-wrap cursor-default max-w-[500px] items-center text-sm whitespace-nowrap'>
                {tags.map((t, i) => {
                        return <li key={i} className={`text-lg mr-5 md:mr-0 ${orientation  ? 'md:ml-5' : `md:mr-5`}`}>{t}</li>
                    })}
            </ul>
            {links && <div className={"flex flex-wrap items-center text-lg mt-4"}>
                {
                    Object.keys(links).map((l, i) => {
                        return <a key={i} href={links[l]} className={`mr-6 ${l} ${i === (!orientation ? 0 : Object.keys(links).length - 1) ? "md:mr-0" : "md:mx-6"}`}/>
                    })
                }
            </div>}
        </div>
    </div>
  )
}
