
import { useEffect } from 'react'
import aboutStyles from '../About/about.module.css'



const Projects = () => {

    useEffect(()=>{
        document.title = "Portfolio | Projects"
    },[])
  return (
    <div>
      <h1 className={aboutStyles.about_description}>Development in progress</h1>
    </div>
  )
}

export default Projects
