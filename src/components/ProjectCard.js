import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <Link to={props.page}>
        <img alt={props.alt} src={props.img} />
        <div className="textbox">
          <h2 className="bold">{props.name}</h2>
          <p>{props.desc}</p>
          <p className="skillsText">{props.skills}</p>
        </div>
      </Link>
    </div>
  );
}
