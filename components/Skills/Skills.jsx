import React, { useState } from 'react'
import { Title } from '../Shared/Title' 
import { SkillItem } from '../Shared/SkillItem'
import skills from '../data/skills'

export const Skills = () => {
  const [visible,setVisible] = useState(false)
  const [data,setData] = useState(skills.slice(0,4));
  const showMore = () => {
    if (visible) {
      setData(skills.slice(0,4))
    } else {
      setData(skills)
    }
    setVisible(!visible)
  }
  return (
    <div className=' px-12 flex flex-col justify-center items-center' id='Skills'>
        <Title className="mx-auto mb-14" title="My Skills"/>
        <p className='text-center w-2/3'>I am a quick learner and specialize in multitude of skills required for Web Application Development and Product Design</p>
        <div className='bg-[#f4f6f8] flex-1 flex flex-wrap justify-center p-8 w-full overflow-hidden'>
            {data.map(elem => (
                <SkillItem title={elem.title} imageURL={elem.imageURL} key={elem[0]}/>
            ))}
        </div>
        <div className='bg-[#f4f6f8] p-2 w-full mb-10 flex justify-center items-center'>
          <button onClick={showMore} className='py-2.5 px-9 bg-[#f6e05e] transition ease-in-out duration-300 hover:bg-[#F4F6F8] hover:border-2 hover:border-[#f6e05e] rounded font-bold text-center'>
            {visible ? "Show Less": "Show More"}
          </button>
        </div>
    </div>
  )
}
