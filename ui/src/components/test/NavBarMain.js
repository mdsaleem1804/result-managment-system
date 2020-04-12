import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NavBarMain extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    console.log(localStorage.usertoken);
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/SignIn" className="nav-link">
            ResultManagmentSystem
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Student" className="nav-link">
            Student
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ResultEntry" className="nav-link">
            ResultEntry
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/ViewInternalResults/1" className="nav-link">
            Internal1Results
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ViewInternalResults/2" className="nav-link">
            Internal2Results
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ViewInternalResults/3" className="nav-link">
            Internal3Results
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/FinalResult" className="nav-link">
            FinalResult
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg  navbar-light bg-primary rounded font-weight-bold">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBarMain);
