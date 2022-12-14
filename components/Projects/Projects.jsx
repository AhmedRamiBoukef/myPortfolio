import {React,useState} from 'react'
import projectList from "../data/Projects"
import { ProjectItem } from './ProjectItem'
import { Title } from '../Shared/Title'

export const Projects = () => {
  const [visible,setVisible] = useState(false)
  const [data,setData] = useState(projectList.slice(0,3));
  const showMore = () => {
    if (visible) {
      setData(projectList.slice(0,3))
    } else {
      setData(projectList)
    }
    setVisible(!visible)
  }
  return (
    <div className=' px-12 flex flex-col justify-center items-center' id='Projects'>
        <Title className="mx-auto mb-14" title="My Projects"/>
        <div className='flex flex-wrap gap-x-8 my-10 gap-y-14 justify-center'>
            {projectList.map(elem => (
                <ProjectItem title={elem.title} tags={elem.tags} photo={elem.photo} key={elem.title} />
            ))}
        </div>
        <div className='p-2 w-full mb-10 flex justify-center items-center'>
          <button onClick={showMore} className='py-2.5 px-9 bg-[#f6e05e] transition ease-in-out duration-300 hover:bg-[#F4F6F8] hover:border-2 hover:border-[#f6e05e] rounded font-bold text-center'>
            {visible ? "Show Less": "Show More"}
          </button>
        </div>
    </div>
  )
}
