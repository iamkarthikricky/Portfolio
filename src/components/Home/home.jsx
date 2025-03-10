import styles from "./home.module.css";

import devImage from "../../assets/developer.jpg";
import { useEffect } from "react";

import { ReadMoreBtn,VisitBtn } from "../utilities";
import { useSelector } from "react-redux";

import { ProjectModal } from "../Projects/Modals/modal";

// Array of text colors
const textColors = [
  "text-blue-500",
  "text-red-500",
  "text-green-500",
  "text-purple-500",
];

export const ProjectCards = () => {

  const {cardsData} = useSelector((state)=>state.portfolio)

  return(
  <div className={`flex flex-col items-center gap-15 py-9 w-full`}>
    {cardsData.map((card, index) => {
      const { projectName, projectDescription, url } =
        card.projectDetails["0"];

      return (
        <div
          key={card.id}
          className={`${
            styles.project_card_container
          } p-4 flex flex-col sm:flex-row w-full h-full gap-4 ${
            index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          }`}
        >
          <div className={`${styles.img_container} lg:hidden w-full`}>
            <img src={card.img_small} alt="docketpay" className={styles.small_img}/>
          </div>
          <div className={`${styles.img_container} hidden lg:flex lg:w-3xl`}>
            <img src={card.img_large} alt="docketpay"/>
          </div>
          <div
            className={`${
              styles.project_content_container
            } lg:w-full w-full gap-4 ${
              index % 2 === 0 ? "lg:pl-10" : "lg:pr-10"
            }`}
          >
            <h1
              className={`${styles.project_name} sm:text-left text-center ${
                textColors[index % textColors.length]
              }`}
            >
              {projectName}
            </h1>
            <p className={`${styles.project_description}`}>
              {projectDescription}
            </p>
          
            <div className="flex flex-col md:flex-row gap-2.5">
              <VisitBtn projectUrl={url} />
              <ReadMoreBtn projectData={card}/>
              </div>
          </div>
        </div>
      );
    })}
  </div>
)};

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio | Home";
  }, []);
  
  return (
    <div>
      <div className={`w-full h-full py-10 ${styles.home_container}`}>
        <div className="flex flex-col items-start h-auto max-w-80 gap-5">
          <img src={devImage} alt="developer" className={styles.dev_img} />

          <h1 className={`${styles.home_text}`}>
            Hi there! I am {" "}
            <span className={`${styles.job_role}`}>Karthik Maheshwarapu</span>{" "}
            a web developer passionate about merging aesthetics with functionality in both frontend and backend development.
          </h1>
        </div>
        <ProjectCards />
        <ProjectModal />
      </div>
    </div>
  );
};

export default Home;
