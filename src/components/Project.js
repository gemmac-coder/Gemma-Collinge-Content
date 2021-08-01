// Importing React
import React from "react";

// Project functional component, props are used for the repo name and repo html URL
const Project = (props) => {
  const { repo } = props;
  const { name } = repo;
  const { html_url } = repo;

  return (
    <div className="project">
      <a
        className="project-link"
        href={`https://bit.ly/gemma-collinge-${name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src={`https://raw.githubusercontent.com/gemmac-coder/portfolio-images/master/public/assets/${name}.png`}
          alt={"Screenshot of " + name}
        />
      </a>
      <div className="project-details">
        <div className="project-tile">{name}</div>
        <div className="buttons">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            View repo
          </a>
          <a
            href={`https://bit.ly/gemma-collinge-${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try it
          </a>
        </div>
      </div>
    </div>
  );
};

// Exporting Project
export default Project;
