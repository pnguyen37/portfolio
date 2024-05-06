import React from "react";
import "./HomePage.css";
import ProjectCard from "../components/ProjectCard";
import profile from "../assets/images/profile_picture.jpg";
import redesignCover from "../assets/images/redesign-cover.png";
import unoCover from "../assets/images/uno-cover.png";
import movieCover from "../assets/images/movie-cover.png";

// const profile = process.env.PUBLIC_URL + "/images/profile_picture.jpg";

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="landing">
        <div className="landingContent">
          <div className="textbox">
            <h1 className="name">Hi! I'm Pauline Nguyen</h1>
            <h2>
              I'm a front-end developer studying Computer Science at Brown
              University. I'm interested in using my knowledge of software and
              design to make user-friendly applications.
            </h2>
            <h3>Check out my work below ↓</h3>
          </div>
          <img className="profile" alt="Pauline's Profile" src={profile} />
        </div>
      </div>
      <div className="workSection" id="projects">
        <div className="workContent">
          <div className="header">
            <h1>Projects</h1>
          </div>
          <div className="workGrid">
            <ProjectCard
              name="Responsive Redesign"
              page="redesign"
              img={redesignCover}
            />
            <ProjectCard name="Uno Health" page="unohealth" img={unoCover} />
            <ProjectCard
              name="Movie Tracker"
              page="movie-tracker"
              img={movieCover}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
