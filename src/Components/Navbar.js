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
        className="p-2 fs-4"
      >
        <MDBContainer fluid className="m-0 p-2">
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
            <MDBNavbarNav className="mb-2 mb-lg-0">
              <MDBNavbarItem className="p-4">
                <NavLink to="/">Home</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="p-4">
                <NavLink to="/blogs">Blogs</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="p-4">
                <NavLink to="/users">Users</NavLink>
              </MDBNavbarItem>
              {props.status.status ?
              null
              : <MDBNavbarItem className="p-4">
              <NavLink to="/signup">Register</NavLink>
            </MDBNavbarItem>
              }
            </MDBNavbarNav>
          </MDBCollapse>
          {/* Condition  */}
          {props.status.status ? (
            <button className="btn btn-primary p-3 text-light" onClick={props.status.logOut}>
              Logout
            </button>
          ) : (
            <NavLink className='p-4' to="/login">Login</NavLink>
          )}
        </MDBContainer>
      </MDBNavbar>

      <br />
    </>
  );
};

export default Navbar;
