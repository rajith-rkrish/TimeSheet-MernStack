import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { redirect, useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import "../Changepsw/Changepsw.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function ChangePsw() {
  const [email, setEmail] = useState("");
  const [cPsw, setCpsw] = useState("");
  const [newPsw, setNewPsw] = useState("");

  const navigate = useNavigate();

  const toastSuccess = () => {
    toast.success("Successfull..!", { position: "top-center" });
  };

  const toastError = () => {
    toast.error("Faild..!", { position: "top-center" });
  };

  const Submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .put("http://localhost:5000/changePsw", { email, cPsw, newPsw })
        .then((res) => {
          if (res.data == "exist") {
            toastSuccess();
            setTimeout(() => {
              // 👇 Redirects to about page, note the `replace: true`
              navigate("/", { replace: true });
            }, 3000);
          } else {
            toastError();
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row className="sizing">
          <div className="pswResTitle">Reset Your Password</div>
          <div className="pswPara">Change Your Password</div>
          <Row className="boxerpsw">
            <div className="restForm">
              <input
                className="restEmail"
                type="text"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                value={email}
              />
            </div>
            <div className="restForm">
              <input
                className="restpsws"
                type="password"
                placeholder="Current Password"
                onChange={(e) => {
                  setCpsw(e.target.value);
                }}
                name="Cpsw"
                value={cPsw}
              />
            </div>
            <div className="restForm">
              <input
                className="restnewPSw"
                type="password"
                placeholder="New Password"
                onChange={(e) => {
                  setNewPsw(e.target.value);
                }}
                name="newPsw"
                value={newPsw}
              />
            </div>
          </Row>
          <Row>
            <Btn type="submit" onClick={Submit}>
              Login
            </Btn>
            <ToastContainer />
          </Row>
        </Row>
      </Container>
    </>
  );
}

const Btn = styled.button`
  padding-top: 7px;
  padding-bottom: 9px;
  padding-left: 16px;
  padding-right: 12px;
  background-color: rgb(120 124 126 / 60%);
  color: #fcfcfc;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  border: 2px solid transparent;
  position: relative;
  width: 374px;
  height: 45px;
  display: block;
  margin: auto;
  /* top: 380px; */
  align-items: center;
  right: -396px;

  &:hover {
    background-color: #229af0;
  }
  &:active {
    background-color: #0080c8;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    position: relative;
    right: -322px;
    top: 400px;
  }

  @media (min-width: 1200px) {
    top: 380px;
  }
`;

export default ChangePsw;
