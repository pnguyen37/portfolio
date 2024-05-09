import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LinkedInLogo from "../assets/images/home/LinkedIn.png";
import GmailLogo from "../assets/images/home/Gmail.png";

export default function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <p>Let's Get In Touch!</p>
        <div className="footerLinks">
          <a href="https://www.linkedin.com/in/pauline-nguyen-00506b252/">
            <div className="logoCircle">
              <img src={LinkedInLogo} alt="LinkedIn logo"></img>
            </div>
          </a>
          <a href="mailto: pauline_nguyen@brown.edu">
            <div className="logoCircle">
              <img src={GmailLogo} alt="Gmail logo"></img>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
