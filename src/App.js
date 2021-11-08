import React, { useState } from "react";
import "./styles.css";
import Register from "./components/Registeration/Register";
import SignInForm from "./components/Registeration/Signin";
import Sidebar from "./components/Sidebar/Sidebar";
import DashBoard from "./components/DashBoard/DashBoard";
import ProjectCreation from "./components/ProjectCreation/ProjectCreation";
// import {Projects} from './components/DashBoard/DashBoard'
// StudentsData = React.createContext(StudentsData);
import ProjectDescription from "./components/ProjectDescription/ProjectDescription";
import { Students } from "./components/Registeration/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  console.log(Students);
  // const [StudentsData, setStudentsData] = useState(Students);
  // console.log(StudentsData)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <SignInForm Students={Students} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <div className="app-page">
              <Sidebar />
              <DashBoard />
            </div>
          </Route>
          <Route path="/creation">
            <div className="app-page">
              <Sidebar />
              <ProjectCreation />
            </div>
          </Route>
          <Route path="/details">
            <div className="app-page">
              <Sidebar />
              <ProjectDescription />
            </div>
          </Route>
        </Switch>
      </Router>

      {/* <h1>Hello WORLD</h1> */}
      {/* <div className="app-page">
        <Sidebar />
        <DashBoard />
      </div> */}
      {/* <Register />
      <SignIn StudentsData={StudentsData} /> */}
    </div>
  );
}
