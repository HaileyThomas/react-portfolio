import React from "react";
import headerImage from "./assets/cover/header.png";
// import About from "./components/About";
import Nav from "./components/Nav";
// import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main className="container">
        <div className="columns">
          <div className="column">
            <img src={headerImage} className="p-1" alt="header" />
            <div className="columns green mr-1 ml-1 p-3">
              <Contact></Contact>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
