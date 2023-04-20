const express = require("express");
const router = express.Router();

const { getingUser } = require("../Controller/user-GettingCntrl");

router.post("/getting", getingUser);

console.log("Enter Router");

module.exports = router;
