import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from '../Header/header'
import homeStyles from '../Home/home.module.css';

import styles from './about.module.css';

const AboutSection=()=>(

    <div className="flex flex-col items-start h-auto max-w-80 gap-15">
          <h1 className={`${styles.about_me_heading}`}>About Me</h1>
          <p className={`${styles.about_me_text}`}>A <span className={`${homeStyles.job_role}`}> quick learner </span>and a <span className={`${homeStyles.job_role}`}>full-stack developer</span> passionate about building <span className={`${homeStyles.job_role}`}>scalable</span> and efficient <span className={`${homeStyles.job_role}`}>web applications</span></p>
</div>
  )

const AboutDescription=()=>(
  <div className="py-5 flex flex-col items-start h-auto max-w-3xl gap-15">
    <p className={`${styles.about_description}`}>I blend problem-solving skills with full-stack expertise to build seamless, high-performance applications. From front-end interactivity and animations to scalable back-end solutions, I create user-friendly experiences that are both functional and efficient.</p>
  </div>
)

const MyJourney=()=>(
  <div className="py-5 flex flex-col items-start h-auto max-w-3xl gap-2">
    <p className={`${styles.about_description}`}>🚀 My Journey:</p>
    <p className={`${styles.about_description}`}>
    I completed my B.Tech in Electronics and Communication Engineering from SRM Institute of Science and Technology. After graduating, I started my career at Cognizant as a Programmer Analyst Trainee, where I was introduced to the world of web development. Fascinated by its potential, I deep-dived into learning and mastering modern web technologies, continuously improving my skills to become a proficient full-stack developer.
</p>
</div>
)


const Skills=()=>(
  <div className="py-5 flex flex-col items-start h-auto max-w-3xl gap-2">
    <p className={`${styles.about_description} ` }>💡 Skills:</p>
    <p className={`${styles.about_description}`}>
    User Research | UI & Visual Design | HTML/CSS | Javascript | NodeJS | ReactJS | MongoDB | SQL | Illustration

</p> </div>
)


const Connect=()=>(
  <div className="py-5 flex flex-col items-start h-auto max-w-3xl">
     <p className={`${styles.about_description} ` }>📍 Based in Hyderabad, open to opportunities in PAN India</p>
     <p className={`${styles.about_description} ` }>
    📩 Let’s connect: karthikmaheshwarapu@gmail.com</p>
  </div>
)


const ScrollSection = ({ Component}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 2 }}
    >
      <Component /> {/* Render the passed component */}
    </motion.div>
  );
};


const About = () => {
    useEffect(()=>{
        document.title = "Portfolio | About"
    },[])

  return (
    <div>
        <Header />
          <div className={`w-full h-full lg:py-15 ${styles.home_container}`}>
          <ScrollSection Component={AboutSection} />
          <ScrollSection Component={AboutDescription} />
          <ScrollSection Component={MyJourney} />    
          <ScrollSection Component={Skills} />   
          <ScrollSection Component={Connect} />      
          </div>
    
    </div>
  )
}

export default About
