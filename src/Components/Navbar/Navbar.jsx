import React from "react";
import "./Navbar.scss";

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
        <a href="#home">
          <img src="https://i.ibb.co/vwTXTFW/Phg.png" alt="Phg" border="0" />
        </a>
      </div>
      <div className="navbar__content">
        <a href="#about">
          <div />
          <h3>about</h3>
        </a>
        <a href="#skills">
          <div />
          <h3>skills</h3>
        </a>
        <a href="#projects">
          <div />
          <h3>projects</h3>
        </a>
        <a href="#footer">
          <div />
          <h3>contact</h3>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
