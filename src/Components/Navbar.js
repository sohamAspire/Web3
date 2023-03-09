import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
const Navbar = () => {
  const [showNavColor, setShowNavColor] = useState(false);
  return (
    <>
      <MDBNavbar
        expand="lg"
        sticky
        light
        style={{ backgroundColor: "#e3f2fd" }}
        className="fs-4"
      >
        <MDBContainer className="m-0 p-5">
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="p-4">
                <NavLink to="/">Home</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="p-4">
                <NavLink to="/blogs">Blogs</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="p-4">
                <NavLink to="/login">Login</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="p-4">
                <NavLink to="/signup">Register</NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <br />
    </>
  );
};

export default Navbar;
