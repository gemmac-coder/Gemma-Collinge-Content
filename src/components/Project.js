import React from "react";

const Project = (props) => {
  return (
    <div className="project">
      <a
        className="project-link"
        href="http://leon3005.github.io/samplify-uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src="http://raw.githubusercontent.com/gemmac-coder/Gemma-Collinge-Web-Development-Portfolio/main/assets/images/samplify-uk-homepage.png"
          alt={"Screenshot of " + props.name}
        />
      </a>
      <div className="project-details">
        <div className="project-tile">{props.name}</div>
        <div className="buttons">
          <a
            href="http://github.com/gemmac-coder/samplify-uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a
            href="http://leon3005.github.io/samplify-uk/"
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
