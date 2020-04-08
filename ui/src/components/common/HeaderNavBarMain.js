import React, { Component } from "react";

import { Navbar, Nav, Dropdown, Icon } from "rsuite";
class HeaderNavBarMain extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    console.log("logout");
    // this.context.router.push("/");
  }
  render() {
    const loginRegLink = (
      <div>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />}>
            Result Managment System
          </Nav.Item>
        </Nav>
      </div>
    );
    const userLink = (
      <div>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
          <Nav.Item href="/Student">Student</Nav.Item>
          <Nav.Item href="/ResultEntry">ResultEntry</Nav.Item>

          <Dropdown title="Results">
            <Dropdown.Item href="/ViewInternalResults/1">
              Internal1Results
            </Dropdown.Item>
            <Dropdown.Item href="/ViewInternalResults/2">
              Internal2Results
            </Dropdown.Item>
            <Dropdown.Item href="/ViewInternalResults/3">
              Internal3Results
            </Dropdown.Item>
          </Dropdown>
          <Nav.Item href="/FinalResult">FinalResult</Nav.Item>
        </Nav>

        <Nav pullRight>
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

export default HeaderNavBarMain;
