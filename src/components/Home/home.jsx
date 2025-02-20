import Header from "../Header/header"
import styles from './home.module.css';
const Home = () => {
  return (
    <div>
        <Header />
      <div className={`w-full h-full py-15 ${styles.home_container}`}>
        <div className="flex flex-col items-start h-auto max-w-80 gap-5">
        <div className={`${styles.developer_logo}`}></div>
          <h1 className={`${styles.home_text}`}>I am a <span className={`${styles.job_role}`}>Frontend Developer</span> using my background in web development using my expertise in quality.</h1>
      </div>
      </div>
    </div>
  )
}

export default Home
