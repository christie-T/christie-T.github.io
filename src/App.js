import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import SkillsExperience from './pages/SkillsExperience';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skillsexperience" element={<SkillsExperience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
