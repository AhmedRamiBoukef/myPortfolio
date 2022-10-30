import React from 'react'
import { Title } from '../Shared/Title' 
import {react} from "../../images/icons/react.svg"
import {flutter} from "../../images/icons/flutter.svg"
import {node} from "../../images/icons/nodejs.svg"

export const Expertise = () => {
  const expertises = [
    {
      title: "Backend Dev NodeJS, Express, MongoDB",
      info: "Over 2 years of development experience in building API'S with NodeJS, ExpressJS frameworks adn MongoDB for the Database.",
      logo: node
    },
    {
      title: "Frontend Dev React, NextJS",
      info: "Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
      logo: react
    },
    {
      title: "Flutter Dev Android, iOS",
      info: "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
      logo: flutter
    }
  ]
  return (
    <div className='h-[100vh] px-12 flex flex-col justify-center items-center' id='Expertise'>
      <Title className="mx-auto mb-14"  title="My Expertise"/>
      <div>
        {expertises.map(elem => (
          <div key={elem.title}>

          </div>
        ))}
      </div>
    </div>
  )
}
