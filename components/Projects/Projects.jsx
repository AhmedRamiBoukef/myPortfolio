import React from 'react'
import projectList from "../data/Projects"
import { ProjectItem } from './ProjectItem'
import { Title } from '../Shared/Title'

export const Projects = () => {
  return (
    <div className=' px-12 flex flex-col justify-center items-center' id='Projects'>
        <Title className="mx-auto mb-14" title="My Projects"/>
        <div className='flex flex-wrap gap-x-8 mt-10 gap-y-14 justify-center'>
            {projectList.map(elem => (
                <ProjectItem title={elem.title} tags={elem.tags} photo={elem.photo} key={elem.title} />
            ))}
        </div>
    </div>
  )
}
