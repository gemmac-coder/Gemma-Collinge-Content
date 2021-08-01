import React, { useState, useEffect } from "react";
import axios from "axios";
import About from "./About";
import Project from "./Project";

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

  // Line 42 before the map do a filter function repo.name map, the titles of each repo, i.e. if this is repo that i don't want to return don't include it
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
