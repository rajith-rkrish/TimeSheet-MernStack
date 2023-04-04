import React from "react";
import "../AddingEmployer-Box/AddingEmp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
function AddingEmp() {
  return (
    <>
      <div className="AddingBox">
        <FontHeader>Add Members</FontHeader>
        <Form className="input-adjust">
          <Row>
            <Col>
              <Form.Group
                className="margin-top-form"
                controlId="formBasicEmail"
              >
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group
                className="margin-top-form"
                controlId="formBasicEmail"
              >
                <Form.Control type="email" placeholder="Enter email address" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="margin-top-form"
                controlId="formBasicPassword"
              >
                <Form.Control type="text" placeholder="Reporting Manager" />
              </Form.Group>
              <Form.Group
                className="margin-top-form"
                controlId="formBasicEmail"
              >
                <Form.Control type="password" placeholder="Enter PassWord" />
              </Form.Group>
            </Col>
          </Row>
          <div className="BTNSS">
            <button className="Cancel">Cancel</button>
            <button className="Add">Add</button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddingEmp;

// <Button variant="primary" type="submit">
//   Submit
// </Button>;
const FontHeader = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  color: black;
  margin-top: 35px;
  margin-bottom: 8px;
  margin-left: 20px;
`;
