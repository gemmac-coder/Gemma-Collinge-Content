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
  return (
    <section id="projects">
      <div className="projects-container">
        <About />
        {repos.map((repo) => {
          <Project props={repo} />;
        })}
      </div>
    </section>
  );
};

export default Main;
