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
    <div className='container w-50 mt-5'>
        <h1 className='text-center'>User Registration</h1>
    <form>
      <MDBRow className='mb-4 mt-5'>
        <MDBCol>
          <MDBInput id='form3Example1' className='fs-2' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' className='fs-2' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4 fs-2' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4 fs-2' type='password' id='form3Example4' label='Password' />

      <MDBBtn type='submit' className='fs-4' block >
        Sign Up
      </MDBBtn>
      <br /><br />
        <MDBBtn type="button" className='me-1 fs-4' color='secondary' block onClick={()=>navigate('/login')}>
        Login
        </MDBBtn>
    </form>
    </div>
  )
}

export default SignUp