import "./App.css";
import React, {useState} from 'react';
import Home from "./Components/Home.js";
import Login from "./Components/Login";
import { Routes, Route, Outlet } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
import Protected from "./Components/Protected";
import Users from "./Components/Users";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [status , setStatus] = useState(); 
  const statusMethod = (propsStatus) => {
    console.log(propsStatus);
    setStatus(propsStatus);
  }
  // const logIn = () => {
  //   setisLoggedIn(true);
  // };
  // const logOut = () => {
  //   setisLoggedIn(false);
  // };
  return (
    
    <div>
      <Navbar props={status}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login statusMethod={statusMethod} />} />
        <Route path="/signup" element={<SignUp statusMethod={statusMethod}/>} />
        <Route path="/blogs" element={<Blogs />}/> 
        <Route path="/users" element={<Users />} /> 
      </Routes>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
