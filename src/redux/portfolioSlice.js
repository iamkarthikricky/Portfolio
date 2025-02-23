import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHeaderExpanded: false,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false, // Retrieve from localStorage
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
  },
});

export const {onToggleHeader,onToggleTheme} = portfolioSlice.actions;
export default portfolioSlice.reducer;
