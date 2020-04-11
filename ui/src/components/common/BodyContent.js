import React, { Component } from "react";

import Login from "../Login";
import Profile from "../Profile";
import Student from "../student/Student";
import ResultEntry from "../admin/ResultEntry";
import ViewInternalResults from "../admin/ViewInternalResults";
import FinalResult from "../admin/FinalResult";
import Department from "../department/Department";
import Subject from "../subject/Subject";
import Material from "../classwork/Material";
import Staff from "../staff/Staff";
import Question from "../classwork/Question";

import { HashRouter as Router, Route } from "react-router-dom";
class BodyContent extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/ResultEntry" component={ResultEntry} />
          <Route exact path="/FinalResult" component={FinalResult} />
          <Route exact path="/Department" component={Department} />
          <Route exact path="/Subject" component={Subject} />
          <Route exact path="/Material" component={Material} />
          <Route exact path="/Staff" component={Staff} />
          <Route exact path="/Question" component={Question} />

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
