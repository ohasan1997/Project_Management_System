import React from "react";
import "./DashBoard.css";
import ProjectTile from "./ProjectTile";

const Projects = [
  { name: "xyz", Details: "FYP", Logo: "xyz", date: "19-12-2014" },
  { name: "xyz", Details: "FYP", Logo: "xyz", date: "19-12-2014" },
  { name: "xyz", Details: "FYP", Logo: "xyz", date: "19-12-2014" },
  { name: "xyz", Details: "FYP", Logo: "xyz", date: "19-12-2014" }
];

function DashBoard() {
  return (
    <div class="DashBoard">
      <h2>Dashboard</h2>
      <div class="ProjectTiles">
        {Projects.map((val) => (
          <ProjectTile name={val.name} date={val.date} />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
export { Projects };
