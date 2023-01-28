import React from "react";
import { motion } from "framer-motion";
import "./Projects.scss";
import { FaRegEye } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const [rot1, setRot1] = React.useState(false);
  const [rot2, setRot2] = React.useState(false);
  const [rot3, setRot3] = React.useState(false);
  const [rot4, setRot4] = React.useState(false);
  const [rot5, setRot5] = React.useState(false);
  const [rot6, setRot6] = React.useState(false);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="projectsdiv"
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <motion.img src="https://i.ibb.co/DCmkWXQ/Screenshot-2023-01-14-132048.jpg" />
          <br />
          <section>
            <h1>SkinCare</h1>
            <p>
              An online destination for all your skin care needs. With a wide
              range of products from top brands, you can find everything from
              moisturizers to serums to sunscreens and what not. It's easy to
              navigate and has a user-friendly interface, making this the
              perfect one-stop for all you skincare needs.
            </p>
            <span>
              <h4>Tech Stack:</h4>
              <h5> HTML | CSS | JavaScript </h5>
            </span>
          </section>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: rot1 ? 360 : 0 }}
              onClick={() => setRot1(!rot1)}
            >
              <a href="https://heroic-gumdrop-b7fa02.netlify.app/">
                <p>
                  <FaRegEye />
                </p>
              </a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: rot2 ? 360 : 0 }}
              onClick={() => setRot2(!rot2)}
            >
              <a href="https://github.com/shahabhi095/likely-cough-9107">
                <p>
                  <BsGithub />
                </p>
                {/* <p>GitHub</p> */}
              </a>
            </motion.button>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <motion.img src="https://i.ibb.co/0rpxndF/Screenshot-2023-01-14-132133.jpg" />
          <br />
          <section>
            <h1>KFC</h1>
            <p>
              It is a fast food restaurant chain that specialized in fried
              chicked, founded by Colonel Harland Sanders in 1952. A perfect
              place to fulfill your cravings.
            </p>
            <span>
              <h4>Tech Stack:</h4>
              <h5> HTML | CSS | JavaScript </h5>
            </span>
          </section>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: rot3 ? 360 : 0 }}
              onClick={() => setRot3(!rot3)}
            >
              <a href="https://gorgeous-peony-a09cff.netlify.app/">
                <p>
                  <FaRegEye />
                </p>
                {/* View Project */}
              </a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: rot4 ? 360 : 0 }}
              onClick={() => setRot4(!rot4)}
            >
              <a href="https://github.com/mazerunner321/first-project">
                <p>
                  <BsGithub />
                </p>
                {/* GitHub */}
              </a>
            </motion.button>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <motion.img src="https://i.ibb.co/k3ptzwg/Screenshot-2023-01-21-163745.jpg" />
          <br />
          <section>
            <h1>P-AI</h1>
            <p>
              P-AI is clone of a large language model developed by OpenAI called
              chatGPT. It's designed to be used in natural language processing
              applications, such as chatbots, language translation, and text
              summarization.
            </p>
            <span>
              <h4>Tech Stack:</h4>
              <h5> HTML | CSS | JavaScript | Vite | NodeJs | OpenAI</h5>
            </span>
          </section>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: rot5 ? 360 : 0 }}
              onClick={() => setRot5(!rot5)}
            >
              <a href="https://p-ai.vercel.app/">
                <p>
                  <FaRegEye />
                </p>
                {/* View Project */}
              </a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: rot6 ? 360 : 0 }}
              onClick={() => setRot6(!rot6)}
            >
              <a href="https://github.com/mazerunner321/P-AI">
                <p>
                  <BsGithub />
                </p>
                {/* GitHub */}
              </a>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
