import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Intro from "./components/Intro.js";

function App() {
  return (
    <div className="Container">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
