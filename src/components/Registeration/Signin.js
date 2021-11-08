import React, { useState, useEffect } from "react";
import "./Register.css";
import InputRow from "./InputRow";
// import RegisteredStudents from './Register'
// import { StudentsData } from "./Register";
import { Link } from "react-router-dom";

function SignInForm(props) {
  console.log(props.Students);
  const [StudentsData, setStudentsData] = useState(props.Students);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const SettingUserName = (e) => {
    setUsername(e.target.value);
  };

  const SettingPassword = (e) => {
    setPassword(e.target.value);
  };

  var FindData = () => {
    console.log(username);
    const result = StudentsData.filter(
      (student) =>
        student.FullName === username && student.Password === password
    );
    if (result.length === 0) {
      alert("Login Unsuccessful");
    } else {
      alert("Login Successful");
    }
  };

  return (
    <div div className="SignInForm">
      <InputRow
        className="username"
        htmlFor="username"
        title="UserName"
        name="username"
        onChange={SettingUserName}
      />
      <InputRow
        className="password"
        htmlFor="password"
        title="Password "
        name="password"
        onChange={SettingPassword}
      />
      <Link to={"/dashboard"}>
        <button
          type="submit"
          className="btn"
          onClick={() => {
            FindData();
          }}
        >
          Submit
        </button>
      </Link>
      <Link to={"/register"}>
        <button type="submit" className="btn1">
          SignUp
        </button>
      </Link>
    </div>
  );
}
export default SignInForm;
