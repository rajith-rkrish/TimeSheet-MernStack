import React from "react";
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

function DashBored() {
  const [date, setDate] = useState(null);
  const [project, setProject] = useState("");
  const [userDatas, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

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
  }, []);
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
                  value={project}
                  label="project"
                  name="proName"
                  onChange={(e) => {
                    setProject(e.target.value);
                  }}
                >
                  <MenuItem className="labels" index={1} value={"Project1"}>
                    Project1
                  </MenuItem>
                  <MenuItem className="labels" index={2} value={"Project2"}>
                    Project2
                  </MenuItem>
                  <MenuItem className="labels" index={3} value={"Project3"}>
                    Project3
                  </MenuItem>
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
