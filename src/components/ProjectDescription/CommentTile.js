import React from "react";
import "./ProjectDescription.css";
import { Avatar } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function CommentTile(props) {
  // var newDate = new Date();
  // newDate = ''
  return (
    <div class="commentTile">
      <div className="uppericons">
      <Avatar className="Avatar"></Avatar>
      <p id="ProjectName">{"omar"}</p>
      <p id="ProjectDate">{"12-10-2020"}</p>
      <EditIcon className="editicon"></EditIcon>
      <DeleteIcon className="delete"></DeleteIcon>
      </div>
      <p>{"Lorem Ipsum"}</p>
    </div>
  );
}

// export default DashBoard;
export default CommentTile;
