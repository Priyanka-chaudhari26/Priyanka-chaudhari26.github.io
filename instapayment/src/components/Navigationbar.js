import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assests/modifiedlogo.png";
import "../modules/module.navigationbar.css";
import "./About";
import "./PaymentButton";
import "./Footer";

function Navigationbar() {
  return (
    <div className="navigation">
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="https://www.thesparksfoundationsingapore.org/about/guiding-principles/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          The Sparks Foundation
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about" className="about">
            About
          </Nav.Link>
          <Nav.Link href="#contactus" className="contactus">
            Contact us
          </Nav.Link>
          <Nav.Link href="#donate" className="donate">
            Donate
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigationbar;
