import './global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct imports
import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Appe from './components/Home/home1';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Correct usage of element prop in Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
