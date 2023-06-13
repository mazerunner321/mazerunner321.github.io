import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { GrMail, GrLinkedin, GrGithub } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="footer">
        <div className="mainfooterdiv">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1], scale: [0.9, 1] }}
            transition={{ duration: 1 }}
            className="footer1"
          >
            <h1>We could collaborate!</h1>
            <p>Got an idea? Get in touch and let's work together...</p>
          </motion.div>

          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1], scale: [0.9, 1] }}
            transition={{ duration: 1.5 }}
            className="footer2"
          >
            <div>
              <a href="mailto:prajwalhg321@gmail.com">
                <p>
                  <GrMail />
                </p>
              </a>
              <a href="https://www.linkedin.com/in/prajwal-hg-83a77a242/">
                <p>
                  <GrLinkedin />
                </p>
              </a>
              <a href="https://github.com/mazerunner321">
                <p>
                  <GrGithub />
                </p>
              </a>
              <a href="https://discord.com/channels/1013451958775992360/1013451958775992363">
                <p>
                  <FaDiscord />
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
