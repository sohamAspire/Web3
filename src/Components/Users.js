import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Users").then((response) => {
      // console.log(response['data']);
      setState([...response["data"]]);
    });
  }, []);

  return (
    <div className='container p-0'>
      <table className="table table-hover table-primary text-center">
        <thead >
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody >
          {state.map((elem) => {
            return (
              <tr key={elem.id}  className="p-0">
                <th scope="col">{elem.id}</th>
                <th scope="col">{elem.FirstName}</th>
                <th scope="col">{elem.LastName}</th>
                <th scope="col">{elem.Email}</th>
                <th scope="col">{elem.Role}</th>
                <th scope="col"><button className='btn btn-danger'>Change Role</button></th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
