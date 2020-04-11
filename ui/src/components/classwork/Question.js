import React, { Component } from "react";

class Question extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">To Do - Question</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
