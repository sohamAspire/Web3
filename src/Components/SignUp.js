import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
  } from 'mdb-react-ui-kit';

const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div className='container w-50'>
        <h1 className='text-center'>User Registration</h1>
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

      <MDBBtn type='submit' block >
        Sign Up
      </MDBBtn>
        <MDBBtn type="button" className='me-1' color='secondary' block onClick={()=>navigate('/login')}>
        Login
        </MDBBtn>
    </form>
    </div>
  )
}

export default SignUp