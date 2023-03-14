import React, {useState } from "react";
import {
  MDBModalFooter,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";

const Modal = (props) => {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const Btn = ()=>{
    toggleShow()
  }
  return (
    <>
      <MDBBtn onClick={Btn} className="m-2">
      <i className="fas fa-eye"></i>
      </MDBBtn>
      <MDBModal tabIndex="-1" show={basicModal} setShow={setBasicModal}>
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
                <div>
                <h1 className="h4">Title: {props.props.Title}</h1>
                <h1 className="h4">Description: {props.props.Description}</h1>
                </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Modal;
