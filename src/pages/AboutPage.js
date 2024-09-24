import React from "react";
import "./AboutPage.css";
import profile from "../assets/images/about/about.png";

export default function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="aboutSection">
        <div className="aboutContent">
          <img className="profile" alt="Pauline's Profile" src={profile} />
          <div className="textbox">
            <div className="nameTextbox">
              <h1 className="header">Hi, I'm Pauline!</h1>
            </div>
            <p>
              I'm an aspiring front-end developer interested in the creative
              problem-solving process of web development. <br />
              <br />
              I'm a senior studying Computer Science with a focus on software
              principles and design. On campus I'm involved in the FullStack
              club, where I work as a frontend developer to build websites for
              clubs. I'm also a Teaching Assistant for intro-level computer
              science courses.
              <br />
              <br />
              Outside of classes, I like to take pictures, paint, and solve word
              puzzles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
