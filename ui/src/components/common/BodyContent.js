import React, { Component } from "react";

import SignIn from "../SignIn";
import Dashboard from "../Dashboard";
import Student from "../student/Student";
import ResultEntry from "../admin/ResultEntry";
import ViewInternalResults from "../admin/ViewInternalResults";
import FinalResult from "../admin/FinalResult";
import Department from "../department/Department";
import Subject from "../subject/Subject";
import Material from "../classwork/Material";
import Staff from "../staff/Staff";
import Question from "../classwork/Question";
import Footer from "../common/Footer";

import { HashRouter as Router, Route } from "react-router-dom";
class BodyContent extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={SignIn} />
        <div>
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/ResultEntry" component={ResultEntry} />
          <Route exact path="/FinalResult" component={FinalResult} />
          <Route exact path="/Department" component={Department} />
          <Route exact path="/Subject" component={Subject} />
          <Route exact path="/Material" component={Material} />
          <Route exact path="/Staff" component={Staff} />
          <Route exact path="/Question" component={Question} />
          <Route exact path="/Footer" component={Footer} />
          <Route
            exact
            path="/ViewInternalResults/:id"
            component={ViewInternalResults}
          />
        </div>
      </Router>
    );
  }
}

export default BodyContent;
