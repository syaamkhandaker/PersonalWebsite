import React from "react";
import "./projects.css";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import FormulyticsImg from "./formulyticsimage.png";
import GigsurfIOImg from "./GigsurfIO.png";
import TwilioImg from "./Twilio.png";
import NFTImg from "./NFT.png";

function Projects() {
  return (
    <div id="projects">
      <div className="d-flex justify-content-center experience-header">
        Projects
      </div>
      <div className="project-section">
        <div className="mobile-centering">
          <a href="https://gigsurf.io/">
            <img className="project-image gigsurf-img" src={GigsurfIOImg} />
          </a>
        </div>

        <div>
          <div className="mobile-centering">
            <div className="projects-paragraph-header">GigsurfIO</div>
          </div>
          <div className="mobile-centering">
            <div className="projects-paragraph-text">
              A website to create student/business profiles and job boards for
              students to apply to/onboard jobs and businesses to manage the
              jobs they have released out. Built using React.js, CSS/Bootstrap,
              Node.js, Java Spring, Spring Security, and AWS EC2/DynamoDB/S3.
            </div>
          </div>
          <div className="mobile-centering mobile-icons-section">
            <div className="d-flex gap-3">
              <a
                href="https://github.com/syaamkhandaker/GigsurfWebsite"
                target="_blank"
              >
                <BsGithub
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
                />
              </a>
              <a href="https://gigsurf.io/" target="_blank">
                <BsArrowUpRightSquare
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-section">
        <div className="mobile-centering">
          <a href="https://formulytics.netlify.app/">
            <img className="project-image" src={FormulyticsImg} />
          </a>
        </div>
        <div>
          <div className="mobile-centering">
            <div className="projects-paragraph-header">Formulytics</div>
          </div>
          <div className="mobile-centering">
            <div className="projects-paragraph-text">
              A formula one racing visualization dashboard for viewers to get
              realtime depictions of driver positions and lap times. I helped
              build the frontend using React.js, Bootstrap/CSS, and built the
              backend in Node.js, AWS EC2, and MongoDB. The user notifications
              are made by Twilio Studio for users subscribed to our services.
            </div>
          </div>
          <div className="mobile-centering mobile-icons-section">
            <div className="d-flex gap-3">
              <a
                href="https://github.com/thearyanmittal/formulytics"
                target="_blank"
              >
                <BsGithub
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
                />
              </a>
              <a href="https://formulytics.netlify.app/" target="_blank">
                <BsArrowUpRightSquare
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-section">
        <div className="mobile-centering">
          <a href="https://github.com/syaamkhandaker/TwilioMessagingBot">
            <img className="project-image" src={TwilioImg} />
          </a>
        </div>

        <div>
          <div className="mobile-centering">
            <div className="projects-paragraph-header">
              Twilio Messaging Bot
            </div>
          </div>
          <div className="mobile-centering">
            <div className="projects-paragraph-text">
              A messaging bot built for Gigsurf to notify our 400+ students of
              new work opportunities released by startups. Built using Java
              Spring Boot, AWS EC2/DynamoDB, Twilio APIs, and mapped and
              connected all through Twilio Studio Flow.
            </div>
          </div>
          <div className="mobile-centering mobile-icons-section">
            <div className="d-flex gap-3">
              <a
                href="https://github.com/syaamkhandaker/TwilioMessagingBot"
                target="_blank"
              >
                <BsGithub
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-section">
        <div className="mobile-centering">
          <a href="https://nft.web3atl.io/">
            <img className="project-image" src={NFTImg} />
          </a>
        </div>
        <div>
          <div className="mobile-centering">
            <div className="projects-paragraph-header">
              Web3 ATL NFT Dashboard
            </div>
          </div>
          <div className="mobile-centering">
            <div className="projects-paragraph-text">
              A NFT Dashboard for attendees to claim personalized NFTs based on
              the role they played at the conference. Built out multiple routes
              for both admins and general use in React.js, CSS/Bootstrap, a
              connection to Firebase backend, and with the Metamask API.
            </div>
          </div>
          <div className="mobile-centering mobile-icons-section">
            <div className="d-flex gap-3">
              <a
                href="https://github.com/syaamkhandaker/Web3ATLNFT"
                target="_blank"
              >
                <BsGithub
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
                />
              </a>
              <a href="https://nft.web3atl.io/" target="_blank">
                <BsArrowUpRightSquare
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer icon-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
