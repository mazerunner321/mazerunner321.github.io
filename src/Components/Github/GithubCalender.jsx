import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import React from "react";
import Stats from "./Stats";
import { motion } from "framer-motion";
import "./Calender.scss";

const GithubCalender = () => {
  return (
    <div className="gitcalender">
      <h2>Github Calender</h2>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 1 }}
        id="call"
      >
        <GitHubCalendar
          username="mazerunner321"
          style={{ margin: "auto" }}
          blockSize={12}
          fontSize={15}
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
