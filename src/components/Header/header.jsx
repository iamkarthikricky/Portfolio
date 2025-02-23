import React from "react";
import styles from "./header.module.css";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { onToggleHeader,onToggleTheme } from "../../redux/portfolioSlice";
import { useSelector,useDispatch } from "react-redux";

import { FaHamburger, FaLightbulb,FaRegLightbulb, FaWindowClose } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const NavigationLinks = () => {

  const dispatch = useDispatch()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
  ];

   return links.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) => isActive ? `${styles.active_list_item}` : `${styles.list_item}`}
    >
      <li onClick={()=>dispatch(onToggleHeader(false))}>{label}</li>
    </NavLink>
  ));
};

const NavBar=()=>{

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const onContact=()=>{
      dispatch(onToggleHeader(false))
      navigate('/contact')
  }

  return(
    <React.Fragment>
    {/* Mobile view */}
    <div className={`lg:hidden ${styles.expanded_header} h-screen w-full flex flex-col justify-evenly border-dashed border-4 border-light-blue-500`}>
      <ul className={`h-auto w-full ${styles.ul_list} flex flex-col justify-center items-center gap-2`}>
        <NavigationLinks />
      </ul>
      <button className={`${styles.contact_me_btn}`}  onClick={onContact}>CONTACT ME</button>
    </div>

    {/* Desktop view */}
    <div className={`hidden h-inherit gap-10 ${styles.flex}`}>
      <ul className={`h-auto w-full ul-list flex flex-row justify-center items-center gap-10`}>
        <NavigationLinks />
      </ul>
      <button className={`${styles.contact_me_btn}`}  onClick={onContact}>CONTACT ME</button>
    </div>
  </React.Fragment> 
    )
}

const Header = () => {
    
    // Effect to reset isExpanded when screen size changes

    const dispatch = useDispatch();
    const {isHeaderExpanded,darkMode} = useSelector(state=>state.portfolio)

     useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          dispatch(onToggleHeader(false)); // Reset when switching to large screens
        }
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize); // Cleanup
    }, [isHeaderExpanded]);



    const navigate = useNavigate()

  return (
    <div className="relative">
      <header className={`py-8 flex justify-between ${styles.header_container}`}>
       <button className={styles.logo_icon} onClick={()=>navigate("/")}>KM</button>
        <div className="lg:hidden gap-3 flex align-baseline">
        {darkMode ? <button onClick={()=>dispatch(onToggleTheme())}><FaLightbulb fontSize={24} className={styles.icon} /></button> : <button onClick={()=>dispatch(onToggleTheme())}><FaRegLightbulb fontSize={24} className={styles.icon}/></button>  } 
          <button className={`${styles.hamburger_btn} lg:hidden`} onClick={()=>dispatch(onToggleHeader(!isHeaderExpanded))}>
            {isHeaderExpanded ? <MdOutlineClose fontSize={24} className={styles.icon}/>  :<FaHamburger fontSize={24} className={styles.icon}/> }
          </button>
          </div>
        <div className="hidden lg:flex gap-10">  {darkMode ? <button onClick={()=>dispatch(onToggleTheme())}><FaLightbulb fontSize={24} className={styles.icon}/></button> : <button onClick={()=>dispatch(onToggleTheme())}><FaRegLightbulb fontSize={24} className={styles.icon}/></button>  }<NavBar /></div>
      </header>
      {isHeaderExpanded && <div className="lg:hidden"><NavBar /></div>}
    </div>
  )
}

export default Header
