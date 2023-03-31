const express = require("express");
const router = express.Router();

// const { signupUser } = require("../Controller/user-controller");
const { getingUser } = require("../Controller/user-GettingCntrl");
// router.post("/signup", signupUser);

router.post("/getting", getingUser);
console.log("Enter Router");

module.exports = router;
