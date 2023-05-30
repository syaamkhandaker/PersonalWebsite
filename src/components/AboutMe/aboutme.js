import React from "react";
import "./aboutme.css";
import Syaam from "./Syaam.jpg";

function AboutMe() {
  return (
    <div className="d-flex aboutme-section-area" id="about">
      <div className="mobile-centering">
        <img src={Syaam} className="profile-photo-shaping" />
      </div>

      <div className="d-flex flex-column aboutme-text-area">
        <div className="aboutme-header-text">Hi, I'm Syaam!</div>
        <div className="aboutme-paragraph-text">
          I'm a freshman studying Computer Science at Georgia Tech. Here, I
          showcase my passion for creating projects that benefit human lives.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
