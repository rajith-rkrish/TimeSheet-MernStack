import React from "react";
import "../employeProject/employeProject.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import addIcon from "../employeProject/add row.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Row from "react-bootstrap/Row";
import { TimePicker } from "react-ios-time-picker";
import { ToastContainer, toast } from "react-toastify";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Await } from "react-router-dom";
// import Row from "react-bootstrap/Row";

function EmployeProject(props) {
  const [project, setProject] = useState("");
  const [total, setTotalTime] = useState(null);
  const [objectsArray, setObjectsArray] = useState([]);
  const [start, setStartWatch] = useState(null);
  const [stop, setStopWatch] = useState(null);
  // const navigate = useNavigate();

  const resetState = () => {
    setProject("");
    setTotalTime(null);
    setStartWatch(null);
    setStopWatch(null);
  };

  useEffect(() => {
    if (project && start && stop) {
      const total = getTotalLunchTime(start, stop);
      setTotalTime(total);
      const newObj = {
        proName: project,
        totalTime: total,
      };

      setObjectsArray((prevObjectsArray) => [...prevObjectsArray, newObj]);
      resetState();
    }
  }, [project, start, stop]);

  const toastPosting = () => {
    toast.error("Error", { position: "top-center" });
  };
  const toastPoster = () => {
    toast.success("Sucessfully Completed.......", { position: "top-center" });
  };

  const toastWarningProject = () => {
    toast.warning("Select the Project", { position: "top-center" });
  };

  const toastWarningStart = () => {
    toast.warning("Select The Start Time", { position: "top-center" });
  };
  const toastWarningStop = () => {
    toast.warning("Select The Stop Time", { position: "top-center" });
  };
  const toastWarning = () => {
    toast.warning("Fill the blanks", { position: "top-center" });
  };
  const toastWarningstartStop = () => {
    toast.warning("Select the StopWatch", {
      position: "top-center",
    });
  };

  const handleFormSubmit = async (start, stop) => {
    if (project && start && stop) {
      const total = getTotalLunchTime(start, stop);
      setTotalTime(total);
      const newObj = {
        proName: project,
        // starter: start,
        // stoper: stop,
        totalTime: total,
      };

      // objectsArray.forEach((object) => {
      //   if (object === null) {
      //     setObjectsArray((prevObjectsArray) => [...prevObjectsArray, newObj]);
      //   } else if (start > object.stop) {
      //     setObjectsArray((prevObjectsArray) => [...prevObjectsArray, newObj]);
      //   } else {
      //     toastPosting();
      //   }
      // });
      setObjectsArray((prevObjectsArray) => [...prevObjectsArray, newObj]);
      resetState();
    }
  };

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
  function getTotalLunchTime(lunchStart, lunchStop) {
    const lunchStartTimeInMinutes = timeToInteger(lunchStart);
    const lunchStopTimeInMinutes = timeToInteger(lunchStop);
    const totalTimeInMinutes = lunchStopTimeInMinutes - lunchStartTimeInMinutes;
    const hours = Math.floor(totalTimeInMinutes / 60);
    const minutes = totalTimeInMinutes % 60;
    const tottaling = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return tottaling;
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const submiting = () => {
    const total = props.value.total;
    const date = props.value.date;
    const login = props.value.login;
    const logout = props.value.logout;
    const lunchStart = props.value.lunchStart;
    const lunchStop = props.value.lunchStop;
    handleFormSubmit(start, stop);
    if (objectsArray.length > 0) {
      console.log("objects Array 1 : " + objectsArray);
      axios
        .post("http://localhost:5000/postTimeSheet", {
          total,
          date,
          login,
          logout,
          lunchStart,
          lunchStop,
          data: objectsArray,
        })
        .then((res) => {
          console.log("response is " + res.data);
          if (res.data === "exist") {
            toastPoster();
            setTimeout(() => {
              handleRefresh();
            }, 3000);
          } else {
            console.log("the Value is not get");
            toastPosting();
          }
        });
    } else {
      toastPosting();
      console.log("THE VALUE IS NOT GET ");
    }
  };
  return (
    <>
      <div>
        <div className="project">
          <div className="projectHeader">
            <Profont>Projects</Profont>
            <Profont className="projectStart">Start</Profont>
            <Profont className="projectStop">Stop</Profont>
            <Profont className="projectTotal">Total</Profont>
          </div>
          <div>
            <div className="projectInput">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Project
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={project}
                    label="project"
                    name="proName"
                    onChange={(e) => {
                      setProject(e.target.value);
                    }}
                  >
                    <MenuItem index={1} value={"Project1"}>
                      Project1
                    </MenuItem>
                    <MenuItem index={2} value={"Project2"}>
                      Project2
                    </MenuItem>
                    <MenuItem index={3} value={"Project3"}>
                      Project3
                    </MenuItem>
                  </Select>
                </FormControl>
                <div className="start">
                  <TimePicker
                    onChange={(time) => setStartWatch(time)}
                    placeHolder="Start"
                    value={start}
                  />
                </div>
                <div className="stop">
                  <TimePicker
                    onChange={(time) => setStopWatch(time)}
                    placeHolder="Stop"
                    value={stop}
                  />
                </div>
              </Box>
            </div>
            <div className="projectCounter">
              <ProCounter name="totalTime" value={total}>
                {getTotalLunchTime(start, stop)}
              </ProCounter>
            </div>
          </div>
        </div>
        <div>
          {objectsArray.map((object, index) => {
            console.log(objectsArray);
            console.log("objs : " + object.proName + "  " + object.totalTime);
            // console.log(getTotalTime(start, stop));
            return (
              <Row
                key={index}
                className="projectInput"
                style={{
                  marginTop: "7px",
                  marginLeft: "0px",
                  marginBottom: "7px",
                }}
              >
                <Box sx={{ minWidth: 120 }} key={index}>
                  <FormControl fullWidth>
                    <InputLabel id={`demo-simple-select-label-${index}`}>
                      Select Project
                    </InputLabel>
                    <Select
                      labelId={`demo-simple-select-label-${index}`}
                      id={`demo-simple-select-${index}`}
                      value={object.proName}
                      onChange={() => {}}
                    >
                      <MenuItem value={"Project1"}>Project1</MenuItem>
                      <MenuItem value={"Project2"}>Project2</MenuItem>
                      <MenuItem value={"Project3"}>Project3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div className="projectCounter1">
                  <ProCounter>{object.totalTime}</ProCounter>
                </div>
              </Row>
            );
          })}
        </div>
      </div>
      <div className="spacing">
        <div className="addingBtn">
          <button onClick={() => handleFormSubmit(start, stop)}>
            <Wfont>Add new row</Wfont>
          </button>
        </div>
        <div className="submitBtn">
          <button onClick={() => submiting()}>
            <Wfont>Submit</Wfont>
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default EmployeProject;

const ProCounter = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #505558;
  padding-top: 13px;
  padding-left: 29px;
  @media (min-width: 768px) and (max-width: 992px) {
    padding-left: 8px;
    font-size: 18px;
  }
  @media (min-width: 1023px) and (max-width: 1200px) {
    padding-left: 18px;
  } ;
`;
const Profont = styled.div`
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
const Wfont = styled.div`
  position: absolute;
  left: 8.7%;
  right: 7.98%;
  top: 21.5%;
  bottom: 27.5%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #ffffff;

  @media (min-width: 768px) and(max-width:992px) {
    font-size: 16px;
  }
`;

// function getTotalTime(start, stop) {
//   const loginTimeInMinutes = timeToInteger(start);
//   const logoutTimeInMinutes = timeToInteger(stop);
//   const totalTimeInMinutes = logoutTimeInMinutes - loginTimeInMinutes;
//   const hours = Math.floor(totalTimeInMinutes / 60);
//   const minutes = totalTimeInMinutes % 60;
//   timevalue = `${hours.toString().padStart(2, "0")}:${minutes
//     .toString()
//     .padStart(2, "0")}`;
//   // setTotalTime(timevalue);
//   return timevalue;
// }

// function timeToInteger(time) {
//   if (time) {
//     const [hours, minutes] = time.split(":");
//     const date = new Date();
//     date.setHours(hours);
//     date.setMinutes(minutes);
//     const timeInMs = date.getTime();
//     const timeInMinutes = timeInMs / 60000; // 60 seconds * 1000 milliseconds
//     return Math.floor(timeInMinutes);
//   } else {
//     return 0;
//   }
// }

// const submitChange = (project) => {
//   if (project.toString() === "" || project === null) {
//     toastWarning();
//   } else {
//     setList([...list, { project }]);
//     setProject("");
//   }
// };

// const handleChange = (e) => {
//   setProject(e.target.value);
// };

// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   setObj({ ...objs, [name]: value });
//   console.log("objects : "+objs.proName+" "+objs.totalTime)
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   // do something with formValues object
// };

// function totalTiming(start, stop) {
//   if (start && stop) {
//     const objs = { start, stop };
//     handleTimeChange(objs);
//   } else {
//     console.log("still not get values");
//   }
// }

// function handleTimeChange({ value }) {
//   // const [startTime, stopTime] = { ...value };
//   const startTime = value.start;
//   const stopTime = value.stop;

//   if (startTime && stopTime) {
//     const [startHours, startMinutes] = startTime.split(":");
//     const [stopHours, stopMinutes] = stopTime.split(":");
//     const totalTimeInMinutes =
//       (stopHours - startHours) * 60 + (stopMinutes - startMinutes);
//     const hours = Math.floor(totalTimeInMinutes / 60);
//     const minutes = totalTimeInMinutes % 60;
//     const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")}`;
//     setTotalTime(formattedTime);
//     console.log("Total time : " + formattedTime);
//   } else {
//     setTotalTime(null);
//   }
// }

// else if (start === null && stop === null && project) {
//   toastWarningstartStop();
// } else if (start === null && project && stop) {
//   toastWarningStart();
// } else if (stop === null && project && start) {
//   toastWarningStop();
// } else if (project === "" && start && stop) {
//   toastWarningProject();
// } else {
//   toastWarning();
// }
