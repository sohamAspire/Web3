import "./App.css";
import Home from "./Components/Home.js";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/blogs" element={<Blogs/> }/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
