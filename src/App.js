import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar"; // import component from where it is defined
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

    </div>
  );
}

export default App;
