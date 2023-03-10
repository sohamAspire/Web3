import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");
  const [Success, setSuccess] = useState();

  const SubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/Users", {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        Role: Role,
      })
      .then((response) => {
        if (response.status === 201) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(null);
          }, 1000);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
        } else {
          setSuccess(false);
          setTimeout(() => {
            setSuccess(null);
          }, 1000);
        }
      });
  };

  return (
    <div className="container w-50 mt-2">
      {Success === true ? (
        <div
          className="alert alert-success alert-dismissible fade show d-flex justify-content-between p-3"
          role="alert"
        >
          <strong className="mt-2">Your Data has been Submitted</strong>
        </div>
      ) : Success === false ? (
        <div
          className="alert alert-danger alert-dismissible fade show d-flex justify-content-between p-3"
          role="alert"
        >
          <strong className="mt-2">Something Went Wrong</strong>
          <button
            type="button"
            className=" btn close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : null}
      <h1 className="text-center"> Registration</h1>
      <form onSubmit={SubmitHandler}>
        <MDBRow className="mb-4 mt-5">
          <MDBCol>
            <MDBInput
              id="form3Example1"
              className="fs-6"
              label="First name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="form3Example2"
              label="Last name"
              className="fs-6"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4 fs-6"
          type="email"
          id="form3Example3"
          label="Email address"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          className="mb-4 fs-6"
          type="password"
          id="form3Example4"
          label="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            value={Role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <label htmlFor="floatingSelect">Role</label>
        </div>
        <MDBBtn type="submit" className="fs-4" block>
          Sign Up
        </MDBBtn>
        <br />
        <br />
        { !props.statusMethod ?
        <MDBBtn
          type="button"
          className="me-1 fs-4"
          color="secondary"
          block
          onClick={() => navigate("/login")}
        >
          Login
        </MDBBtn>: null
        }
      </form>
    </div>
  );
};

export default SignUp;
