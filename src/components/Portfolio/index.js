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
              <h1 className="is-size-3">
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
            <div className="card-content">
              <p className="is-size-5">
                An interactive full stack web application built using Express,
                Handlebars and Sequelize.
              </p>
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
              <h1 className="is-size-3">
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
            <div className="card-content">
              <p className="is-size-5">
                Full stack blog made with MySQL2, Express, Sequelize,
                Handlebars, dotenv, and bcrypt.
              </p>
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
              <h1 className="is-size-3">
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
            <div className="card-content">
              <p className="is-size-5">
                Node.js content management system application made with MySql.
              </p>
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
              <h1 className="is-size-3">
                <b>Weather Dashboard 🌤️</b>
              </h1>
            </div>
            <div className="card-image">
              <img
                src={weather}
                className="project-img"
                alt="Weather Dashboard Screenshot"
              />
            </div>
            <div className="card-content">
              <p className="is-size-5">
                Weather application using Open Weather API and built with
                Javascript to change DOM elements.
              </p>
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
      </div>
    </section>
  );
}

export default Portfolio;
