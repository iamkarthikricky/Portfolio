import './global.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct imports

import Layout from './components/layout';

import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axiosInstance from './axios/axiosConfig';

const App = () => {

  const {darkMode} = useSelector((state) => state.portfolio);

  useEffect(()=>{
    const fetchData = async () => {
      const cachedData = sessionStorage.getItem("resumeURL");

      if (cachedData) {
        return JSON.parse(cachedData); // Use cached data if available
      }
    
      try {
        const response = await axiosInstance.get("/resume");
        sessionStorage.setItem("resumeURL", JSON.stringify(response?.data["0"].resumeURL)); // Store data
        return response;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData()
  },[])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <div className='app-container'>
      <Router>
        <Routes>
          {/* Correct usage of element prop in Route */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
