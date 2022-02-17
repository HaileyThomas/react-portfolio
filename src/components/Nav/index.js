import React from "react";
import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
import { bounceInRight } from "react-animations";

function Nav() {
  const styles = {
    bounceInRight: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounceInRight, "bounceInRight"),
    },
  };
  return (
    <nav className="navbar has-background-info p-1">
      <div className="navbar-brand">
        <StyleRoot>
          <h1
            className="navbar-item title is-size-2 has-text-white"
            style={styles.bounceInRight}
          >
            <b>Hailey Thomas Portfolio</b>
          </h1>
        </StyleRoot>
      </div>
      <div className="navbar-end">
        <Link
          to="/about"
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
