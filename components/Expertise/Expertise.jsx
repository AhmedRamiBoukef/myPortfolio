import React from 'react'
import Image from "next/image";
import { Title } from '../Shared/Title' 
import react from "../../images/icons/frontend.svg"
import flutter from "../../images/icons/mobile.svg"
import node from "../../images/icons/backend.png"

export const Expertise = () => {
  const expertises = [
    {
      title: "Backend Dev NodeJS, Express, MongoDB",
      info: "Over 2 years of development experience in building API'S with NodeJS, ExpressJS frameworks adn MongoDB for the Database.",
      logo: node,
      style: "w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6 py-10 px-8 border-2 border-black"
    },
    {
      title: "Frontend Dev React, NextJS",
      info: "Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
      logo: react,
      style: "w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6 py-10 px-8 md:border-l-0 border-t-0 md:border-t-2 border-2 lg:border-r-0 border-black"
    },
    {
      title: "Flutter Dev Android, iOS",
      info: "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
      logo: flutter,
      style: "w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6 py-10 px-8 border-2 border-t-0 lg:border-t-2 border-black"
    }
  ]
  return (
    <div className='my-6 px-12 flex flex-col gap-8 items-center' id='Expertise'>
      <Title className="mx-auto mb-14"  title="My Expertise"/>
      <div className='flex flex-wrap'>
        {expertises.map(elem => (
          <div key={elem.title} className={elem.style}>
            <div className='flex gap-6'>
              <div>
                <Image src={elem.logo} alt={elem.title} height="80px" width="80px" />
              </div>
              <h1 className='text-2xl font-semibold leading-5 my-1.5'>{elem.title}</h1>
            </div>
            <p className='leading-6 px-10'>
              {elem.info}
            </p>

          </div>
        ))}
      </div>
    </div>
  )
}
