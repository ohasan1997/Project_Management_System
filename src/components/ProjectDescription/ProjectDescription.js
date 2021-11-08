import React from "react";
import "./ProjectDescription.css";
import { Avatar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CommentTile from "./CommentTile";

function ProjectDescription(props) {
  return (
    <div class="projectDescription">
      <ArrowBackIosIcon />
      <div className="Description">
        <Avatar></Avatar>
        <div className="Details">
          <h4>{"Omar"}</h4>
          <p>{"24-01-2021"}</p>
        </div>
      </div>
      <div className="projectDetails">
        <h4>Project Details</h4>
        <p>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </p>
      </div>
      <div className="comments">
        <h4>Comments</h4>
        <input placeholder="Add comment" />
        <div className="buttons">
          <button className="add" type="submit">
            Save
          </button>
          <button className="cancel" type="submit">
            Cancel
          </button>
        </div>
        <div className="commentTiles">
          <CommentTile />
          <CommentTile />
          <CommentTile />
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
// export { Projects };
