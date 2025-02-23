
import styles from './home.module.css'

import devImage from "../../assets/developer.jpg";

const Home = () => {
  return (
    <div>
      <div className={`w-full h-full py-10 ${styles.home_container}`}>
        <div className="flex flex-col items-start h-auto max-w-80 gap-5">
       
        <img src={devImage} alt="developer"  className={styles.dev_img}  />

      
          <h1 className={`${styles.home_text}`}>I am a <span className={`${styles.job_role}`}>Frontend Developer</span> using my background in web development using my expertise in quality.</h1>
      </div>
      </div>
    </div>
  )
}

export default Home
