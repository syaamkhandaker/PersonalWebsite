import React, { useState } from "react";
import "./experience.css";

function Experience() {
  return (
    <div className="experience-area" id="experience">
      <div className="d-flex justify-content-center experience-header">
        My Experience
      </div>
      <div className="experience-text-content">
        <div className="mobile-centering">
          <div className="company-name-experience">
            <div>Probity</div>
          </div>
        </div>
        <div className="experience-paragraph-area">
          <div className="mobile-centering">
            <div className="experience-role">Software Engineering Intern</div>
          </div>
          <div className="mobile-centering">
            <div className="italic-date">May 2023 - Present</div>
          </div>
          <ul className="experience-bullets">
            <li>
              Worked with team of interns to build matching algorithm using
              Python and SQL
            </li>
            <li>
              Worked with NER to identify keywords throughout resume and job
              listings
            </li>
          </ul>
        </div>
      </div>
      <div className="experience-text-content">
        <div className="mobile-centering">
          <div className="company-name-experience">
            <div>Gigsurf</div>
          </div>
        </div>
        <div className="experience-paragraph-area">
          <div className="mobile-centering">
            <div className="experience-role">CTO and Co-Founder</div>
          </div>
          <div className="mobile-centering">
            <div className="italic-date">June 2022 - Present</div>
          </div>
          <ul className="experience-bullets">
            <li>
              Built and manage full stack website using React.js, Node.js, Java
              Spring Boot, Spring Security, and AWS DynamoDB/EC2/S3
            </li>
            <li>
              Built Twilio Messaging Bot for notifying users of new jobs
              submitted to website using Java Spring Boot, AWS DynamoDB/EC2, and
              Twilio Studio
            </li>
            <li>
              Communicate, lead, and mentor multi-disciplinary our team of
              interns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Experience;
