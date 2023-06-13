import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div id="skill" className="skills">
        <div className="heading">
          <h1>Skills, Languages & Tools</h1>
        </div>
        <div>
          <div className="frontend">
            <div>
              <h2>Frontend</h2>
            </div>
            <div className="skill_imgs">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg"
                alt=""
              />
              <img
                src="https://camo.githubusercontent.com/179d66ab2b0321726c88a586c4ad38802e7113a3c98c6fd3f0156c01c98cfd14/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67"
                alt=""
              />
            </div>
          </div>
          <div className="backend">
            <div>
              <h2>Backend</h2>
            </div>
            <div className="skill_imgs">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original-wordmark.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original-wordmark.svg"
                alt=""
              />
            </div>
          </div>
          <div className="tools">
            <div>
              <h2>Tools</h2>
            </div>
            <div className="skill_imgs">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original-wordmark.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original-wordmark.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-plain.svg"
                alt=""
              />
              <img
                src="https://aboutjorismichel.com/assets/icons/netlifyIcon.png"
                alt=""
              />
              <img
                src="https://karmanivero.us/assets/images/logo-vercel.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

{
  /* <div className="skill_imgs">
  {frontend.map((skill) => (
    <img src={skill.src} />
  ))}
</div>; */
}
