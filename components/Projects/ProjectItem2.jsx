/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'
import React from 'react'


export const ProjectItem2 = ({ title, image, tags, orientation, description, links }) => {
    return (
        <div className='w-full relative aspect-video drop-shadow md:drop-shadow-none'>
            <a href={links[0].link} target="_blank" className={`md:block hidden overflow-hidden cursor-pointer rounded-lg w-[60%] absolute aspect-video ${orientation ? "left-0" : "right-0"}`}>
                <Image sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' loading='eager' src={image} width='100%' height="100%" layout="fill" alt="image" className='rounded-lg blur-sm brightness-50 hover:blur-0 hover:brightness-100 transition delay-75 ease-in-out' />
            </a>
            <div className={`z-10 hidden ${orientation ? "ml-auto md:items-end right-0" : "md:items-start left-0"} md:flex flex-col gap-4 absolute w-[60%]`}>
                <h2 className='text-[#00509D] font-semibold cursor-default'>Featured Project</h2>
                <a href={links[0].link} target="_blank" className='text-3xl cursor-pointer hover-accent font-[600]'>{title}</a>
                <div className={`shadow-2xl text-lg p-6 bg-[#11296B] text-white cursor-default rounded drop-shadow-xl`}>{description}</div>
                <ul className='mt-6 flex flex-wrap cursor-default max-w-[500px] items-center text-sm whitespace-nowrap'>
                    {tags.map((t, i) => {
                        return <li key={i} className={`text-lg mr-5 md:mr-0 ${orientation ? 'md:ml-5' : `md:mr-5`}`}>{t}</li>
                    })}
                </ul>
                <div className={"flex flex-wrap items-center text-lg mt-4"}>
                    {links.map((l, i) => {
                        // eslint-disable-next-line react/jsx-no-target-blank
                        return (<a target="_blank" href={l.link} key={i} className={`mr-6 ${i === (!orientation ? 0 : links.length - 1) ? "md:mr-0" : "md:mx-6"}`}>{l.icon}</a>)
                    })}
                </div>
            </div>
            <div className='md:hidden w-full relative my-4 aspect-video drop-shadow md:drop-shadow-none'>
                <Image sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' loading='eager' src={image} width='100%' height="100%" layout="fill" alt="image" className='blur-sm brightness-50 hover:blur-0 hover:brightness-100 transition delay-75 ease-in-out' />
                <div className='text-white absolute p-6 w-full h-full top-0 left-0'>
                    <h2 className='font-semibold'>Featured Project</h2>
                    <a href={links[0].link} target="_blank" className='text-3xl cursor-pointer hover-accent font-[600]'>{title}</a>
                    <div className={`text-lg py-2`}>{description}</div>
                    <ul className='mt-2 flex flex-wrap cursor-default max-w-[500px] items-center text-sm whitespace-nowrap'>
                        {tags.map((t, i) => {
                            return <li key={i} className={`text-lg mr-5 md:mr-0 ${orientation ? 'md:ml-5' : `md:mr-5`}`}>{t}</li>
                        })}
                    </ul>
                    <div className={"flex flex-wrap items-center text-lg mt-4"}>
                        {links.map((l, i) => {
                            // eslint-disable-next-line react/jsx-no-target-blank
                            return (<a target="_blank" href={l.link} key={i} className={`mr-6 ${i === (!orientation ? 0 : links.length - 1) ? "md:mr-0" : "md:mx-6"}`}>{l.icon}</a>)
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}



// 
