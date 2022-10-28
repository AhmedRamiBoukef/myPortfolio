import React from 'react'
import Image from "next/image";
import image from '../../images/work-together.svg'

export const About = () => {
  return (
    <div className='h-[100vh] grid items-center md:grid-cols-2 px-12 leading-5 text-center md:text-left' id='About'>
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
    </div>
  )
}
