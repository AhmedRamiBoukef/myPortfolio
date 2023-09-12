import Image from 'next/image'
import React from 'react'
import image from '../../images/me.jpg'
import { Title } from '../Shared/Title'

export const About2 = () => {
  return (
    <div className='h-screen md:h-[80vh] md:my-12 my-32 gap-20 w-[100wh] px-12 flex flex-col justify-center items-center' id='About'>
        <Title className="mx-auto mb-14" title="About Me"/>
        <div className='text-lg flex flex-col-reverse md:grid gap-10 items-center md:grid-cols-3 px-12 leading-5 text-center md:text-left' id='About'>
            <div className='md:col-span-2'>
                <h1 className='my-4 text-4xl font-semibold'>Hi! 👋 I’m Ahmed Rami.</h1>
                <p className='mb-4 '>I am a motivated full-stack web developer with extensive knowledge and skills in both front-end and back-end development. I am passionate about delivering high-quality solutions and driving innovation in web development.</p>
                <div className='md:grid text-base grid-cols-2 mt-10 md:w-[80%]'>
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
            <div className="losange shadow-xl">
                <div className="los1">
                    <Image sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' loading='eager' src={image} alt="image"/>
                </div>
            </div>
        </div>    
    </div>
  )
}


