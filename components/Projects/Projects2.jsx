import {React,useState} from 'react'
import projectList from "../data/Projects"
import { ProjectItem } from './ProjectItem'
import { Title } from '../Shared/Title'
import { ProjectItem2 } from './ProjectItem2'

export const Projects2 = () => {
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
    <div className='w-full px-12 flex flex-col justify-center items-center' id='Projects'>
        <Title className="mx-auto mb-14" title="My Projects"/>
        <div className='my-6 w-full [&>*]:my-32 last:mb-0'>
            {projectList.map((elem,i) => (
              
                <ProjectItem2 title={elem.title} tags={elem.tags} orientation={!(i % 2)} links={elem.links} description={elem.description} image={elem.photo} key={i} />
            ))}
        </div>
        {/* <div className='p-2 w-full mb-10 flex justify-center items-center'>
          <button onClick={showMore} className='py-2.5 px-9 bg-[#f6e05e] transition ease-in-out duration-300 hover:bg-[#F4F6F8] hover:border-2 hover:border-[#f6e05e] rounded font-bold text-center'>
            {visible ? "Show Less": "Show More"}
          </button>
        </div> */}
    </div>
  )
}
