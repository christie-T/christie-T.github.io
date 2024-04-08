import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar"; // import component from where it is defined
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects"
import { About } from "./components/About"



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <About />
    
    </div>
  );
}

export default App;
