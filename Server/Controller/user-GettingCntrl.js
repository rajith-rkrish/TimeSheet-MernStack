// const User = require("../Model/userModel");
const user = require("../Model/userModel");
const asyncHandler = require("express-async-handler");

const getingUser = asyncHandler(async (req, res) => {
  const { email, psw } = req.body;
  // console.log("getting Data from Backend : " + req.body.email);

  const data = {
    email: email,
    psw: psw,
  };

  try {
    const check = await user.findOne({ email: email });
    const checkPsw = await user.findOne({ psw: psw });
    console.log("USER ID : " + check._id);

    if (check) {
      if (checkPsw) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    } else {
      res.json("notexist");
      // await user.insertMany([data]);
    }
  } catch (e) {
    res.json("notexist");
  }

  // user.find((err, doc) => {
  //   if (err) return console.log(err);

  //   else
  //   res.json(doc);

  //   console.log("file DATAS :"+ doc)
  // });
});
module.exports = { getingUser };
