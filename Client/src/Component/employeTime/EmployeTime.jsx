import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Navbar from "../EmpNavbar/EmpAnimeNav";
import "../employeTime/employeTime.css";
import { useState, useEffect } from "react";
import calendar from "../employeTime/calendar.svg";
import { TimePicker } from "react-ios-time-picker";
import EmployeProject from "../employeProject/EmployeProject";
function EmployeTime() {
  const [date, setDate] = useState(null);
  const [login, setLoginTime] = useState(null);
  const [logout, setLogoutTime] = useState(null);
  const [lunchStart, setlunchStart] = useState(null);
  const [lunchStop, setlunchStop] = useState(null);

  useEffect(() => {
    var today = new Date();
    const Curentdate =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    setDate(Curentdate);
  }, []);

  function timeToInteger(time) {
    if (time) {
      const [hours, minutes] = time.split(":");
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      const timeInMs = date.getTime();
      const timeInMinutes = timeInMs / 60000; // 60 seconds * 1000 milliseconds
      return Math.floor(timeInMinutes);
    } else {
      return 0;
    }
  }

  const gettingData = () => {
    const Total = gettingTotalHrs();
    const objects = {
      total: Total,
      login: login,
      logout: logout,
      lunchStart: lunchStart,
      lunchStop: lunchStop,
      date: date,
    };
    return objects;
  };

  function getTotalTime(login, logout) {
    const loginTimeInMinutes = timeToInteger(login);
    const logoutTimeInMinutes = timeToInteger(logout);
    const totalTimeInMinutes = logoutTimeInMinutes - loginTimeInMinutes;
    const hours = Math.floor(totalTimeInMinutes / 60);
    const minutes = totalTimeInMinutes % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  function getTotalLunchTime(lunchStart, lunchStop) {
    const lunchStartTimeInMinutes = timeToInteger(lunchStart);
    const lunchStopTimeInMinutes = timeToInteger(lunchStop);
    const totalTimeInMinutes = lunchStopTimeInMinutes - lunchStartTimeInMinutes;
    const hours = Math.floor(totalTimeInMinutes / 60);
    const minutes = totalTimeInMinutes % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  const gettingTotalHrs = () => {
    const logonTime = getTotalTime(login, logout);
    const lunchtotal = getTotalLunchTime(lunchStart, lunchStop);
    if (logonTime && lunchtotal) {
      const [loginHours, loginMinutes] = logonTime.split(":");
      const [lunchHours, lunchMinutes] = lunchtotal.split(":");
      const totalMinutes =
        parseInt(loginHours) * 60 +
        parseInt(loginMinutes) -
        (parseInt(lunchHours) * 60 + parseInt(lunchMinutes));
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
    } else {
      return "00:00";
    }
  };

  return (
    <Row style={{ marginLeft: "-1px" }}>
      <Navbar />
      {/* <h1 style={{ textAlign: "center" }}>{date}</h1> */}
      <div className="Cdate flexer">
        <div className="Cimg">
          <img src={calendar} alt="cDate" />
        </div>
        <div className="dateLetter">{date}</div>
      </div>
      <div className="cont">
        <div className="table">
          <div className="tableHeader">
            <Font16>Time Sheet</Font16>
          </div>
          <div className="table1st">
            <div className="tableinput1">
              <Logfont>Log Time</Logfont>
              <div>
                <TimePicker
                  onChange={(time) => setLoginTime(time)}
                  placeHolder="Login"
                  value={login}
                />
              </div>
              <div className="logout">
                <TimePicker
                  onChange={(time) => setLogoutTime(time)}
                  placeHolder="Logout"
                  value={logout}
                />
              </div>
            </div>
            <div className="tablecounter">
              <Counter>{getTotalTime(login, logout)}</Counter>
            </div>
          </div>
          <div className="tableinput2">
            <Lunch>Lunch</Lunch>
            <div>
              <TimePicker
                onChange={(time) => setlunchStart(time)}
                placeHolder="Start"
                value={lunchStart}
              />
            </div>
            <div className="logout">
              <TimePicker
                onChange={(e) => setlunchStop(e)}
                placeHolder="end"
                value={lunchStop}
              />
            </div>
          </div>
          <div className="tablecounter1">
            <Counter>{getTotalLunchTime(lunchStart, lunchStop)}</Counter>
          </div>
          <div className="tableFooter">
            <Totalhr>Total hours</Totalhr>
          </div>
          <div className="tablecounter2">
            <Counter1>{gettingTotalHrs()}</Counter1>
          </div>
        </div>
        <EmployeProject value={gettingData()} />
      </div>
    </Row>
  );
}

export default EmployeTime;

const Font16 = styled.div`
  position: absolute;
  width: 100px;
  height: 19px;
  left: 29px;
  top: 11px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #2b2b2b;
`;
const Logfont = styled.div`
  position: absolute;
  width: 100px;
  height: 18px;
  left: 34px;
  top: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #00a3ff;
`;
const Lunch = styled.div`
  position: absolute;
  width: 100px;
  height: 18px;
  left: 35px;
  top: 13px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #00a3ff;
`;

const Totalhr = styled.div`
  position: absolute;
  width: 100px;
  height: 18px;
  left: 32px;
  top: 13px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #2b2b2b;
`;

const Counter = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #505558;
  padding-top: 13px;
  padding-left: 29px;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
    padding-left: 10px;
  }
  @media (min-width: 1023px) and (max-width: 1200px) {
    padding-left: 15px;
  }
`;
const Counter1 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #08c030;
  padding-top: 13px;
  padding-left: 29px;
  @media (min-width: 768px) and (max-width: 992px) {
    padding-left: 7px;
    font-size: 18px;
  }
  @media (min-width: 1023px) and (max-width: 1200px) {
    padding-left: 14px;
  }
`;
