import React from "react";

import student_page_header from "../forms/student/student_page.jpg";
import { Container, Navbar, Nav } from "react-bootstrap";
import AdminLogin from "./admin/AdminLogin";
import ResultEntry from "./admin/ResultEntry";
import ViewInternal1Results from "./admin/ViewInternal1Results";
import ViewInternal2Results from "./admin/ViewInternal2Results";
import ViewInternal3Results from "./admin/ViewInternal3Results";
import FinalResult from "./admin/FinalResult";
import Student from "./student/Student";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import student_page_header from "../student_page.jpg";
const TopMenu = () => {
  return (
    <Router>
      <Container>
        <img src={student_page_header} alt="a" width="100%" height="100" />
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Result Managment System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={"/Student"}>Add Student</Nav.Link>
              <Nav.Link href={"/ResultEntry"}>ResultEntry</Nav.Link>
              <Nav.Link href={"/ViewInternal1Results"}>
                ViewInternal1Results
              </Nav.Link>
              <Nav.Link href={"/ViewInternal2Results"}>
                ViewInternal2Results
              </Nav.Link>
              <Nav.Link href={"/ViewInternal3Results"}>
                ViewInternal3Results
              </Nav.Link>
              <Nav.Link href={"/FinalResult"}>FinalResult</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <br />
      <Switch>
        <Route exact path="/AdminLogin" component={AdminLogin} />
        <Route exact path="/Student" component={Student} />
        <Route exact path="/ResultEntry" component={ResultEntry} />
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
        <Route exact path="/FinalResult" component={FinalResult} />
      </Switch>
    </Router>
  );
};

export default TopMenu;
