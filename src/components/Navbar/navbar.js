import React from "react";
import "./navbar.css";
import Resume from "./SyaamKhandakerResume.pdf";

function Navbar() {
  return (
    <div className="d-flex navbar-area">
      <div className="d-flex navbar-name-text">Syaam Khandaker</div>
      <ul className="navbar-contents">
        <li>
          <a href="#about" className="text-decoration-none navbar-header-text">
            About Me
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-decoration-none navbar-header-text"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-decoration-none navbar-header-text"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contactme"
            className="text-decoration-none navbar-header-text"
          >
            Contact Me
          </a>
        </li>
        <li>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none navbar-header-text"
          >
            Resume/CV
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
