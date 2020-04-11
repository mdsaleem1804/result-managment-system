import React, { Component } from "react";
import { Nav, Dropdown, Icon, Sidenav, Sidebar, Navbar } from "rsuite";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: "56px",
  textAlign: "center",
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={() => {
              return <Icon style={iconStyles} icon="close-circle" />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            <Icon icon={expand ? "angle-left" : "angle-right"} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};
class SideBarLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand,
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <Sidebar
        style={{ display: "flex", flexDirection: "column" }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon
              icon="logo-analytics"
              size="lg"
              style={{ verticalAlign: 0 }}
            />
            <span style={{ marginLeft: 12 }}> SCHOOL MGMT SYSTEM</span>
          </div>
        </Sidenav.Header>
        <Sidenav expanded={expand} defaultOpenKeys={["3"]} appearance="subtle">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                Dashboard
              </Nav.Item>
              <Dropdown
                eventKey="2"
                trigger="hover"
                title="Master"
                placement="rightStart"
              >
                <Dropdown.Item eventKey="2-1" href="./#/Department">
                  Department
                </Dropdown.Item>
                <Dropdown.Item eventKey="2-2" href="./#/Subject">
                  Subject
                </Dropdown.Item>
              </Dropdown>

              <Dropdown
                eventKey="3"
                trigger="hover"
                title="Student"
                placement="rightStart"
              >
                <Dropdown.Item eventKey="3-1" href="./#/Student">
                  Add Student
                </Dropdown.Item>
                <Dropdown.Item eventKey="3-2" href="./#/ResultEntry">
                  Result Entry
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="4"
                trigger="hover"
                title="Staff"
                placement="rightStart"
              >
                <Dropdown.Item eventKey="4-1" href="./#/Staff">
                  Add Staff
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="5"
                trigger="hover"
                title="ClassWork"
                placement="rightStart"
              >
                <Dropdown.Item eventKey="5-1" href="./#/Material">
                  Material
                </Dropdown.Item>
                <Dropdown.Item eventKey="5-2" href="./#/Question">
                  Question
                </Dropdown.Item>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={this.handleToggle} />
      </Sidebar>
    );
  }
}

export default SideBarLeft;
