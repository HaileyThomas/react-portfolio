import React from "react";
import headerImage from "../../assets/cover/header.png";
import headshot from "../../assets/images/headshot.jpg";

function About() {
  return (
    <section id="about-me" className="columns">
      <div className="column">
        <img src={headerImage}  className="p-1" alt="header" />
        <div className="columns green mr-1 ml-1 p-3">
          <div className="column">
            <img src={headshot} alt="headshot of developer" />
          </div>
          <div className="column">
            <h1 id="about">About Me</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
