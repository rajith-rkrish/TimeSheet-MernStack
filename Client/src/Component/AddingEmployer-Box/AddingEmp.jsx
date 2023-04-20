import React, { useEffect, useState } from "react";
import "../AddingEmployer-Box/AddingEmp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddingEmp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ReporterManager, setReporterManager] = useState("");

  const navigate = useNavigate();

  const toastSuccess = () => {
    toast.success("Login Successfull..!", { position: "top-center" });
  };

  const toastError = () => {
    toast.error("Login Failed!", { position: "top-center" });
  };

  const addButton = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/postingEmploy", {
          email,
          name,
          ReporterManager,
        })
        .then((res) => {
          if (res.data === "exist") {
            toastSuccess();
            setTimeout(() => {
              // 👇 Redirects to about page, note the `replace: true`
              setEmail("");
              setName("");
              setReporterManager("");
              navigate("/Admin/Team", { replace: true });
            }, 3000);
          } else if (res.data === "not exist") {
            toastError();
            setTimeout(() => {
              // 👇 Redirects to about page, note the `replace: true`
              navigate("/Admin/Team", { replace: true });
            }, 3000);
          }
        });
    } catch (e) {
      console.log("Wrong Details");
    }
  };

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
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  name="Name"
                  value={name}
                />
              </Form.Group>
              <Form.Group
                className="margin-top-form"
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="Email"
                  value={email}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="margin-top-form"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="text"
                  placeholder="Reporting Manager"
                  onChange={(e) => {
                    setReporterManager(e.target.value);
                  }}
                  name="Reporting Manager"
                  value={ReporterManager}
                />
              </Form.Group>
            </Col>
          </Row>
          <ToastContainer />
          <div className="BTNSS">
            <button className="Cancel">Cancel</button>
            <button className="Add" onClick={addButton}>
              Add
            </button>
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
