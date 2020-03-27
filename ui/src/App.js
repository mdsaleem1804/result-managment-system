import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/main.css";
import Navbar from "./components/NavBarMain";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Student from "./components/Student";
import ResultEntry from "./components/admin/ResultEntry";
import ViewInternalResults from "./components/admin/ViewInternalResults";
import FinalResult from "./components/admin/FinalResult";
import student_page_header from "../src/images/student_page.jpg";
import { Container } from "reactstrap";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <Navbar />
            <img src={student_page_header} alt="a" width="100%" height="180" />
            <Route exact path="/" component={Login} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/student" component={Student} />
              <Route exact path="/ResultEntry" component={ResultEntry} />
              <Route exact path="/FinalResult" component={FinalResult} />
              <Route
                exact
                path="/ViewInternalResults/:id"
                component={ViewInternalResults}
              />
            </div>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
