import React from 'react'
import { Title } from '../Shared/Title' 

import Image from "next/image";
import image from '../../images/work-together.svg'

export const About = () => {
  return (
    <div className='my-12 w-[100wh] px-12 flex flex-col justify-center items-center' id='About'>
        <Title className="mx-auto mb-14" title="About Me"/>
        <div className='w-full flex flex-wrap'>
            <div className='p-4 w-full xl:h-full xl:w-7/12'>
                <div className='rounded xl:h-full bg-[#00509D] px-6 py-2 grid grid-cols-2'>
                    <div className='font-semibold grid md:grid-cols-[1fr_2fr] grid-cols-2 text-left '>
                        {[['Full Name:','Boukef Ahmed Rami'],['Nationality:','Algerian'],['Languages:','Arabic,English,French'],['Live in:','Algeria']].map(elem => (
                            <>
                                <h3 className='mb-2 ml-[50%] md:ml-0 text-[#91a6ba]' key={elem[0]}>{elem[0]}</h3>
                                <h2 className='mb-2 text-white' key={elem[1]}>{elem[1]}</h2>
                            </>
                        ))}
                    </div>
                    <div className='grid md:grid-cols-[1fr_2fr] grid-cols-2 text-left '>
                        {[['Email:','ka_boukef@esi.dz'],['Discord:','NONAME_RAMI#2016'],['Hobbies:','Learning,Football']].map(elem => (
                            <>
                                <h3 className='mb-2 ml-[50%] md:ml-0 text-[#91a6ba]' key={elem[0]}>{elem[0]}</h3>
                                <h2 className='mb-2 font-semibold text-white' key={elem[1]}>{elem[1]}</h2>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap w-full xl:w-5/12 xl:h-full'>
                <div className='p-4 w-full md:w-1/2 xl:h-full'>
                    <div className='rounded bg-[#00509D] p-5 text-center h-full'>
                        <h1 className='text-5xl text-green-500'>2+</h1>
                        <h1 className='text-xl text-clip text-white mt-5'>Years of Experiences</h1>
                    </div>
                </div>
                <div className='p-4 w-full md:w-1/2 xl:h-full'>
                    <div className='rounded bg-[#00509D] p-5 text-center h-full'>
                        <h1 className='text-5xl text-green-500'>10+</h1>
                        <h1 className='text-xl text-clip text-white mt-5'>Completed Projects</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}





{/* <div className='h-[100vh] grid gap-6 items-center md:grid-cols-2 px-12 leading-5 text-center md:text-left' id='About'>
        <div>
            <h1 className='my-4 text-2xl font-semibold'>Hello! I’m Ahmed Rami.</h1>
            <p className='mb-4 '>I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
            <div className='grid md:grid-cols-[1fr_3fr] grid-cols-2 text-left '>
                {[["Age:","20"],["Email:","ka_boukef@esi.dz"],["LinkedIn:","AhmedRami Boukef"],["Phone:","079999999"],["Address:","Guelma,Algeria"],["Status:","Available"]].map(elem => (
                    <>
                        <h3 className='mb-2 ml-[50%] md:ml-0' key={elem[0]}>{elem[0]}</h3>
                        <h2 className='mb-2 font-semibold' key={elem[1]}>{elem[1]}</h2>
                    </>
                ))}
            </div>
        </div>
        <div>
            <Image src={image} alt="image"/>
        </div>
    </div> */}