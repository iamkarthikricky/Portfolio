import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import homeStyles from '../Home/home.module.css';

import styles from './about.module.css';

import styled from "styled-components";

import { Collapse } from 'antd';
import { FiChevronDown } from "react-icons/fi";

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


const Skills=()=>{
  const resumeURL = JSON.parse(sessionStorage.getItem("resumeURL"))
  return(
  <div className="py-5 flex flex-col items-start h-auto max-w-3xl gap-4">
    <div className="flex flex-col gap-2">
    <p className={`${styles.about_description} ` }>💡 Skills:</p>
    <p className={`${styles.about_description}`}>
    User Research | UI & Visual Design | HTML/CSS | Javascript | NodeJS | ReactJS | MongoDB | SQL | Illustration
</p> 
</div>

<button className={styles.resume_btn}><a href={resumeURL} target="_blank" rel="noopener noreferrer">Resume</a></button>
</div>
)
}


const Connect=()=>(
  <div className="py-5 flex flex-col items-start h-auto max-w-3xl">
     <p className={`${styles.about_description} ` }>📍 Based in Hyderabad, open to opportunities in PAN India</p>
     <p className={`${styles.about_description} ` }>
    📩 Let’s connect: <strong>karthikmaheshwarapu@gmail.com</strong></p>
    <div className="flex gap-2 py-2 items-center">
  <a href="mailto:karthikmaheshwarapu@gmail.com" target="_blank" rel="noopener noreferrer">
    <img width="32" height="32" src="https://img.icons8.com/color/48/gmail-new.png" alt="Email" />
  </a>
  
  <a href="https://www.linkedin.com/in/maheshwarapu-karthik/" target="_blank" rel="noopener noreferrer">
    <img width="32" height="32" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
  </a>
  
  <a href="https://wa.me/+917036842378" target="_blank" rel="noopener noreferrer">
    <img width="32" height="32" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" />
  </a>

  <a href="https://teams.microsoft.com/l/chat/0/0?users=karthikmaheshwarapu@gmail.com" target="_blank" rel="noopener noreferrer">
    <img width="32" height="32" src="https://img.icons8.com/color/48/microsoft-teams.png" alt="Microsoft Teams" />
  </a>
  
  <a href="https://www.instagram.com/i_am_karthik_ricky" target="_blank" rel="noopener noreferrer">
    <img width="32" height="32" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="Instagram" />
  </a>

  <a href="skype:live:b7f2f2a70ceeb0a7?chat" target="_blank" rel="noopener noreferrer">
    <img width="32" height="32" src="https://img.icons8.com/color/48/skype.png" alt="Skype" />
  </a>
  
  <a href="https://www.facebook.com/karthikmaheshwarapu/" target="_blank" rel="noopener noreferrer">
    <img width="32" height="32" src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
  </a>
</div>

  </div>
)


// Styled Components for Collapse
const StyledCollapse = styled(Collapse)`
  border: none;
  width:100%;
  border-radius:0px;
  margin-top:20px;
 .ant-collapse-item {
  border-top: 1px solid #333;
  border-radius: 0;
}

.ant-collapse-item:last-of-type {
  border-bottom: 1px solid #333;
    border-radius: 0;
}

  

  .ant-collapse-header {
    font-family:var(--font-work);
    font-size:var(--sub-heading);
    color: var(--color-black) !important;
    background: var(--color-white);
    padding: 14px 0px !important;
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius:0px !important;
    display: flex;
    justify-content: space-between; /* Ensure text and icon are spaced */
    align-items: center;
  }

   .ant-collapse-content-box{
    padding:5px 0px !important;
   }

  .ant-collapse-content {
    background: var(--color-white);
    border-top: none;
    border-radius:0px;
     font-family:var(--font-work);
    font-size:var(--sub-heading);
    color: var(--color-black);
    background: var(--color-white);
    padding: 0px 0px !important;
  }
`;



const Experience=()=>{
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items = [
    {
      key: '1',
      label: 'Qloron Private Ltd - Software Engineer Intern, 2024 - Present',
      children: <div className="flex flex-col gap-3">
        <p> Developed a multi-level navigation system with react-router-dom and ensured state persistence using Redux and local storage, allowing users to retain selections across sessions.</p>
        <p>Refactored API handling to reduce redundant requests by 70%, improving load times and efficiency using React Query and memoization techniques.</p>
        <p>Implemented a Redux-powered e-commerce cart, handling product additions, quantity adjustments, and a real-time pricing system.</p>
      </div>,
    },
    {
      key: '2',
      label: 'Enut Technologies - UI Developer Intern, 2023 - 2024',
      children: <div className="flex flex-col gap-3">
        <p>Developed a highly customizable admin panel using React, Redux, Ant Design, and Express.js, integrating JWT-based authentication and role-based access control (RBAC) for secure user management.</p>
        <p>Implemented MongoDB indexing and aggregation pipelines, reducing query response times by 80% for complex analytics.</p>
        <p>Optimized SQL database queries using indexing and joins, ensuring efficient data retrieval in large-scale applications.</p>
      </div>,
    },
    {
      key: '3',
      label: 'Cognizant Technologies - Programmer Analyst Trainee, 2022 - 2022',
      children:<div className="flex flex-col gap-3">
         <p>Used Socket.io for real-time task updates, ensuring live synchronization across users.</p>
        <p>Implemented server-side validation to ensure fairness and prevent duplicate payouts.</p>
        <p>Designed and deployed RESTful APIs with Express.js, ensuring structured data flow and authentication using JWT & OAuth.</p>
    </div>
    },
  ];

  const iconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180},
  };

  return(
    <div className="py-5 flex flex-col items-start h-auto max-w-3xl">
    <h1 className={`${styles.about_me_text}`}>My Experience</h1>
    <StyledCollapse items={items}    expandIconPosition="end"  expandIcon={({ isActive }) => (
        <motion.div animate={isActive ? "expanded" : "collapsed"} variants={iconVariants}>
          <FiChevronDown size={20} color="var(--color-black)" />
        </motion.div>
      )}/>
  </div>
  )
 
}

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
          <div className={`w-full h-full lg:py-15 ${styles.home_container}`}>
          <ScrollSection Component={AboutSection} />
          <ScrollSection Component={AboutDescription} />
          <ScrollSection Component={MyJourney} />    
          <ScrollSection Component={Skills} />   
         
          <div className="py-5">
            <ScrollSection Component={Experience} /> 
          </div>   
          <ScrollSection Component={Connect} />   
          </div>
    
    </div>
  )
}

export default About
