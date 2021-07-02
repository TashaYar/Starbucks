import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../starbucks-logo-4.png";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Container fluid className="border-nav">
        <Navbar expand="lg">
          <Navbar.Brand style={{ marginLeft: "2%", marginTop: "10px" }}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" className="menuIcon">
            <span className="hamicon">
              {" "}
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="20px"
                height="20px"
              >
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
              </svg>
            </span>
          </NavbarToggle>
          <NavbarCollapse className="navbar-collapse">
            {" "}
            <Nav className="primary-navigation">
              <NavLink to="/menu" className="navLink1">
                <span> Menu</span>
              </NavLink>

              <NavLink to="/nutrition" className="navLink1">
                <span>Nutrition</span>
              </NavLink>
              <NavLink to="/delivers" className="navLink1">
                <span> Delivers </span>
              </NavLink>
              <NavLink to="/rewards" className="navLink1">
                <span>Rewards</span>
              </NavLink>
            </Nav>
            <Nav className="secondary-navigation">
              <NavLink to="/find_store" className="navLink">
                <i
                  className="fas fa-map-marker-alt fa-2x"
                  style={{
                    padding: "10px",
                    color: "black",
                  }}
                ></i>
                <span>Find a store</span>
              </NavLink>
              <NavLink to="/sign-in" className="navLink">
                <span className="sign-in-button">Sign in</span>
              </NavLink>
              <NavLink to="/sign_up" className="navLink">
                <span className="join-button" style={{ color: "white" }}>
                  Join now
                </span>
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
