import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, Dropdown, Icon } from "rsuite";
class HeaderNavBarMain extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "./#/";
  }
  render() {
    const loginRegLink = (
      <div>
        <Nav>
          <Nav.Item href="./#/Login" icon={<Icon icon="home" />}>
            Login
          </Nav.Item>
        </Nav>
      </div>
    );
    const userLink = (
      <div>
        <Nav pullRight>
          <Dropdown title="Results">
            <Dropdown.Item href="./#/ViewInternalResults/1">
              Internal1Results
            </Dropdown.Item>
            <Dropdown.Item href="./#/ViewInternalResults/2">
              Internal2Results
            </Dropdown.Item>
            <Dropdown.Item href="./#/ViewInternalResults/3">
              Internal3Results
            </Dropdown.Item>
          </Dropdown>
          <Nav.Item href="./#/FinalResult">FinalResult</Nav.Item>
          <Nav.Item
            icon={<Icon icon="sign-out" />}
            onClick={this.logOut.bind(this)}
          >
            Logout
          </Nav.Item>
        </Nav>
      </div>
    );
    return (
      <Navbar appearance="inverse">
        <Navbar.Body>
          {localStorage.usertoken ? userLink : loginRegLink}
        </Navbar.Body>
      </Navbar>
    );
  }
}

export default withRouter(HeaderNavBarMain);
