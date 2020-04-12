import React from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { Container, Header, Content, Footer } from "rsuite";
import { BrowserRouter as Router } from "react-router-dom";
//import "../../css/main.css";

import BodyContent from "./BodyContent";
import HeaderNavBarMain from "./HeaderNavBarMain";
import FooterWithCopyRight from "./Footer";
import SideBarLeft from "./SideBarLeft";

class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div className="show-container">
          <Container>
            <SideBarLeft />
            <Container>
              <Header>
                <HeaderNavBarMain />
              </Header>
              <Content>
                <BodyContent />
              </Content>
              <Footer>
                <FooterWithCopyRight />
              </Footer>
            </Container>
          </Container>
        </div>
      </Router>
    );
  }
}
export default Layout;
