import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar has-background-info">
      <div className="navbar-brand">
        <h1 className="navbar-item title has-text-white">
          <b>Hailey Thomas Portfolio</b>
        </h1>
      </div>
      <div className="navbar-end">
        <Link
          to="/"
          className="navbar-item is-tab button is-info is-inverted is-rounded m-3"
        >
          About Me
        </Link>
        <Link
          to="/portfolio"
          className="navbar-item is-tab button is-info is-inverted is-rounded m-3"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="navbar-item is-tab button is-info is-inverted is-rounded m-3"
        >
          Contact
        </Link>
        <Link
          to="/resume"
          className="navbar-item is-tab button is-info is-inverted is-rounded m-3"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
