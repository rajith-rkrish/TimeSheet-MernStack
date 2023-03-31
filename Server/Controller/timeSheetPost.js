const timeSheet = require("../Model/timeSheetModel");
const asyncHandler = require("express-async-handler");
// const { default: Login } = require("../../my-app/src/Component/Login/Login");

const postTimeSheet = asyncHandler(async (req, res) => {
  const { total, date, login, logout, lunchStart, lunchStop } = req.body;
  const projects = req.body.data;

  // console.log("OBJECTS VALUE :"+req.body);

 

  const data = {
    cDate: date,
    loginTime: login,
    logOutTime: logout,
    lunchStart: lunchStart,
    lunchStop: lunchStop,
    totalTime: total,
    projects: projects,
  };
 
   console.log("Objectsss: " + data.cDate);
   console.log("Objectsss: " + data.projects);


  try {
    if (data) {
      await timeSheet.insertMany([data]);
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (error) {
    res.json("notexist");
  }
});

module.exports = { postTimeSheet };
