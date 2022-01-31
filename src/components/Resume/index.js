import React from "react";
import divider from "../../assets/images/divider.png";
import Icon from "@mdi/react";
import { mdiFileDownloadOutline } from "@mdi/js";

function Resume() {
  return (
    <section className="column is-four-fifths is-offset-1">
      <div>
        <h1 className="has-text-white is-size-3">Resume 🦋</h1>
        <p className="has-text-white has-text-centered">
          <a href="mailto:haileyraebeauty@gmail.com">
            <span className="icon has-text-success is-large is-size-1">
              <Icon path={mdiFileDownloadOutline} />
            </span>
          </a>
        </p>
        <p className="has-text-white is-size-4 has-text-centered">
          Click the icon above to download my Resume.
        </p>
        <br />
        <h1 className="has-text-white is-size-3">
          Skills and Proficiencies 🦋
        </h1>
        <div className="box">
          <p className="is-size-4">
            HTML 5 • CSS • Javascript • Git • Bootstrap • Bulma • jQuery • Web
            API • Third-Party API • Server-side API • Node.js • OOP • SQL • MVC
            • MySQL2 • Sequelize • Express.js • NoSQL • PWA • Handlebars •
            React.
          </p>
        </div>
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
