import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <Link to={props.page}>
      <div className="ProjectCard">
        <img alt={props.alt} src={props.img}/>
        <h2>{props.name}</h2>
      </div>
    </Link>
  );
}
