import React from 'react'
import NavBar from "../NavbarAnim/NavAnime";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function AdminPro() {
  return (
    <>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col>
          <div className="center flex grid">
            <div className="sorter"></div>
            <div className="firstBox">
              <div className="firstHeader"></div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AdminPro