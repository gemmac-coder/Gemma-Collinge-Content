// Importing Header and Main Components
import Header from "./components/Header";
import Main from "./components/Main";

// Importing React and destructuring component
import React, { Component } from "react";

// App class component
class App extends Component {
  // Parallax scrolling background effect
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
  // App rendered with header and main components
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Main />
      </React.Fragment>
    );
  }
}

// Exporting App
export default App;
