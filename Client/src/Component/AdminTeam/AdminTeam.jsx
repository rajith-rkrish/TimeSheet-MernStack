import React from "react";
import NavBar from "../NavbarAnim/NavAnime";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function AdminTeam() {
  return (
    <>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col>
          <div className="center flex grid"></div>
        </Col>
      </Row>
    </>
  );
}

export default AdminTeam;
