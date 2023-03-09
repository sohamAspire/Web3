import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="p-0 m-0">
      <Navbar></Navbar>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </div>
  );
};

export default Home;
