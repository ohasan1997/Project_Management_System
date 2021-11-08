import React, { useState } from "react";
import "./ProjectCreation.css";
import { Link } from "react-router-dom";

const LabelsList = [
  {
    className: "ProjectName",
    title: "Project Name ",
    Id: "projectname"
  },
  {
    className: "ProjectDetail",
    title: "Project Detail ",
    Id: "projectdetail"
  },
  {
    className: "ProjectLogo",
    title: "Project Logo ",
    Id: "projectlogo"
  }
];

const Projects = [
  { name: "FYP1", Details: "React App", Logo: "xyz", date: "19-12-2020" },
  { name: "FYP2", Details: "IOT", Logo: "xyz", date: "10-11-2021" },
  { name: "FYP3", Details: "AI", Logo: "xyz", date: "1-11-2019" },
  { name: "FYP4", Details: "App", Logo: "xyz", date: "31-02-2018" }
];

function ProjectCreation() {
  const [projects, setProject] = useState(Projects);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [logo, setLogo] = useState("");
  const [date, setDate] = useState("");

  const settingDate = () => {
    var today = new Date(),
      date = `${today.getDate()}-${
        today.getMonth() + 1
      }-${today.getFullYear()}`;
    setDate(date);
  };

  const newproject = {
    Name: name,
    Details: details,
    Logo: logo,
    Date: date
  };

  function updateValue(e) {
    settingDate();
    switch (e.target.name) {
      case "projectname": {
        setName(e.target.value);
        console.log(name);
        break;
      }

      case "projectdetail":
        setDetails(e.target.value);
        console.log(details);
        break;

      case "projectlogo":
        setLogo(e.target.value);
        console.log(logo);
        break;

      default:
        break;
    }
  }

  return (
    <div class="ProjectCreation">
      <h4>Add Project</h4>
      <div class="Project">
        {LabelsList.map((Label) => (
          <div className={Label.className}>
            <label id={Label.Id}>{Label.title} </label>
            <input
              id={Label.Id}
              type="text"
              name={Label.Id}
              onChange={updateValue}
            />
          </div>
        ))}
        <button className="browse" type="submit">
          Browse
        </button>
        <div className="buttons">
          <button
            className="add"
            type="submit"
            onClick={() => {
              setProject([...projects, newproject]);
              console.log(projects);
            }}
          >
            Add Project
          </button>
          <Link to="/dashboard">
            <button className="cancel" type="submit">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCreation;
export { Projects };
