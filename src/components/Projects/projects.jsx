
import { useEffect } from 'react'
import Header from '../Header/header'

const Projects = () => {

    useEffect(()=>{
        document.title = "Portfolio | Projects"
    },[])
  return (
    <div>
        <Header/>
      <h1>Projects</h1>
    </div>
  )
}

export default Projects
