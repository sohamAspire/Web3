import React from "react";
import { useNavigate } from "react-router-dom";
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="container w-50 mt-5">
      <form >
      <h1 className='text-center fs-1 mb-5'>User Login</h1>
        <MDBInput className="mb-4 fs-2" id="form5Example1" label="Name" />
        <MDBInput
          className="mb-4 fs-2"
          type="email"
          id="form5Example2"
          label="Email address"
        />
        <MDBBtn type="submit" className="fs-4" block>
          Login
        </MDBBtn>
        <br /> <br />
        <MDBBtn type="button" block onClick={()=>navigate('/signup')} className='me-1 fs-4' color='secondary'>
            Register
        </MDBBtn>
      </form>
    </div>
  );
};

export default Login;
