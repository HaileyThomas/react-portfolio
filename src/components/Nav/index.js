import React from "react";

function Nav(props) {
  const { portfolioSelected, setPortfolioSelected } = props;
  return (
    <nav className="navbar has-background-info">
      <div className="navbar-brand">
        <h1 className="navbar-item title has-text-white">
          <b>Hailey Thomas Portfolio 🦋</b>
        </h1>
      </div>
      <div className="navbar-end">
        <a
          data-testid="about"
          className="navbar-item button is-info is-inverted is-rounded m-3"
          href="#About"
          onClick={() => setPortfolioSelected(false)}
        >
          About Me
        </a>
        <a
          data-testid="portfolio"
          className="navbar-item button is-info is-inverted is-rounded m-3"
          href="#Portfolio"
          onClick={() => setPortfolioSelected(true)}
        >
          Portfolio
        </a>
        <a
          data-testid="contact"
          className="navbar-item button is-info is-inverted is-rounded m-3"
          href="#Contact"
          onClick={() => setPortfolioSelected(false)}
        >
          Contact
        </a>
        <a
          data-testid="resume"
          className="navbar-item button is-info is-inverted is-rounded m-3"
          href="#Resume"
          onClick={() => setPortfolioSelected(false)}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
export default Nav;
