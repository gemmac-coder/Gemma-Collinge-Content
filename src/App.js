import logo from "./logo.svg";
import "./App.css";
// import "./components/Main.js";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="container">
        <span id="h1-span">
          <h1>GEMMA</h1>
        </span>
      </div>
    </header>
  );
};

const Project = (props) => {
  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return (
    <div className="project">
      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src={props.image}
          alt={"Screenshot of " + props.title}
        />
      </a>
      <div className="project-details">
        <div className="project-tile">{props.title} </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Main = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <span id="h2-span-about">
            <h2>ABOUT ME</h2>
          </span>
          <p className="subtitle">
            Hi, I'm Gemma. Writer, Marketer, and now a full-stack web developer.
            Since February, I have been enrolled at the Coding Boot Camp,
            learning everything from Javascript to MongoDB. Follow me on my
            odyssey through web development, by checking out some of my recent
            work below.
          </p>
        </div>
        <div>
          <Project
            title="SAMPLIFY"
            image={
              "http://raw.githubusercontent.com/gemmac-coder/Gemma-Collinge-Web-Development-Portfolio/main/assets/images/samplify-uk-homepage.png"
            }
            repository="http://github.com/gemmac-coder/samplify-uk"
            URL="http://leon3005.github.io/samplify-uk/"
          ></Project>
          <Project
            title="DISHUP"
            image={
              "https://raw.githubusercontent.com/gemmac-coder/dish-up/main/public/assets/screenshots/landing-page.png"
            }
            repository="http://github.com/gemmac-coder/dish-up"
            URL="https://blooming-tundra-91244.herokuapp.com/"
          ></Project>
        </div>
      </div>
    </section>
  );
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
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
