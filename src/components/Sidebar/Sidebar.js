import React from "react";
import { Component } from "react";
import "./Sidebar.css";
// import {Projects} from ''

function Sidebar(params) {
  return (
    <div class="sidebar">
      <h4>PROJECT MANAGEMENT SYSTEM</h4>
      {/* <div className="buttons"> */}
      <button className="addproject" type="submit">
        Add Project
      </button>
      <button className="btn" id="signout">
        Sign Out
      </button>
      {/* </div> */}
    </div>
  );
}

export default Sidebar;
