import React from "react";
import NavBar from "../NavbarAnim/NavAnime";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../AdminSettings/settings.css";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
function AdminSett() {
  return (
    <>
      <Row>
        <Col sm={2}>
          <NavBar />
        </Col>
        <Col>
          <div className="container-1">
            <div className="container-Head">
              <div className="semi-Head"></div>
              <div className="semi-body">
                <Working>Working Days</Working>
                <div className="checkbox-controls">
                  <Form.Check
                    inline
                    label="Mon"
                    name="group1"
                    type={"checkbox"}
                    // id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Tue"
                    name="group1"
                    type={"checkbox"}
                    // id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Wed"
                    name="group1"
                    type={"checkbox"}
                    // id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Thu"
                    name="group1"
                    type={"checkbox"}
                    // id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Fri"
                    name="group1"
                    type={"checkbox"}
                    // id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Sat"
                    name="group1"
                    type={"checkbox"}
                    // id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Sun"
                    name="group1"
                    type={"checkbox"}
                    // id={`inline-${type}-2`}
                  />
                </div>
              </div>
            </div>
            <div className="container-Body">
              <div className="body-header">
                <Approver>Approver</Approver>
                <button className="ApproverBtn">Add Approver</button>
              </div>
              <div className="Body-Main"></div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AdminSett;
const Working = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #2b2b2b;
  margin-left: 30px;
  margin-top: 10px;
`;
const Approver = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: rgb(43, 43, 43);
  text-align: start;
  margin-left: 26px;
  position: absolute;
  margin-top: 10px;
`;
