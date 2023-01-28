import React from "react";
import { motion } from "framer-motion";
import "./Skills.scss";

const Skills = () => {
  const imgs = [
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jest/jest-plain.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original-wordmark.svg",
    },
    {
      src: "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-plain.svg",
    },
  ];

  return (
    <div className="skills">
      <h2>Skills, Languages & Tools</h2>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="motionskill"
      >
        {/* <marquee behavior="scroll" direction="left" width="100%"> */}
        {imgs &&
          imgs.map((img) => {
            return (
              <motion.img
                drag
                dragConstraints={{
                  top: 20,
                  bottom: 10,
                  right: 30,
                  left: -20,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                src={img.src}
              />
            );
          })}
        {/* </marquee> */}
      </motion.div>
    </div>
  );
};

export default Skills;
