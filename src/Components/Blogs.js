import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

const Blogs = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/Data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState([...data]);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center mb-5">Blog Page</h1>
      {state.map((elem) => {
        return (
          <MDBRow key={elem.id} className="fs-4">
            <MDBCol xl={10} lg={10} className="container mb-4">
              <MDBCard>
                <MDBCardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={elem.img}
                        alt="Img"
                        style={{ width: "100px", height: "85px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1 w-75">{elem.title}</p>
                        <p className="text-muted mb-0 w-75">
                          {elem.description}
                        </p>
                      </div>
                    </div>
                    <div > 
                      <MDBBtn outline rounded color="secondary" className="fs-6 m-2" >
                        View
                      </MDBBtn>
                      <br />
                      <MDBBtn outline rounded color="info" className="fs-6 m-2">
                        Update
                      </MDBBtn>
                      <br />
                      <MDBBtn outline rounded color="danger" className="fs-6 m-2">
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
