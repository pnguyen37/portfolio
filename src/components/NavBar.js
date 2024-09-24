import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

const resume = process.env.PUBLIC_URL + "files/Pauline_Nguyen_Frontend_Engineer_Resume.pdf";

export default function NavBar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(location.pathname); // Update activePage state when location changes
  }, [location]);

  return (
    <nav>
      <div className="nameText">Pauline Nguyen</div>
      <div className="navLinks">
        <Link
          className={activePage === "/" ? "active navText" : "navText"}
          to="/"
        >
          Work
        </Link>
        <Link
          className={activePage === "/about" ? "active navText" : "navText"}
          to="/about"
        >
          About
        </Link>
        <a className="navText" href={resume} target="_blank">
          Resume{" "}
        </a>
      </div>
    </nav>
  );
}
