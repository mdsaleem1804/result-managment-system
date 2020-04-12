import React, { Component } from "react";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      errors: {},
    };
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">
              WELCOME TO THE RESULT MANAGMENT SYSTEM
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
