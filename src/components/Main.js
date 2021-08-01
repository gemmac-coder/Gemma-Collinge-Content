// Importing React and hooks
import React, { useState, useEffect } from "react";
// Importing axios
import axios from "axios";

// Importing components
import About from "./About";
import Project from "./Project";

//  Main functional component, fetches repo data from Github using the useState and UseEffect hooks
const Main = (props) => {
  const [repos, setRepos] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.github.com/users/gemmac-coder/repos"
        );
        setRepos(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        setRepos(null);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(repos);
  // Repos are mapped and each repo is rendered in the project section
  return (
    <section id="projects">
      <div id="projects-container">
        <About />
        <div id="project-cards">
          {repos.map((repo) => {
            return <Project repo={repo} />;
          })}
        </div>
        <div className="triangle-clip-image"></div>
      </div>
    </section>
  );
};

export default Main;
