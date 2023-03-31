const asyncHandler = require("express-async-handler");
const timeSheet = require("../Model/timeSheetModel");

const getEmployStatus = asyncHandler(async (req, res) => {
  console.log("entering control");

 const result = await timeSheet.find({}).exec();
 console.log("ALL VALUES: ", result);

  res.send(result);
});
module.exports = { getEmployStatus };
