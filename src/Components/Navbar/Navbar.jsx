import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  // To change bg color on scroll down:
  const [color, setColor] = React.useState(false);

  const changeColor = () => {
    if (window.scrollY > 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <nav className={color ? "navbarbg" : "navbar"}>
      <div className="navbar__img">
        <Link to="about">
          <img src="https://i.ibb.co/vwTXTFW/Phg.png" alt="Phg" border="0" />
        </Link>
      </div>
      <div className="navbar__content">
        <Link to="about" smooth duration={500}>
          <div />
          <h3>about</h3>
        </Link>
        <Link to="skills" smooth duration={500}>
          <div />
          <h3>skills</h3>
        </Link>
        <Link to="projects" smooth duration={500}>
          <div />
          <h3>projects</h3>
        </Link>
        <Link to="footer" smooth duration={500}>
          <div />
          <h3>contact</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
