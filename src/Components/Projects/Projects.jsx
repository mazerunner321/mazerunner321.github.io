import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div id="projects" className="project">
        <div className="heading">
          <h1>projects</h1>
        </div>

        <div className="projects_container">
          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="project_one"
          >
            <div className="img_div">
              <img
                src="https://i.ibb.co/6wGtxFY/Screenshot-2023-03-07-124308.png"
                alt="bookwik_ss"
              />
            </div>
            <div className="content_div">
              <div>
                <section>
                  <h2>BookWik</h2>
                  <p>
                    Bookwik.com is ReactJS e-commerce web application that
                    allows you to buy books online with effortable prices.
                  </p>
                </section>
                <section>
                  <h2>Tech Stack :</h2>
                  <h4>
                    ReactJS | ChakraUI | JavaScript | MongoDB | NodeJs | Express
                    | Mongoose
                  </h4>
                </section>
              </div>
              <div>
                <motion.button whileHover={{ scale: 1.1 }}>
                  <a target="blank" href="https://bookwik-project.vercel.app/">
                    <p>
                      <FaRegEye />
                    </p>
                  </a>
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }}>
                  <a
                    target="blank"
                    href="https://github.com/SantoshSharma09/overjoyed-seashore-212"
                  >
                    <p>
                      <BsGithub />
                    </p>
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ x: [500, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="project_two"
          >
            <div className="img_div">
              <img
                src="https://i.ibb.co/DCmkWXQ/Screenshot-2023-01-14-132048.jpg"
                alt="skincare_ss"
              />
            </div>
            <div className="content_div">
              <div>
                <section>
                  <h2>SkinCare</h2>
                  <p>
                    An online destination for all your skin care needs. With a
                    wide range of products from top brands, you can find
                    everything from moisturizers to serums to sunscreens and
                    what not. It's easy to navigate and has a user-friendly
                    interface, making this the perfect one-stop for all you
                    skincare needs.
                  </p>
                </section>
                <section>
                  <h2>Tech Stack :</h2>
                  <h4>HTML | CSS | JavaScript</h4>
                </section>
              </div>
              <div>
                <motion.button whileHover={{ scale: 1.1 }}>
                  <a
                    target="blank"
                    href="https://heroic-gumdrop-b7fa02.netlify.app/"
                  >
                    <p>
                      <FaRegEye />
                    </p>
                  </a>
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }}>
                  <a
                    target="blank"
                    href="https://github.com/shahabhi095/likely-cough-9107"
                  >
                    <p>
                      <BsGithub />
                    </p>
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="project_three"
          >
            <div className="img_div">
              <img
                src="https://i.ibb.co/0rpxndF/Screenshot-2023-01-14-132133.jpg"
                alt="kfc_ss"
              />
            </div>
            <div className="content_div">
              <div>
                <section>
                  <h2>KFC</h2>
                  <p>
                    It is a fast food restaurant chain, specialized in fried
                    chicked, founded by Colonel Harland Sanders in 1952. A
                    perfect place to fulfill your cravings.
                  </p>
                </section>
                <section>
                  <h2>Tech Stack :</h2>
                  <h4>HTML | CSS | JavaScript</h4>
                </section>
              </div>
              <div>
                <motion.button whileHover={{ scale: 1.1 }}>
                  <a
                    target="blank"
                    href="https://gorgeous-peony-a09cff.netlify.app/"
                  >
                    <p>
                      <FaRegEye />
                    </p>
                  </a>
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }}>
                  <a
                    target="blank"
                    href="https://github.com/mazerunner321/first-project"
                  >
                    <p>
                      <BsGithub />
                    </p>
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
