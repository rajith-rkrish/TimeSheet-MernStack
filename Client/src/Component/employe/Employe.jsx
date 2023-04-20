import React from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../EmpNavbar/EmpAnimeNav";

function Employe() {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col>
          <Navbar />
        </Col>
        <Col>
        
        </Col>
      </Row>
    </>
  );
}
// <h6 onClick={() => navigate("/features")}>FEATURES</h6>
//         <h6 onClick={() => navigate("/downloads")}>DOWNLOAD</h6>
export default Employe;
