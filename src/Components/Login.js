import React,{ useState}from "react";
import { useNavigate } from "react-router-dom";
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';
import axios from "axios";

const Login = (props) => {

    const navigate = useNavigate();
    let isLoggedIn = null;
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const submitHandler = (e) =>{
      e.preventDefault();
      axios.get("http://localhost:3000/Users").then((res)=> 
      { 
        const validate = res['data'].find((user) => user.Email === Email) && res['data'].find((user)=> user.Password === Password) 
       if(validate){
        let Role = validate.Role
        // let Id = validate.id
        // let userName = res['data'].find((user) => user.Email === Email) && res['data'].find((user)=> user.Password === Password).FirstName
        isLoggedIn = true;
        props.statusMethod(isLoggedIn , Role , validate)
        navigate('/blogs');
       }
       else{
        console.log('false');
        let Role = 'user';
        // let Id = null
        // let userName = null
        isLoggedIn = false;
        props.statusMethod(isLoggedIn, Role , 'none' )
       }
      })}

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={submitHandler}>
      <h1 className='text-center fs-1 mb-5'>Login</h1>
        <MDBInput
          className="mb-4 fs-6"
          type="email"
          id="form5Example2"
          label="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput className="mb-4 fs-6" id="form5Example1" type="password" label="Password" onChange={(e) => setPassword(e.target.value)} />
        <MDBBtn type="submit" className="fs-6" block>
          Login
        </MDBBtn>
        <br /> <br />
        <MDBBtn type="button" block onClick={()=>navigate('/signup')} className='me-1 fs-6' color='secondary'>
            Register
        </MDBBtn>
      </form>
    </div>
  );
};

export default Login;
