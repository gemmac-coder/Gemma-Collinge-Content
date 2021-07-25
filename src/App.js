import logo from "./logo.svg";
import "./App.css";
// import "./components/Main.js";
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="container">
        <h1>Hi, I'm</h1>
        <span id="h2-span">
          <h2>GEMMA</h2>
        </span>
      </div>
    </header>
  );
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const header = document.querySelector("#welcome-section");

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";
    };
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
