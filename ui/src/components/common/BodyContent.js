import React, { Component } from "react";

import Login from "../Login";
import Profile from "../Profile";
import Student from "../Student";
import ResultEntry from "../admin/ResultEntry";
import ViewInternalResults from "../admin/ViewInternalResults";
import FinalResult from "../admin/FinalResult";
import { BrowserRouter as Router, Route } from "react-router-dom";
class BodyContent extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <div>
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
      </div>
    );
  }
}

export default BodyContent;
