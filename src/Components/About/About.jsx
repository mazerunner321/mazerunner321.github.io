import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <section className="description">
          <p>
            A passionate{" "}
            <span className="gradient">
              <h3>Full Stack Developer</h3>
            </span>
            , coding and hands-on experience developing websites using HTML,
            CSS, Javascript, React, Redux, NodeJs, MongoDB and Express. Adept at
            contributing to a highly collaborative work environment, finding
            solution and excellent at communicating things. Looking forward to
            opportunities that can bring more challenges and learnings to
            leverage and hone skills.
          </p>
        </section>
        <section className="photo">
          <img
            src="https://i.ibb.co/DwhCGXh/IMG-20230112-145442-02-removebg-preview-removebg-preview.png"
            alt="IMG-20230112-145442-02-removebg-preview-removebg-preview"
          />
        </section>
      </div>
      <section className="resume">
        <a
          href="https://drive.google.com/file/d/1-cPHg_xdVjrLEz7mvYOw0-Wv3Xi3yV5a/view?usp=share_link"
          target={"_blank"}
          download="resume.pdf"
        >
          <button className="button glow-effect" data-glow-offset="true">
            Resume
            <svg className="glow-container">
              <rect
                pathLength="100"
                stroke-linecap="round"
                className="glow-blur"
              ></rect>
              <rect
                pathLength="100"
                stroke-linecap="round"
                className="glow-line"
              ></rect>
            </svg>
          </button>
        </a>
      </section>
    </div>
  );
};

export default About;
