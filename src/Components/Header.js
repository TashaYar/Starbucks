import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../starbucks-logo-4.png";

class Header extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar expand="lg">
          <Navbar.Brand href="#home" style={{ marginLeft: "2%" }}>
            <img src={logo} alt="logo"></img>
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle>
          <NavbarCollapse>
            {" "}
            <Nav className="primary-navigation">
              <Nav.Link href="#home" className="navLink1">
                <span style={{ color: "black" }}> Menu</span>
              </Nav.Link>
              <Nav.Link href="#home" className="navLink1">
                <span style={{ color: "black" }}>Nutrition</span>
              </Nav.Link>
              <Nav.Link href="#home" className="navLink1">
                <span style={{ color: "black" }}> Delivers </span>
              </Nav.Link>
              <Nav.Link href="#home" className="navLink1">
                <span style={{ color: "black" }}>Rewards</span>
              </Nav.Link>
            </Nav>
            <Nav className="secondary-navigation">
              <Nav.Link href="#home" className="navLink">
                <i
                  className="fas fa-map-marker-alt fa-2x"
                  style={{
                    padding: "10px",
                    color: "black",
                  }}
                ></i>
                <span style={{ color: "black" }}>Find a store</span>
              </Nav.Link>
              <Nav.Link href="#AboutUs" className="navLink">
                <span className="sign-in-button" style={{ color: "black" }}>
                  Sign in
                </span>
              </Nav.Link>
              <Nav.Link href="#AboutUs" className="navLink">
                <span className="join-button" style={{ color: "white" }}>
                  Join now
                </span>
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
