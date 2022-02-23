import React from "react";
import ModalImage from "react-modal-image";
import bookclub from "../../assets/small/bookclub.png";
import bookclubL from "../../assets/large/bookclub.png";
import techblog from "../../assets/small/techblog.png";
import techblogL from "../../assets/large/techblog.png";
import monsters from "../../assets/small/monsters.png";
import monstersL from "../../assets/large/monsters.png";
import weather from "../../assets/small/weather.png";
import weatherL from "../../assets/large/weather.png";
import codingquiz from "../../assets/small/codingquiz.png";
import codingquizL from "../../assets/large/codingquiz.png";
import plumbob from "../../assets/small/plumbob.png";
import plumbobL from "../../assets/large/plumbob.png";
import toclarify from "../../assets/small/toclarify.png";
import toclarifyL from "../../assets/large/toclarify.png";

function Portfolio() {
  return (
    <section>
      <div className="columns">
        <div className="column">
          <h1 className="has-text-white is-size-3 p-3">
            <b>Portfolio </b>
            <span role="img" aria-label="butterfly">
              🦋
            </span>
          </h1>
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-header-title">
              <h1 className="is-size-4">
                <b>Book Club</b>
              </h1>
            </div>
            <div className="card-image">
              <ModalImage
                small={bookclub}
                large={bookclubL}
                alt="Book Club Screenshot"
                hideDownload="true"
                className="project-img"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/book-club"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://book-club123.herokuapp.com/"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            </footer>
          </div>
        </div>

        <div className="column is-4">
          <div className="card">
            <div className="card-header-title">
              <h1 className="is-size-4">
                <b>Tech Blog</b>
              </h1>
            </div>
            <div className="card-image">
              <ModalImage
                small={techblog}
                large={techblogL}
                alt="Tech Blog Screenshot"
                hideDownload="true"
                className="project-img"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/tech-blog"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://shrouded-anchorage-40186.herokuapp.com/"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            </footer>
          </div>
        </div>

        <div className="column is-4">
          <div className="card">
            <div className="card-header-title">
              <h1 className="is-size-4">
                <b>Monster Manager</b>
              </h1>
            </div>
            <div className="card-image">
              <ModalImage
                small={monsters}
                large={monstersL}
                alt="Monster Manager Screenshot"
                hideDownload="true"
                className="project-img"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/monster-manager"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/18kDH_H9czuoDG4F4f-HjWe8AAH94hxOg/view"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </footer>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-header-title">
              <h1 className="is-size-4">
                <b>Weather App</b>
              </h1>
            </div>
            <div className="card-image">
              <ModalImage
                small={weather}
                large={weatherL}
                alt="Weather App Screenshot"
                hideDownload="true"
                className="project-img"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/weather-dashboard"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://haileythomas.github.io/weather-dashboard/"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            </footer>
          </div>
        </div>

        <div className="column is-4">
          <div className="card">
            <div className="card-header-title">
              <h1 className="is-size-4">
                <b>Coding Quiz</b>
              </h1>
            </div>
            <div className="card-image">
              <ModalImage
                small={codingquiz}
                large={codingquizL}
                alt="Coding Quiz Screenshot"
                hideDownload="true"
                className="project-img"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/coding-quiz"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://haileythomas.github.io/coding-quiz/"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            </footer>
          </div>
        </div>

        <div className="column is-4">
          <div className="card">
            <div className="card-header-title">
              <h1 className="is-size-4">
                <b>Plumbob Picker</b>
              </h1>
            </div>
            <div className="card-image">
              <ModalImage
                small={plumbob}
                large={plumbobL}
                alt="Plumbob Pickers Screenshot"
                hideDownload="true"
                className="project-img"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/plumbobpicker"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://haileythomas.github.io/plumbobpicker/"
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            </footer>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <p className="has-text-white is-size-4 has-text-centered">
            Visit my{" "}
            <a
              href="https://github.com/HaileyThomas"
              target="blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            to view more of my projects!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
