import './global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct imports

import Layout from './components/layout';

import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const App = () => {

  const {darkMode} = useSelector((state) => state.portfolio);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <div>
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
