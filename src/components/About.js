import React from "react";

export const About = (props) => {
  return (
    <div className="about-info-container">
      {/* <div className="heading"> */}
      <span id="h2-span-about">
        <h2>ABOUT ME</h2>
      </span>
      <p className="about-info">
        Hi, I'm Gemma. Writer, Marketer, and now a full-stack web developer.
        Since February, I have been enrolled at the Coding Boot Camp, learning
        everything from Javascript to MongoDB. Follow me on my odyssey through
        web development, by checking out some of my recent work below.
      </p>
      {/* </div> */}
    </div>
  );
};

export default About;
