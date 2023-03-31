const express = require("express");

const router = express.Router();

const { getEmployStatus } = require("../Controller/employeStatusCntrl");

console.log("entering router");

router.get("/employeStatus", getEmployStatus);

module.exports = router;