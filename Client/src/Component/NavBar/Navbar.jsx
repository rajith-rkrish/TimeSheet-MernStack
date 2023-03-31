import React from "react";
import "./Navbar.css";
import JKL from "./JK Lucent.svg";
import hamburger from "./hamburger.svg";
import logout from "./logout.svg";
import timeSheet from "./timesheet.svg";
import timestatus from "./timestatus.svg";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col className="leftBlue"></Col>
        <Col className="vertical">
          <div className="flexer margintop">
            <img className="hambur" src={hamburger} alt="hamburger" />
            <img className="jklpic" src={JKL} alt="jkl" />
          </div>

          <div
            className="flexer margintop cursor timesheetBody"
            onClick={() => navigate("/employe/timeSheet")}
          >
            <img className="timeImg" src={timeSheet} alt="timeSheet" />
            <div className="TimeSheet">Time Sheet</div>
          </div>
          <div
            style={{ marginTop: "25px" }}
            className="flexer cursor timestatusBody"
            onClick={() => navigate("/employe/timeStatus")}
          >
            <img className="StatusImg" src={timestatus} alt="timestatus" />
            <div className="timeStatus">Time Status</div>
          </div>
        </Col>
      </Row>
    </>
  );
}
// <h6 onClick={() => navigate("/features")}>FEATURES</h6>
//         <h6 onClick={() => navigate("/downloads")}>DOWNLOAD</h6>
export default Navbar;
