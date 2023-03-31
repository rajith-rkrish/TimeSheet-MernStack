import React, { useState } from "react";
import styled from "styled-components";
import { Container, NavLink, Row } from "react-bootstrap";
import { redirect, useNavigate } from "react-router-dom";
import JKL from "../Login/JKL.svg";
import "../Login/login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Employe from "../employe/Employe";
function Login() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");

  const navigate = useNavigate();

  const onInputChangeEmail = (e) => {
    setEmail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onInputChangePsw = (e) => {
    setPsw((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const toastSuccess = () => {
    toast.success("Login Successfull..!", { position: "top-center" });
  };

  const toastError = () => {
    toast.error("Login Faild..!", { position: "top-center" });
  };

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  };
  // const { emailF, pswF } = signup;

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/getting", { email, psw })
        .then((res) => {
          console.log(res.data);
          if (res.data == "exist") {
            console.log("Log in id : " + res.data);
            toastSuccess();
            setTimeout(() => {
              // 👇 Redirects to about page, note the `replace: true`
              navigate("/employe", { replace: true });
            }, 3000);
          } else if (res.data == "notexist") {
            toastError();
          }
        })
        .catch((e) => {
          alert("Wrong Details");
        });
    } catch (e) {
      alert("Wrong Details");
    }
  };

  return (
    <>
      <Container>
        <Row className="sizing">
          <div className="jkl">
            <img src={JKL} alt="JKL" />
          </div>
          <div className="header35">Log In To Time Sheet</div>
          <Row className="input">
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
            <div className="downin">
              <input
                className="in"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPsw(e.target.value);
                }}
                name="psw"
                value={psw}
              />
            </div>
          </Row>
          <Row>
            <Btn type="submit" onClick={submit}>
              Login
            </Btn>
            <ToastContainer />
          </Row>
          <div className="forgot">
            <a href="">Forgot PassWord ?</a>
          </div>
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
  background-color: #0080c8;
  color: #fcfcfc;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  border: 2px solid transparent;
  position: relative;
  /* top: 362px; */
  width: 374px;
  height: 45px;
  display: block;
  margin: auto;
  /* left: -178px; */

  left: -162px;
  /* top: 113px; */
  top: 347px;

  &:hover {
    background-color: #229af0;
  }
  &:active {
    background-color: #0080c8;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    left: 184px;
    top: 297px;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    left: -165px;
    top: 350px;
  }
`;

export default Login;
