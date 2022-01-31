import React from "react";
import divider from "../../assets/images/divider.png";

function Resume() {
  return (
    <section className="column">
      <div>
        <h1 className="has-text-white is-size-3">Resume 🦋</h1>
        <p className="has-text-white is-size-4 has-text-centered">
          Click this link to download my Resume.
        </p>
        <br />
        <h1 className="has-text-white is-size-3">
          Skills and Proficiencies 🦋
        </h1>
        <img
          src={divider}
          className="divider"
          alt="flowers and butterflies divider"
        />
        <br />
      </div>
    </section>
  );
}

export default Resume;
