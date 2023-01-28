import React from "react";

const Stats = () => {
  return (
    <div>
      <div style={{ width: "50%", margin: "auto", marginTop: "50px" }}>
        <a href="https://github.com/mazerunner321%22%3E">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=mazerunner321&theme=dark&border_radius=10"
            alt=""
            width="700px"
          />
        </a>
      </div>

      <div
        style={{
          margin: "auto",
          display: "flex",
          width: "60%",
          height: "300px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a href="https://github.com/mazerunner321%22%3E">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mazerunner321&langs_count=8&theme=dark"
            alt=""
          />
        </a>
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
