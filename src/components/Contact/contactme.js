import React from "react";
import "./contactme.css";
import Resume from "../Navbar/SyaamKhandakerResume.pdf";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";

function Contactme() {
  return (
    <div className="d-flex justify-content-center" id="contactme">
      <div className="contactme-area">
        <div className="d-flex justify-content-center experience-header">
          Get In Touch
        </div>
        <div className="d-flex getintouch-paragraph">
          Whether you'd like to reach out to me for any potential new
          opportunities or just have questions about my experiences, my inbox is
          always open. I'm currently still looking for any opportunities
          throughout the 2023-2024 school year.
        </div>
        <div className="d-flex contactme-icon ">
          <a href="https://github.com/syaamkhandaker">
            <BsGithub
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
            />
          </a>
          <a href="https://www.linkedin.com/in/syaamkhandaker/">
            <BsLinkedin
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
            />
          </a>
          <a href="mailto:syaamkhandaker@gmail.com?subject=Hello">
            <BsMailbox
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
            />
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none navbar-header-text text-black"
          >
            <button className="resume-button text-black">My Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
