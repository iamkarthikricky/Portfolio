import { createSlice } from "@reduxjs/toolkit";
import docketPaySmallImg from '../assets/docketpay_small.PNG';
import docketPayLargeImg from '../assets/docketpay_large.PNG';
import BillaBookStoreSmallImg from "../assets/billabookstore_small.PNG";

import BillaBookStoreLargeImg from "../assets/billabookstore_large.PNG";

import HungryBowlsSmallImg from '../assets/hungrybowls_small.PNG';
import HungryBowlsLargeImg from '../assets/hungrybowls_large.PNG';


const initialState = {
  isHeaderExpanded: false,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) ?? true, // Retrieve from localStorage
  modalState:{isModalOpen:false,projectId:1},
  cardsData:[
    {
      id: 1,
      img_small: docketPaySmallImg,
      img_large:docketPayLargeImg,
      projectDetails: [
        {
          projectName: "Docket Pay",
          projectDescription:
           "A financial tracking web app built with MERN stack to monitor dues and payments.",
        
          url: "https://docketpaynew.netlify.app",
        },
      ],
    },
    {
      id: 2,
      img_small: BillaBookStoreSmallImg,
      img_large: BillaBookStoreLargeImg,
      projectDetails: [
        {
          projectName: "Billa Book Store",
          projectDescription: "An all-in-one platform for discovering and purchasing your favorite books.",
          url: "https://billabookstore.netlify.app",
      
        },
      ],
    },
    {
      id: 3,
      img_small: HungryBowlsSmallImg,
      img_large: HungryBowlsLargeImg,
      projectDetails: [
        {
          projectName: "Hungry Bowls",
          projectDescription: "A complete online solution for ordering and enjoying delicious food.",
        
          url: "https://google.com",
         
        },
      ],
    },
  ]
};


const portfolioSlice = createSlice({
  name: "portfolioSlice",
  initialState,  
  reducers: {
    onToggleHeader: (state, action) => {
      state.isHeaderExpanded = action.payload; // Explicitly set true/false
    },
    onToggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode)); // Store in localStorage
    },
    onToggleModal:(state,action)=>{
      const {id} = action.payload
      state.modalState.isModalOpen=!state.modalState.isModalOpen
      state.modalState.projectId = id;

    }
  },
});

export const {onToggleHeader,onToggleTheme,onToggleModal} = portfolioSlice.actions;
export default portfolioSlice.reducer;
