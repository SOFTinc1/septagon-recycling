import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import { NavbarContainer, LogoContainer, LogoImg } from "./navbar.styles";
import "./navbar.styles.scss";

import Logo from "../../assets/images/logo.png";

const NavbarBootStrap = () => {
  let navigate = useNavigate();
  return (
    <NavbarContainer>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand>
            <LogoContainer to="/">
              <LogoImg style={{ color: "#d1c8bb", fontFamily: "dk" }}>
                Septagon
                <img src={Logo} style={{ width: "40px" }} />
              </LogoImg>
            </LogoContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 mt-lg-0 mt-md-0 mt-sm-0 mx-5"
              style={{ maxHeight: "70px" }}
              navbarScroll
            >
              <Nav.Item>
                <Nav.Link
                  style={{ textTransform: "capitalize", color: "#d1c8bb" }}
                  className="Link-a"
                  onClick={() => {navigate("/about");}}
                >
                  about
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  style={{ textTransform: "capitalize", color: "#d1c8bb" }}
                  className="Link-a"
                  onClick={() => {navigate("/project");}}
                >
                  projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  style={{ textTransform: "capitalize", color: "#d1c8bb" }}
                  className="Link-a"
                  onClick={() => {navigate("/service");}}
                >
                  services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  style={{ textTransform: "capitalize", color: "#d1c8bb" }}
                  className="Link-a"
                  onClick={() => {navigate("/machine");}}
                >
                  compressor
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarContainer>
  );
};

export default NavbarBootStrap;
