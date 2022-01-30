import React from "react";

function Nav() {
  return (
    <nav className="navbar has-background-info">
      <div className="navbar-brand">
        <h1 className="navbar-item title has-text-white">
          <b>Hailey Thomas 🦋</b>
        </h1>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item button is-info is-inverted is-rounded m-3"
          href="#About"
        >
          About Me
        </a>
        <a
          className="navbar-item button is-info is-inverted is-rounded m-3"
          href="#Portfolio"
        >
          Portfolio
        </a>
        <a
          className="navbar-item button is-info is-inverted is-rounded m-3"
          href="#Contact"
        >
          Contact
        </a>
        <a
          className="navbar-item button is-info is-inverted is-rounded m-3"
          href="#Resume"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
export default Nav;
