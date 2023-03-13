/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const Users = () => {
  const [state, setState] = useState([]);
  const ChangeRole = useCallback((props, id) => {
    if (props.Role === "admin") {
      axios
        .put("http://localhost:3000/Users/" + id, {
          FirstName: props.FirstName,
          LastName: props.LastName,
          Email: props.Email,
          Password: props.Password,
          Role: "user",
        })
        .then((response) => {
          // console.log(response['data']);
          console.log(response);
          console.log("Changed to User");
        });
    } else {
      axios
        .put("http://localhost:3000/Users/" + id, {
          FirstName: props.FirstName,
          LastName: props.LastName,
          Email: props.Email,
          Password: props.Password,
          Role: "admin",
        })
        .then((response) => {
          // console.log(response['data']);
          console.log(response);
          console.log("Changed to Admin");
        });
    }
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/Users").then((response) => {
      // console.log(response['data']);
      setState([...response["data"]]);
    });
  }, [()=>ChangeRole]);

  return (
    <div className="container p-0 mt-2">
      <table className="table table-hover table-primary text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((elem) => {
            return (
              <tr key={elem.id} className="p-0">
                <th scope="col">{elem.id}</th>
                <th scope="col">{elem.FirstName}</th>
                <th scope="col">{elem.LastName}</th>
                <th scope="col">{elem.Email}</th>
                <th scope="col">{elem.Role}</th>
                <th scope="col">
                  <button
                    className="btn btn-danger"
                    onClick={() => ChangeRole(elem, elem.id)}
                  >
                    Change Role
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
