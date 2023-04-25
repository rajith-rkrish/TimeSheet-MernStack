import React, { useState } from "react";
import styled from "styled-components";
import { Container, NavLink, Row } from "react-bootstrap";
import { redirect, useNavigate } from "react-router-dom";
import "../Login/forgot.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toastSuccess = () => {
    toast.success("Successfull..!", { position: "top-center" });
  };

  const toastError = () => {
    toast.error("Faild..!", { position: "top-center" });
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put("http://localhost:5000/forgot", { email })
        .then((res) => {
          console.log(res.data);
          if (res.data === "exist") {
            console.log("Log in id : " + res.data);
            toastSuccess();
            setTimeout(() => {
              // 👇 Redirects to about page, note the `replace: true`
              navigate("/", { replace: true });
            }, 3000);
          } else if (res.data === "notexist") {
            toastError();
          }
        })
    } catch (e) {
      alert("Wrong Details");
    }
  };
  return (
    <>
      <Container>
        <Row className="sizing">
          <div className="resetHeader">Forgot Your Password</div>
          <div className="resetPara">
            Enter your email and we'll send you random password
          </div>
          <Row className="inputer1">
            <div className="upperin">
              <input
                className="in"
                type="text"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                value={email}
              />
            </div>
          </Row>
          <Row>
            <Btn type="submit" onClick={submit}>
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
  top: 310px;
  align-items: center;
  right: -396px;

  &:hover {
    background-color: #229af0;
  }
  &:active {
    background-color: #0080c8;
  }
`;

export default Forgot;
