
import { useEffect } from 'react'
import aboutStyles from '../About/about.module.css'

import { ProjectCards } from '../Home/home'
import { ProjectModal } from './Modals/modal'


const Projects = () => {

    useEffect(()=>{
        document.title = "Portfolio | Projects"
    },[])
  return (
    <div>
      <ProjectCards />
      <ProjectModal />
    </div>
  )
}

export default Projects
