import React ,{useState} from "react";
import {NavLink} from "react-router-dom";
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
      <MDBNavbar expand='lg' sticky light style={{ backgroundColor: '#e3f2fd' }}>
      <MDBContainer className='m-0 p-4'>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink>
                <NavLink to='/'>Blogs</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to='/'>Blogs</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink to='/'>Users</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink to='/'>Login</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink to='/'>Register</MDBNavbarLink>
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
