import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link className="navText" to="/">
          Pauline Nguyen
        </Link>
      </div>
      <div className="navLinks">
        <Link className="navText" to="/">
          Work
        </Link>
        <Link className="navText" to="/about">
          About
        </Link>
        <a className="navText" href="">
          {" "}
          Resume{" "}
        </a>
      </div>
    </nav>
  );
}
