const user = require("../Model/userModel");
const asyncHandler = require("express-async-handler");

const getEmploys = asyncHandler(async (req, res) => {
  try {
    const result = await user.find({}).exec();
    res.send(result);
  } catch (error) {}
});
module.exports = { getEmploys };
