const express = require("express");
const router = express.Router();

const { postTimeSheet } = require("../Controller/timeSheetPost");

router.post("/postTimeSheet", postTimeSheet);

module.exports = router;
