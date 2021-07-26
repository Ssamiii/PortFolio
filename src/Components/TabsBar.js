import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Row, Col, Container } from "react-bootstrap";
import './TabsBar.css'
import { Contact } from "./Contact.js"
import { Profile } from "./Profile.js"
import {Home} from "./Home.js"
class TabsBar extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Tabs variant="pills" className="allTabs" defaultActiveKey="Home" id="controlled-tab-example">
              <Tab eventKey="home" title="Home" tabClassName="tab">
                <Home />
              </Tab>
              <Tab eventKey="profile" title="Profile" tabClassName="tab">
                <Profile />
              </Tab>
              <Tab eventKey="contact" title="Contact" tabClassName="tab">
                <Contact />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TabsBar;