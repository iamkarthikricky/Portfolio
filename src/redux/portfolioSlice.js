import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHeaderExpanded: false,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || true, // Retrieve from localStorage
  modalState:{isModalOpen:true,projectId:1},
  cardsData:[
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      projectDetails: [
        {
          projectName: "Docket Pay",
          projectDescription:
            "A Web app for monitoring total payables and receivables",
          category: "Development",
          url: "www.google.com",
          technologies: [{ id: 1, name: "HTML" },{id:2,name:"CSS"},{id:3,name:"Javascript"},{id:4,name:"MongoDB"},{id:5,name:"NodeJS"},{id:6,name:"ExpressJS"},{id:7,name:"Tailwind"}]
        },
      ],
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      projectDetails: [
        {
          projectName: "Billa Book Store",
          projectDescription: "Complete web app for ordering your favourite book",
          category: "Development",
          url: "www.google.com",
          technologies: [{ id: 1, name: "HTML" },{id:2,name:"CSS"},{id:3,name:"Javascript"},{id:4,name:"MongoDB"},{id:5,name:"NodeJS"},{id:6,name:"ExpressJS"},{id:7,name:"Tailwind"}]
        },
      ],
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150",
      projectDetails: [
        {
          projectName: "Hungry Bowls",
          projectDescription: "Web app for searching favourite food items online",
          category: "Development",
          url: "www.google.com",
          technologies: [{ id: 1, name: "HTML" },{id:2,name:"CSS"},{id:3,name:"Javascript"},{id:4,name:"MongoDB"},{id:5,name:"NodeJS"},{id:6,name:"ExpressJS"},{id:7,name:"Tailwind"}]
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
