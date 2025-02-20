import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import styles from "./header.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
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
      <li>{label}</li>
    </NavLink>
  ));
};

const NavBar=()=>{

  return(
    <React.Fragment>
    {/* Mobile view */}
    <div className={`lg:hidden ${styles.expanded_header} h-screen w-full flex flex-col justify-evenly border-dashed border-4 border-light-blue-500`}>
      <ul className={`h-auto w-full ${styles.ul_list} flex flex-col justify-center items-center gap-2`}>
        <NavigationLinks />
      </ul>
      <button className={`${styles.contact_me_btn}`}>CONTACT ME</button>
    </div>

    {/* Desktop view */}
    <div className={`hidden h-inherit gap-10 ${styles.flex}`}>
      <ul className={`h-auto w-full ul-list flex flex-row justify-center items-center gap-10`}>
        <NavigationLinks />
      </ul>
      <button className={`${styles.contact_me_btn}`}>CONTACT ME</button>
    </div>
  </React.Fragment> 
    )
}


const Header = () => {

  const [expandHeader,setExpandHeader] = useState(false)

  return (
    <div className="relative">
      <nav className="py-8 flex justify-between">
        <img src="" alt="image"/>  
        <button className={`${styles.hamburger_btn} lg:hidden`} onClick={()=>setExpandHeader(!expandHeader)}>
          <GiHamburgerMenu fontSize={24}/>
        </button>
        <div className="hidden lg:block"><NavBar /></div>
      </nav>
      {expandHeader && <div className="lg:hidden"><NavBar /></div>}
    </div>
  )
}

export default Header
