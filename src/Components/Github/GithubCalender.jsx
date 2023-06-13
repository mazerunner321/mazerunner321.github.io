import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import React from "react";
import Stats from "./Stats";
import { motion } from "framer-motion";
import "./Calender.css";

const GithubCalender = () => {
  return (
    <div id="git" className="gitcalender">
      <div className="heading">
        <h1>Github Calender</h1>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
        id="call"
      >
        <GitHubCalendar
          username="mazerunner321"
          style={{ margin: "auto" }}
          blockSize={12}
          fontSize={16}
          blockMargin={8}
          color={"darkblue"}
        >
          <div>
            <ReactTooltip delayShow={20} html />
          </div>
        </GitHubCalendar>
        <Stats />
      </motion.div>
    </div>
  );
};

export default GithubCalender;
