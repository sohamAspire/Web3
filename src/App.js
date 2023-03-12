import "./App.css";
import React, {useEffect, useState } from 'react';
import Home from "./Components/Home.js";
import Login from "./Components/Login";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
// import Protected from "./Components/Protected";
import Users from "./Components/Users";
import View from "./Components/View";

function App() {
  const [status , setStatus] = useState(null);
  const navigate = useNavigate();
  const statusMethod = (propsStatus) => {
    console.log(propsStatus);
    setStatus(propsStatus);
  }
  // const logIn = () => {
  //   setisLoggedIn(true);
  // };
  const logOut = () => {
    setStatus(false);
    navigate('/login')
  };

  return (
    
    <div>
      <Navbar status={{status,logOut}}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login statusMethod={statusMethod} />} />
        <Route path="/signup" element={<SignUp statusMethod={statusMethod}/>} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/users" element={<Users />} /> 
      </Routes>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
