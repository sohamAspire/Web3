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
        className="p-0 fs-6"
      >
        <MDBContainer fluid className="m-0 p-0">
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
              {props.status.Role1 === "admin" ? (
                <>
                <MDBNavbarItem className="p-2 mx-2">
                  <NavLink to="/">Home</NavLink>
                </MDBNavbarItem>
              <MDBNavbarItem className="p-2 mx-2">
                <NavLink to="/users">Users</NavLink>
              </MDBNavbarItem>
                </>
              ) : null}
              <MDBNavbarItem className="p-2 mx-2">
                <NavLink to="/blogs">Blogs</NavLink>
              </MDBNavbarItem>
              {props.status.status ? null : (
                <MDBNavbarItem className="p-2 mx-2">
                  <NavLink to="/signup">Register</NavLink>
                </MDBNavbarItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
          {/* Condition  */}
          {props.status.status ? (
            <>
            <span>
              {props.status.LoggedUser}
            </span>
            <button
              className="btn btn-primary p-3 text-light"
              onClick={props.status.logOut}
            >
              Logout
            </button>
            </>
          ) : (
            <NavLink className="p-2 m-2" to="/login">
              Login
            </NavLink>
          )}
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
