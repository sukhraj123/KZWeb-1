
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">KZ•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/work-page" tag={Link}>
                  Clients
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/service-page" tag={Link}>
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about-page" tag={Link}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact-page" tag={Link}>
                  Contact
                </NavLink>
              </NavItem>
              
            </Nav>
          </Col>
         
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
             
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://m.facebook.com/p/Sukh-Grewal-100077630387673/?_rdr"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://instagram.com/keezwebdev"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
