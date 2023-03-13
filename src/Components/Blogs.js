/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Modal from "./Modal";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBIcon,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

const Blogs = (props) => {
  const [Title, setTitle] = useState();
  const [Success, setSuccess] = useState(null);
  const [Description, setDescription] = useState();
  const [state, setState] = useState([]);
  const [centredModal, setCentredModal] = useState(false);
  const AddShow = () => setCentredModal(!centredModal);

  const AddBlog = useCallback((e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Blogs", {
        Title: Title,
        Description: Description,
      })
      .then((response) => {
        // console.log(response);
        if (response.status === 201) {
          // console.log("Successfully Added");
          setSuccess(true);
          setTimeout(() => {
            setSuccess(null);
          }, 1000);
        } else {
          console.log("Failed ");
          setSuccess(false);
          setTimeout(() => {
            setSuccess(null);
          }, 1000);
        }
      });
  });

  const DeleteBlog = useCallback((props, id) => {
    // console.log(props);
    axios.delete("http://localhost:3000/Blogs/" + id).then((res) => {
      console.log("Deleted");
    });
  });
  useEffect(() => {
    axios.get("http://localhost:3000/Blogs").then((response) => {
      console.log("Triggering");
      // console.log(response['data']);
      setState([...response["data"]]);
    });
  }, []);

  return (
    <div className='mt-2'>
      {/* <h1 className="text-center mb-4 ">Blog Page</h1> */}
      {Success === true ? (
        <div
          className="container alert alert-success alert-dismissible fade show d-flex justify-content-between p-3"
          role="alert"
        >
          <strong className="mt-2">Your Data has been Submitted</strong>
        </div>
      ) : Success === false ? (
        <div
          className="container alert alert-danger alert-dismissible fade show d-flex justify-content-between p-3"
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
      <div className="container text-end p-0">
        <MDBBtn className="w-100 mb-4 p-3 fs-6" outline block onClick={AddShow}>
          <MDBIcon fas icon="plus" />
          &nbsp;&nbsp;Add Blog
        </MDBBtn>
      </div>
      {/* Modal */}
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Blog</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={AddShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={AddBlog}>
                Title
                <MDBInput
                  label="Title"
                  id="typeText"
                  type="text"
                  onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                Description
                <MDBTextArea
                  label="Description"
                  id="textAreaExample"
                  rows={4}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <br />
                <MDBBtn type="submit" onClick={AddShow}>
                  Save changes
                </MDBBtn>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* Modal  */}
      <div className="container">
        <table className="table table-hover table-primary text-center table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.map((elem) => {
              return (
                <tr key={elem.id}>
                  <th scope="col">{elem.Title}</th>
                  <th scope="col">{elem.Description}</th>
                  <th scope="col">
                    <Modal props={elem} />
                    <button className="btn btn-info m-2">Update</button>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => DeleteBlog(elem, elem.id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* View Modal  */}
        {/* View Modal  */}
      </div>
    </div>
  );
};

export default Blogs;
