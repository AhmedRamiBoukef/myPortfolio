import React from 'react'
import { Title } from '../Shared/Title' 
import { SkillItem } from '../Shared/SkillItem'
import skills from '../data/skills'

export const Skills = () => {
  return (
    <div className=' px-12 flex flex-col justify-center items-center' id='Skills'>
        <Title className="mx-auto mb-14" title="My Skills"/>
        <p className='text-center w-2/3'>I am a quick learner and specialize in multitude of skills required for Web Application Development and Product Design</p>
        <div className='bg-[#f4f6f8] flex-1 flex flex-wrap p-8 w-full overflow-hidden'>
            {skills.map(elem => (
                <SkillItem title={elem.title} imageURL={elem.imageURL} key={elem[0]}/>
            ))}
        </div>
    </div>
  )
}
