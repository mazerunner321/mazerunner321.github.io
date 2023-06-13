import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="normalNav">
        <section id="name">
          <Link to="about" smooth duration={1000}>
            <h1>PrajwalHG</h1>
          </Link>
        </section>
        <section id="content">
          <h1>
            <Link to="about" smooth duration={1000}>
              about
            </Link>
          </h1>
          <h1>
            <Link to="skill" smooth duration={1000}>
              skills
            </Link>
          </h1>
          <h1>
            <Link to="project" smooth duration={1000}>
              projects
            </Link>
          </h1>
          <h1>
            <Link to="contact" smooth duration={1000}>
              contact
            </Link>
          </h1>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
