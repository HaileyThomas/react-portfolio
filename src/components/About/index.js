import React from "react";
import headshot from "../../assets/images/headshot.jpg";

function About() {
  return (
    <section className="columns">
      <div className="column">
        <img src={headshot} alt="headshot of developer" />
      </div>
      <div className="column">
        <h1 id="about" className="has-text-white is-size-3">About Me</h1>
      </div>
    </section>
  );
}

export default About;
