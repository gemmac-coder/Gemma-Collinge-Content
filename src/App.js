import Header from "./components/Header";
import Main from "./components/Main";

// import Main from "./components/Main";
// import Project from "./components/Project";

import React, { Component } from "react";

// const Main = (props) => {
//   return (
//     <section id="projects">
//       <div className="projects-container">
//         <div>
//           <Project
//             title="SAMPLIFY"
//             image={
//               "http://raw.githubusercontent.com/gemmac-coder/Gemma-Collinge-Web-Development-Portfolio/main/assets/images/samplify-uk-homepage.png"
//             }
//             repository="http://github.com/gemmac-coder/samplify-uk"
//             URL="http://leon3005.github.io/samplify-uk/"
//           ></Project>
//           <Project
//             title="DISHUP"
//             image={
//               "https://raw.githubusercontent.com/gemmac-coder/dish-up/main/public/assets/screenshots/landing-page.png"
//             }
//             repository="http://github.com/gemmac-coder/dish-up"
//             URL="https://blooming-tundra-91244.herokuapp.com/"
//           ></Project>
//           <Project
//             title="DISHUP"
//             image={
//               "https://raw.githubusercontent.com/gemmac-coder/dish-up/main/public/assets/screenshots/landing-page.png"
//             }
//             repository="http://github.com/gemmac-coder/dish-up"
//             URL="https://blooming-tundra-91244.herokuapp.com/"
//           ></Project>
//           <Project
//             title="DISHUP"
//             image={
//               "https://raw.githubusercontent.com/gemmac-coder/dish-up/main/public/assets/screenshots/landing-page.png"
//             }
//             repository="http://github.com/gemmac-coder/dish-up"
//             URL="https://blooming-tundra-91244.herokuapp.com/"
//           ></Project>
//           <Project
//             title="DISHUP"
//             image={
//               "https://raw.githubusercontent.com/gemmac-coder/dish-up/main/public/assets/screenshots/landing-page.png"
//             }
//             repository="http://github.com/gemmac-coder/dish-up"
//             URL="https://blooming-tundra-91244.herokuapp.com/"
//           ></Project>
//           <Project
//             title="DISHUP"
//             image={
//               "https://raw.githubusercontent.com/gemmac-coder/dish-up/main/public/assets/screenshots/landing-page.png"
//             }
//             repository="http://github.com/gemmac-coder/dish-up"
//             URL="https://blooming-tundra-91244.herokuapp.com/"
//           ></Project>
//         </div>
//       </div>
//     </section>
//   );
// };

// Project props: title, image, repo link, URL link
// An array with props, then just do one project card with relevant props passed in where you want them props.title(array number)

class App extends Component {
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

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
