// import React from "react";
import NavBar from "../NavbarAnim/NavAnime";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { TimePicker } from "react-ios-time-picker";
import { useState, useEffect } from "react";
import "../AdminDash/Dash.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import MenuItem from "@mui/material/MenuItem";
import Calendar from "../employeTime/calendar.svg";
import Container from "react-bootstrap/Container";
// import BarChart from "./BarChart";
import FormControl from "@mui/material/FormControl";
import UserData from "./Data";
import BarChart from "../BarChart/BarChart";
import axios from "axios";

function DashBored() {
  const [date, setDate] = useState(null);
  const [project, setProject] = useState([]);
  const [uniqueProject, setUniqueProject] = useState();
  const [values, setValues] = useState();
  const [data, setData] = useState([{ cDate: "", totalTime: "", proName: "" }]);
  const [Dtls, setDtls] = useState([]);

  useEffect(() => {
    console.log("UserData : " + UserData);
    var today = new Date();
    const Curentdate =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    setDate(Curentdate);

    try {
      axios.get("http://localhost:5000/employeStatus").then((res) => {
        if (res.data) {
          const projectSet = new Set();
          res.data.forEach((element) => {
            element.projects.forEach((ele) => {
              const projectName = ele.proName;
              projectSet.add(projectName);
            });
          });
          setProject([...projectSet]); // convert Set to array and set state
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log("Project Unique : " + values);

  const projectDetails = () => {
    // console.log("projectDetails");
  };

  return (
    <>
      <Row>
        <Col>
          <NavBar />
        </Col>
        <Col>
          <div className="center flex grid">
            <div className="headerDate">
              <img className="cals" src={Calendar} alt="cDate" />
              <div className="CrDate">{date}</div>
            </div>
            <div className="Dashheader">Dashboard</div>
            <Box className="dropdowns" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel className="labels" id="demo-simple-select-label">
                  Select Project
                </InputLabel>
                <Select
                  className="labels"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values}
                  label="project"
                  name="proName"
                  onChange={(e) => {
                    setValues(e.target.value);
                  }}
                >
                  {project ? (
                    project.map((obj, index) => (
                      <MenuItem
                        key={index}
                        onClick={projectDetails()}
                        className="labels"
                        value={obj}
                      >
                        {obj}
                      </MenuItem>
                    ))
                  ) : (
                    <div>Loading projects...</div>
                  )}
                </Select>
              </FormControl>
            </Box>
            <div className="whightbox">
              <div className="displayFlex">
                <div className="Headings">
                  <div className="TotalTimeHeader">Total Time</div>
                  <div className="output_value">value</div>
                </div>
                <div className="Headings">
                  <div className="project_name">Top Project</div>
                  <div className="output_value">value</div>
                </div>
                <div className="Headings">
                  <div className="Client_Name">Top Client</div>
                  <div className="output_value">value</div>
                </div>
              </div>
              <div>
                <BarChart />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DashBored;
