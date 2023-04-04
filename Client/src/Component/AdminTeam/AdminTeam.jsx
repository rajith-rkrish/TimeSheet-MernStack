import React, { useState } from "react";
import NavBar from "../NavbarAnim/NavAnime";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../AdminTeam/AdminTeam.css";
import plus from "../AdminTeam/plus-icon.svg";
import styled from "styled-components";
import down from "../AdminTeam/down-arrow.svg";
import Boxer from "../AddingEmployer-Box/AddingEmp.jsx";
function AdminTeam() {
  const [Adding, setAdding] = useState(false);

  const Showbox = () => {
    setAdding(true);
  };

  return (
    <>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col>
          <div className="center flex grid">
            <button className="addingMember" onClick={Showbox}>
              <div>
                <img className="plus_img" src={plus} alt="plus" />
              </div>
              <FontAdding>New Member</FontAdding>
            </button>
            {Adding ? <Boxer /> : null}

            <div className="boxer-app">
              <div className="header-boxer"></div>
              <div className="header-white">
                <div className="smallBars">
                  <BarName>NAME</BarName>
                  <img className="down-arrow" src={down} alt="down" />
                </div>
                <div className="smallBars">
                  <BarName>EMAIL</BarName>
                  <img className="down-arrow" src={down} alt="down" />
                </div>
                <div className="smallBars">
                  <BarName>R.MANAGER</BarName>
                  <img className="down-arrow" src={down} alt="down" />
                </div>
              </div>
              <div className="body-boxer"></div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default AdminTeam;

const FontAdding = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding: 7px;
  color: #505558;
`;

const BarName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-transform: uppercase;
  color: #9d9d9d;
  margin-top: 10px;
`;
