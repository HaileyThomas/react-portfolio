import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import headerImage from "./assets/cover/header.png";
import footerImage from "./assets/footer/footer.png";

import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <main className="container">
          <div className="columns">
            <div className="column">
              <img src={headerImage} className="p-1" alt="header" />
              <div className="columns green mr-1 ml-1 p-3">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </div>
              <div
                className="columns mr-1 ml-1 green"
                style={{ backgroundImage: `url(${footerImage})` }}
              >
                <div className="column is-four-fifths is-offset-1">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p className="has-text-white has-text-centered is-size-4">
                    <a
                      href="https://www.linkedin.com/in/haileyraethomas/"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon has-text-white is-large is-size-1">
                        <Icon path={mdiLinkedin} />
                      </span>
                    </a>
                    <a
                      href="https://github.com/HaileyThomas"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon has-text-white is-large is-size-1">
                        <Icon path={mdiGithub} />
                      </span>
                    </a>
                  </p>
                  <p
                    className="is-size-3 has-text-white has-text-centered"
                    rel="noopener noreferrer"
                  >
                    &copy; Hailey Thomas, 2022. Thank you so much for visiting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
