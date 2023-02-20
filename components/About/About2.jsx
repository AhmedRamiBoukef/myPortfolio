import Image from 'next/image'
import React from 'react'
import image from '../../images/me.jpg'
import { Title } from '../Shared/Title'

export const About2 = () => {
  return (
    <div className='h-[80vh] my-12 gap-20 w-[100wh] px-12 flex flex-col justify-center items-center' id='About'>
        <Title className="mx-auto mb-14" title="About Me"/>
        <div className='text-lg grid gap-10 items-center md:grid-cols-3 px-12 leading-5 text-center md:text-left' id='About'>
            <div className='col-span-2'>
                <h1 className='my-4 text-4xl font-semibold'>Hi! 👋 I’m Ahmed Rami.</h1>
                <p className='mb-4 '>I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                <div className='grid text-base grid-cols-2 mt-10 w-[80%]'>
                    <div className='grid md:grid-cols-2 grid-cols-2 text-left '>
                        {[['Nationality:','Algerian'],['Languages:','Arabic,English,French'],['Live in:','Algeria']].map(elem => (
                            <>
                                <h3 className='mb-2 font-bold' key={elem[0]}>{elem[0]}</h3>
                                <h2 className='mb-2' key={elem[1]}>{elem[1]}</h2>
                            </>
                        ))}
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-2 text-left '>
                    {[['Email:','ka_boukef@esi.dz'],['LinkedIn:','AhmedRami Boukef'],['Github:','AhmedRami Boukef']].map(elem => (
                            <>
                                <h3 className='mb-2 font-bold' key={elem[0]}>{elem[0]}</h3>
                                <h2 className='mb-2' key={elem[1]}>{elem[1]}</h2>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className="losange shadow-xl	">
                <div className="los1">
                    <Image src={image} alt="image"/>

                </div>
            </div>
        </div>    
    </div>
  )
}


