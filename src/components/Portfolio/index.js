import React from "react";
import bookclub from "../../assets/small/bookclub.png";
import techblog from "../../assets/small/techblog.png";
import monsters from "../../assets/small/monsters.png";
import weather from "../../assets/small/weather.png";
import codingquiz from "../../assets/small/codingquiz.png";
import plumbob from "../../assets/small/plumbob.png";

function Portfolio() {
  return (
    <section>
      <div className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-header-title">
              <h1 className="is-size-4">
                <b>Book Club 📚</b>
              </h1>
            </div>
            <div className="card-image">
              <img
                src={bookclub}
                className="project-img"
                alt="Book Club Screenshot"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/book-club"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://book-club123.herokuapp.com/"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
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
                <b>Tech Blog 💻</b>
              </h1>
            </div>
            <div className="card-image">
              <img
                src={techblog}
                className="project-img"
                alt="Tech Blog Screenshot"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/tech-blog"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://shrouded-anchorage-40186.herokuapp.com/"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
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
                <b>Monster Manager 👾</b>
              </h1>
            </div>
            <div className="card-image">
              <img
                src={monsters}
                className="project-img"
                alt="Monster Management Screenshot"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/monster-manager"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/18kDH_H9czuoDG4F4f-HjWe8AAH94hxOg/view"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
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
                <b>Weather App 🌤️</b>
              </h1>
            </div>
            <div className="card-image">
              <img
                src={weather}
                className="project-img"
                alt="Weather Dashboard Screenshot"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/weather-dashboard"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://haileythomas.github.io/weather-dashboard/"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
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
                <b>Coding Quiz ✔️</b>
              </h1>
            </div>
            <div className="card-image">
              <img
                src={codingquiz}
                className="project-img"
                alt="Coding Quiz Screenshot"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/coding-quiz"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://haileythomas.github.io/coding-quiz/"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
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
                <b>Plumbob Picker 💚</b>
              </h1>
            </div>
            <div className="card-image">
              <img
                src={plumbob}
                className="project-img"
                alt="Plumbob Picker Screenshot"
              />
            </div>
            <footer className="card-footer">
              <a
                href="https://github.com/HaileyThomas/plumbobpicker"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://haileythomas.github.io/plumbobpicker/"
                className="card-footer-item"
                target="_blank"
                rel="noreferrer"
              >
                Deploy
              </a>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
