import React from "react";
import coverImage from "../../assets/cover/header.png";

function About() {
  return (
    <section className="columns">
      <div className="column has-text-centered">
        <img src={coverImage} style={{ width: "70%" }} alt="cover" />
        <h1 id="about">About Me</h1>
      </div>
    </section>
  );
}

export default About;
