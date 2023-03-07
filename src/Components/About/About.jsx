import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const About = () => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <div id="about" className="about">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="motionabout"
      >
        <div className="about__me">
          <div className="name">
            <h1>
              Hi, I'm{" "}
              <span>
                <FaLessThan />
              </span>
              <h1
                onMouseOver={() => setToggle(false)}
                onMouseOut={() => setToggle(true)}
              >
                {toggle ? "PrajwalHG" : "A Full Stack Developer"}{" "}
              </h1>
              <span>
                <FaGreaterThan />
              </span>
            </h1>
          </div>
          <div className="description">
            <p>
              Meticulous, passionate and an ambitious Full Stack Developer,
              coding and hands-on experience developing websites using HTML,
              CSS, Javascript, React, Redux, NodeJs, MongoDB and Express. Adept
              at contributing to a highly collaborative work environment,
              finding solution and excellent at communicating things. Looking
              forward to opportunities that can bring more challenges and
              learnings to leverage and hone skills.
            </p>
            {/* <button>
              <a
                href="https://drive.google.com/file/d/1-cPHg_xdVjrLEz7mvYOw0-Wv3Xi3yV5a/view?usp=share_link"
                download
                target={"_blank"}
              >
                Resume
              </a>
            </button> */}
            <a
              href="https://drive.google.com/file/d/1-cPHg_xdVjrLEz7mvYOw0-Wv3Xi3yV5a/view?usp=share_link"
              target={"_blank"}
              download
            >
              <button>Resume</button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="motionimg"
      >
        <img
          src="https://i.ibb.co/DwhCGXh/IMG-20230112-145442-02-removebg-preview-removebg-preview.png"
          alt="IMG-20230112-145442-02-removebg-preview-removebg-preview"
        />
      </motion.div>
    </div>
  );
};

export default About;
