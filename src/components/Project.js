import React from "react";

// Make an file called projectdata.js, inside have an array of objects, each object is a project with name, live url, image, and github keys/values.
// Then make a projects container

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
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a
            href={`https://bit.ly/gemma-collinge-${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
