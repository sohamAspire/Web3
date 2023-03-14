import React  from "react";
import {
  MDBBtn
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
// import Blogs from "./Blogs";

const Home = () => {
  const navigate = useNavigate();

  return (
  <div className='d-flex justify-content-center mt-2'>
    <MDBBtn className='container w-50 p-4 mt-5 fs-4' outline onClick={()=> navigate('/admin')}>
          Admin Panel
    </MDBBtn>
      {/* <Blogs></Blogs> */}
    </div>
  )
};

export default Home;
