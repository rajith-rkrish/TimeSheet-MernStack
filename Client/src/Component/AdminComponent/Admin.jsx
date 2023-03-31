import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../NavbarAnim/NavAnime";
import { useNavigate } from "react-router-dom";
function Admin() {
  return (
    <>
      <Row>
        <Col>
          <Navbar />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Admin