import React from "react";
// import "./Navbar.css";
import "../AdminNavbar/adminNav.css";
import JKL from "./JK Lucent.svg";
import hamburger from "./hamburger.svg";
import logout from "./logout.svg";
import { useNavigate } from "react-router-dom";
import Dash from "../AdminNavbar/DASHBOARD.svg";
import projects from "../AdminNavbar/PROJECTS.svg";
import settings from "../AdminNavbar/settings.svg";
import Team from "../AdminNavbar/TEAM.svg";
import report from "../AdminNavbar/REPORTS.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function adminNavbar() {
  //   const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col className="leftB"></Col>
        <Col className="vertical1">
          <div className="flexer margintop">
            <img className="hambur" src={hamburger} alt="hamburger" />
            <img className="jklpic" src={JKL} alt="jkl" />
          </div>
          <div
            className="flexer margintop cursor timestatusBody1"
            // onClick={() => navigate("/employe/timeSheet")}
          >
            <img className="dashBoard" src={Dash} alt="timeSheet" />
            <div className="dashFont">Dashboard</div>
          </div>
          <div
            style={{ marginTop: "25px" }}
            className="flexer cursor timestatusBody1"
            // onClick={() => navigate("/employe/timeStatus")}
          >
            <img className="StatusImg imgWidth" src={report} alt="timestatus" />
            <div className="timeStatus1">Reports</div>
          </div>
          <div
            style={{ marginTop: "25px" }}
            className="flexer cursor timestatusBody1"
            // onClick={() => navigate("/employe/timeStatus")}
          >
            <img
              className="StatusImg imgWidth"
              src={projects}
              alt="timestatus"
            />
            <div className="timeStatus1">Projects</div>
          </div>
          <div
            style={{ marginTop: "25px" }}
            className="flexer cursor timestatusBody1"
            // onClick={() => navigate("/employe/timeStatus")}
          >
            <img className="StatusImg imgWidth" src={Team} alt="timestatus" />
            <div className="timeStatus1">Team</div>
          </div>
          <div
            style={{ marginTop: "25px" }}
            className="flexer cursor timestatusBody1"
            // onClick={() => navigate("/employe/timeStatus")}
          >
            <img
              className="StatusImg imgWidth"
              src={settings}
              alt="timestatus"
            />
            <div className="timeStatus1">Settings</div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default adminNavbar;
