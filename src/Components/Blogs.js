import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const Blogs = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [state, setState] = useState([]);
  const toggleShow = () => 
  {
    setBasicModal(!basicModal)
  }
 

  useEffect(() => {
    axios.get("http://localhost:3000/Data").then((response) => {
      // console.log(response['data']);
      setState([...response["data"]]);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center mb-2">Blog Page</h1>
      {state.map((elem) => {

        return (
          <MDBRow key={elem.id} className="fs-4">
            <MDBCol xl={10} lg={10} className="container mb-4">
              <MDBCard>
                <MDBCardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1 w-75">{elem.title}</p>
                        <p className="text-muted mb-0 w-75">
                          {elem.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <MDBBtn
                        outline
                        rounded
                        color="secondary"
                        className="fs-6 m-2"
                        onClick={toggleShow}
                      >
                        View {elem.id}
                      </MDBBtn>
                      {/* Modal  */}
                      <MDBModal
                        show={basicModal}
                        setShow={setBasicModal}
                        tabIndex="-1"
                      >
                        <MDBModalDialog>
                          <MDBModalContent>
                            <MDBModalHeader>
                              <MDBModalTitle>{elem.id} </MDBModalTitle>
                              <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={toggleShow}
                              ></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>{elem.title}</MDBModalBody>

                            <MDBModalFooter>
                              <MDBBtn color="secondary" onClick={toggleShow}>
                                Close
                              </MDBBtn>
                            </MDBModalFooter>
                          </MDBModalContent>
                        </MDBModalDialog>
                      </MDBModal>
                      {/* Modal */}
                      <br />
                      <MDBBtn outline rounded color="info" className="fs-6 m-2">
                        Update
                      </MDBBtn>
                      <br />
                      <MDBBtn
                        outline
                        rounded
                        color="danger"
                        className="fs-6 m-2"
                      >
                        Delete
                      </MDBBtn>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        );
      })}
    </div>
  );
};

export default Blogs;
