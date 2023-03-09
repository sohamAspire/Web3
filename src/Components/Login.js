import React from "react";
import { useNavigate } from "react-router-dom";
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="container w-50">
    <h1 className='text-center'>User Login</h1>
      <form>
        <MDBInput className="mb-4" id="form5Example1" label="Name" />
        <MDBInput
          className="mb-4"
          type="email"
          id="form5Example2"
          label="Email address"
        />
        <MDBBtn type="submit" block>
          Login
        </MDBBtn>
        <MDBBtn type="button" block onClick={()=>navigate('/signup')} className='me-1' color='secondary'>
            Register
        </MDBBtn>
      </form>
    </div>
  );
};

export default Login;
