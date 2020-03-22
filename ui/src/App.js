/*import React from "react";
import NavBar from "../src/forms/NavBar";
import "./App.css";
import "../src/forms/css/main.css";
import AdminLogin from "../src/forms/admin/AdminLogin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <AdminLogin />
      </div>
      <Switch>
        <Route path="/NavBar" component={NavBar} />
      </Switch>
    </Router>
  );
}

export default App;
*/

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./main.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Student from "./components/Student";
import ResultEntry from "./components/ResultEntry";
import ViewInternal1Results from "./components/admin/ViewInternal1Results";
import ViewInternal2Results from "./components/admin/ViewInternal2Results";
import ViewInternal3Results from "./components/admin/ViewInternal3Results";
import FinalResult from "./components/admin/FinalResult";
import student_page_header from "../src/images/student_page.jpg";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <img src={student_page_header} alt="a" width="100%" height="180" />
          <Route exact path="/" component={Login} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/ResultEntry" component={ResultEntry} />
            <Route exact path="/FinalResult" component={FinalResult} />
            <Route
              exact
              path="/ViewInternal1Results"
              component={ViewInternal1Results}
            />
            <Route
              exact
              path="/ViewInternal2Results"
              component={ViewInternal2Results}
            />
            <Route
              exact
              path="/ViewInternal3Results"
              component={ViewInternal3Results}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
