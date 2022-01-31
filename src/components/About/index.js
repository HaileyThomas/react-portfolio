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
          <b>About Me 🦋</b>
        </h1>
        <p className="has-text-white is-size-5 has-text-justified p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          faucibus a pellentesque sit amet porttitor eget dolor. Enim blandit
          volutpat maecenas volutpat blandit aliquam etiam erat velit. Dolor sit
          amet consectetur adipiscing elit pellentesque. Ut diam quam nulla
          porttitor massa id neque aliquam vestibulum. Lobortis elementum nibh
          tellus molestie nunc non blandit massa enim. Morbi tristique senectus
          et netus et malesuada. Arcu dui vivamus arcu felis bibendum ut
          tristique. Est pellentesque elit ullamcorper dignissim cras tincidunt.
          Duis at consectetur lorem donec massa. Auctor elit sed vulputate mi
          sit. Orci ac auctor augue mauris augue neque gravida. Ullamcorper
          dignissim cras tincidunt lobortis feugiat.
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
