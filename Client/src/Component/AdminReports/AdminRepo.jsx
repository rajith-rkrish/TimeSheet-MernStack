import React from "react";
import NavBar from "../NavbarAnim/NavAnime";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "../DropDown/dropDown";
import styled from "styled-components";
// import styled from "styled-component";
import "../AdminReports/AdminRepo.css";

function AdminRepo() {
  return (
    <>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col>
          <div className="center flex grid">
            <div className="sorter">
              <div className="Drop1">
                <Dropdown />
              </div>
              <div className="Drop2">
                <Dropdown />
              </div>
              <div className="Drop3">
                <Dropdown />
              </div>
              <div className="planDiv"></div>
              <button className="BluButton">
                <div className="fontBlue">Apply</div>
              </button>
            </div>
            <div className="firstBox">
              <div className="firstHeader"></div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AdminRepo;

const fontBlue = styled.button``;
