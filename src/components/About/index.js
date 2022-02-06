import React from "react";
import headshot from "../../assets/images/headshot.jpg";
import divider from "../../assets/images/divider.png";

function About() {
  return (
    <section className="columns">
      <div className="column is-two-fifths">
        <img src={headshot} alt="headshot of developer" className="headerImg" />
      </div>
      <div className="column">
        <h1 id="about" className="has-text-white is-size-3">
          <b>About Me</b>
        </h1>
        <p className="has-text-white is-size-5 has-text-justified p-4">
          I am an aspiring junior full stack wed developer currently enrolled in
          ASU Coding Bootcamp. I currently own and manage a small cosmetics
          brand and eCommerce store and the unique skill set I have will made a
          unique and great fit to your team! I have a passion in seeing visions
          become reality and love building friendships with my development teams
          and work colleagues.
          <br />
          <br />
          In my free time I love to read (mainly Brandon Sanderson and other
          High Fantasy), play The Sims and go roller skating.
        </p>
        <img
          src={divider}
          className="divider"
          alt="flowers and butterflies divider"
        />
      </div>
    </section>
  );
}

export default About;
