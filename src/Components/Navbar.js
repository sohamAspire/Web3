import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
const Navbar = (props) => {
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
        <MDBContainer className="m-0 p-4">
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
                <NavLink to="/users">Users</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="p-4">
                <NavLink to="/signup">Register</NavLink>
              </MDBNavbarItem>
              {props.status ?
              <MDBNavbarItem className="p-4">
                <NavLink to="/login">Login</NavLink>
              </MDBNavbarItem> :
                <button className="btn btn-primary p-2 m-4 text-light">Logout</button>
              }
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <br />
    </>
  );
};

export default Navbar;
