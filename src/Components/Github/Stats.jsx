import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats_main_div">
      <div className="inside_stats">
        <a href="https://github.com/mazerunner321%22%3E">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=mazerunner321&theme=dark&border_radius=10"
            alt=""
          />
        </a>
      </div>

      <div>
        <a href="https://github.com/mazerunner321%22%3E">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mazerunner321&langs_count=8&theme=dark"
            alt=""
          />
        </a>
      </div>

      <div className="inside_stats">
        <a href="https://github.com/mazerunner321%22%3E">
          <img
            src="https://github-readme-stats.vercel.app/api?username=mazerunner321&show_icons=true&count_private=true&theme=dark"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
