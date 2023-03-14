import React, { useState } from "react";
import {
  MDBModalFooter,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBTextArea
} from "mdb-react-ui-kit";

const Update = (props) => {
  const [basicModal1, setBasicModal1] = useState(false);
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const toggleShow = () => setBasicModal1(!basicModal1);
  const update = () => {
    toggleShow();
  };

  const AddBlog = ()=>{
    
  }

  return (
    <>
      <MDBBtn onClick={update} className="m-2 btn-info">
        <i className="fas fa-edit"></i>
      </MDBBtn>
      <MDBModal tabIndex="-1" show={basicModal1} setShow={setBasicModal1}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Your Blog</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
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
                <MDBBtn type="submit" onClick={update}>
                  Save changes
                </MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={update}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Update;
