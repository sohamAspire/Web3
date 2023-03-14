import "./App.css";
import React, { useState } from "react";
// import Home from "./Components/Home.js";
import Login from "./Components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
// import Protected from "./Components/Protected";
import Users from "./Components/Users";
import Admin from "./Components/Admin";
import Protected from "./Components/Protected";

function App() {
  const [status, setStatus] = useState(null);
  const [Role1, setRole] = useState('');
  const [userId, setuserId] = useState('');
  const navigate = useNavigate();
  const statusMethod = (propsStatus, Role ,Id) => {
    setStatus(propsStatus);
    setRole(Role);
    setuserId(Id)
  };
  const logOut = () => {
    setStatus(false);
    navigate("/login");
    setuserId(0)
  };

  return (
    <div>
      <Navbar status={{ status, logOut , Role1 }} />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<Login statusMethod={statusMethod} />} />
        <Route
          path="/signup"
          element={<SignUp statusMethod={{ statusMethod }} />}
        />
        <Route path="/blogs" element={<Blogs Id={userId} isLoggedIn={status} Role={Role1} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin/" element={<Protected isLoggedIn={status}><Admin /></Protected> }>
          <Route path="users" element={ <Protected isLoggedIn={status}> <Users /> </Protected>  } />
          <Route path="blogs" element={<Protected isLoggedIn={status}> <Blogs /> </Protected>  } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
