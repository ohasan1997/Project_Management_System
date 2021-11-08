import React, { useContext, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import InputRow from "./InputRow";
import "./Register.css";
import { Link } from "react-router-dom";

const Students = [
  {
    FullName: "OmarHasan",
    Email: "omarh9977@gmail.com",
    Password: "123456"
  },
  {
    FullName: "OsmanHasan",
    Email: "osmanh9988@gmail.com",
    Password: "194563"
  },
  {
    FullName: "AliHasan",
    Email: "alih9988@gmail.com",
    Password: "345678"
  }
];

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [StudentData, setStudentsData] = useState(Students);

  const Student = {
    FullName: fullName,
    Email: setEmail,
    Password: setPassword
  };

  var RegisterData = [
    {
      className: "username",
      htmlFor: "username",
      title: "Full Name ",
      name: "username",
      value: this.fullName
      // state: updateState
    },
    {
      className: "email",
      htmlFor: "email",
      title: "Email ",
      name: "email",
      value: this.email
    },
    {
      className: "password",
      htmlFor: "password",
      title: "Password ",
      name: "password",
      value: this.password
    }
  ];

  function updateValue(e) {
    switch (e.target.name) {
      case "username": {
        setFullName(e.target.value);
        console.log(fullName);
        break;
      }

      case "email":
        setEmail(e.target.value);
        console.log(email);
        break;

      case "password":
        setPassword(e.target.value);
        console.log(password);
        break;

      default:
        break;
    }
  }

  return (
    <div className="RegisterationForm">
      {RegisterData.map((Data, index) => {
        return (
          <InputRow
            key={index}
            className={Data.className}
            htmlFor={Data.htmlFor}
            title={Data.title}
            name={Data.name}
            onChange={updateValue}
            value={Data.value}
          />
        );
      })}
      <Link to={"/signin"}>
        <button
          type="submit"
          className="btn"
          onClick={() => {
            setStudentsData([...Students, Student]);
            console.log(Students);
          }}
        >
          Submit
        </button>
      </Link>
    </div>
  );
}

export default Register;
export { Students };
