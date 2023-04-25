import React from "react";
import Navbar from "../EmpNavbar/EmpAnimeNav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import calendar from "../employeTime/calendar.svg";
import styled from "styled-components";
import "../employeStatus/employeStatus.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar, DateRangePicker } from "react-date-range";
import axios from "axios";
import { useState, useEffect } from "react";
const moment = require("moment");
function EmployeStatus() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [products, setProducts] = useState([]);
  const [showCal, setShowCal] = useState(false);
  const [Allobjects, setAllObjects] = useState([]);
  const [pro, setProjects] = useState([]);

  // const [obj1, setobj1] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/employeStatus")
      .then((res) => {
        console.log("employe Status : " + res.data);
        const objer = [];

        res.data.forEach((element) => {
          element.projects.forEach((ele) => {
            const projectObj = {
              id: ele._id,
              proName: ele.proName,
              date: element.cDate,
              status: ele.status,
            };
            objer.push(projectObj);

            // setProjects(objer);
          });
        });

        // setProjects(objer);
        setAllObjects(objer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (date) => {
    let filterd = Allobjects.filter((product) => {
      // if (!Date.parse(product.date)) {
      //   console.log(`Invalid date: ${product.date}`);
      //   return false;
      // }
      const startDate = moment(
        date.selection.startDate,
        "DD/MM/YYYY"
      ).toISOString();
      const endDate = moment(
        date.selection.endDate,
        "DD/MM/YYYY"
      ).toISOString();
      const productDate = moment(product.date, "DD/MM/YYYY").toISOString();

      console.log("Products Date : " + productDate);
      console.log("Starting Date : " + startDate);
      console.log("Ending Date : " + endDate);
      return productDate >= startDate && productDate <= endDate;
    });

    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    // setShowCal(false);
    setProjects(filterd);
  };

  return (
    <Row style={{ marginLeft: "-1px" }}>
      <Navbar />
      <div className="clicking"></div>
      <h1 style={{ textAlign: "center" }}>{}</h1>
      <div className="cdater flexer" onClick={() => setShowCal(!showCal)}>
        <div className="Cimg">
          <img
            src={calendar}
            alt="cDate"
            // className="cDate "
          />
          <input
            className="currentDate"
            style={{ position: "relative", left: "34px", top: "-20px" }}
            readonly=""
            placeholder="Early"
            value={
              startDate.getDate() +
              "-" +
              (startDate.getMonth() + 1) +
              "-" +
              startDate.getFullYear()
            }
          ></input>

          {showCal && (
            <DateRangePicker
              onChange={handleSelect}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={1}
              ranges={[selectionRange]}
              direction="horizontal"
            />
          )}
        </div>
        <div className="dateLetter"></div>
      </div>
      <div className="cont">
        <div className="table">
          <div className="tableHeader">
            <Font16>Projects</Font16>
            <Fontwo>Status</Fontwo>
          </div>
          {pro.map((obj12, index) => {
            return (
              <div key={index}>
                <div className="tableinputs">
                  <Input>{obj12.proName}</Input>
                </div>
                <div className="tablecounter5">
                  <Counter
                    className={`box ${
                      obj12.status === "Pending"
                        ? "blue"
                        : obj12.status === "Approved"
                        ? "green"
                        : "red"
                    }`}
                  >
                    {obj12.status}
                  </Counter>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Row>
  );
}

export default EmployeStatus;

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
const Fontwo = styled.div`
  position: absolute;
  width: 100px;
  height: 19px;
  left: 990px;
  top: 11px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #2b2b2b;
  @media (min-width:1200px) and (max-width:1400px)
  {
    left: 604px;
  }
 @media (min-width:1400px) and (max-width:1600px)
  {
    left: 703px;
  }
   
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
  font-size: 17px;
  line-height: 24px;
  color: #505558;
  padding-top: 13px;
  padding-left: 13px;
  text-align: center;
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
`;
const Input = styled.div`
  position: absolute;
  width: 166px;
  height: 18px;
  left: 30px;
  top: 14px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #00a3ff;
`;
// setProjects((prevObjectsArray) => [...prevObjectsArray, obj1]);
// const handelObj = async() => {
//   objects.forEach((element) => {
//     // console.log("project Name : " + element.projects);
//     // console.log("project Status : " + element);
//     // const obje = element.projects;
//     element.projects.forEach((ele) => {
//       console.log("element Id : " + ele.totalTime + " Name : " + ele.proName);
//       setProjects((prevObjectsArray) => [...prevObjectsArray, ele]);
//     });
//   });
// };

// console.log(
//   "All details 1 : " +
//     pro.id +
//     " " +
//     pro.proName +
//     " " +
//     pro.date +
//     " " +
//     pro.status
// );
