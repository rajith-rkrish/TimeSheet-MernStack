import React from "react";
import NavBar from "../NavbarAnim/NavAnime";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../AdminReports/AdminRepo.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BarChart from "../BarChart/BarChart";
import styled from "styled-components";

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
                <DropdownButton id="dropdown-basic-button" title="Project">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="Drop2">
                <DropdownButton id="dropdown-basic-button" title="Team Member">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="Drop3">
                <DropdownButton id="dropdown-basic-button" title="Task">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              {/* <div className="planDiv"></div> */}
              <button className="BluButton">
                <div className="fontBlue">Apply</div>
              </button>
            </div>

            <div className="whitebox2">
              <div className="firstBox">
                <div className="firstHeader">
                  <Headerfont1 style={{marginLeft:"10px",marginTop:"10px"}}>Total Time</Headerfont1>
                </div>
                <div
                  className="bar1"
                  style={{ marginLeft: "35px", marginTop: "-35px" }}
                >
                  <BarChart />
                </div>
              </div>
            </div>
            <button className="Download">Download pdf</button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AdminRepo;

const Headerfont1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #505558;
`;