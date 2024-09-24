import React from "react";
import "./HomePage.css";
import ProjectCard from "../components/ProjectCard";
import profile from "../assets/images/home/profile_picture.jpg";
import flowers from "../assets/images/home/landing-image.png";
import redesignCover from "../assets/images/home/redesign-cover.png";
import unoCover from "../assets/images/home/uno-cover.png";
import litpathCover from "../assets/images/home/litpath-cover.png";

// const profile = process.env.PUBLIC_URL + "/images/profile_picture.jpg";
const skill1 = ["HTML", "CSS", "Figma"];
export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="landing">
        <div className="landingContent">
          <div className="textbox">
            <div className="nameTextbox">
              <h1 className="name">
                Hi, I'm <h1 className="name underline">Pauline Nguyen</h1>
              </h1>
            </div>
            <h2>
              I'm a front-end developer studying Computer Science at Brown
              University. I'm interested in using my knowledge of software and
              design to make user-friendly applications.
            </h2>
            <h3>Check out my work below! ↓</h3>
          </div>
          <img className="profile" alt="Pauline's Profile" src={flowers} />
        </div>
      </div>
      <div className="workSection" id="projects">
        <div className="workContent">
          <div className="header">
            <h1 className="headerText">Case Studies</h1>
          </div>
          <div className="workGrid">
            <ProjectCard
              name="East Side Pockets Redesign"
              page="redesign"
              img={redesignCover}
              alt="East Side Pockets design cover"
              desc="Redesign of a restaurant ordering page to be more responsive"
              skills="HTML | CSS | Figma | Redesign "
            />
            <ProjectCard
              name="Uno Health Application Design"
              page="unohealth"
              img={unoCover}
              alt="Uno Health design cover"
              desc="Improving the application process for a Medicare enrollment company"
              skills="Figma | Prototyping"
            />
            <ProjectCard
              name="Lit Path Website"
              page="litpath"
              img={litpathCover}
              alt="Lit Path design cover"
              desc="Implementation of a web app for a non-profit organization that provides partial scholarships 
              for psychotherapy"
              skills="React | JavaScript | HTML | CSS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
