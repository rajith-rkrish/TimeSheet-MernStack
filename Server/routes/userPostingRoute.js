const express = require("express");
const router = express.Router();

const { postingUser } = require("../Controller/userPostingCntrl");

const { getEmploys } = require("../Controller/employDetailCntrl");

router.post("/postingEmploy", postingUser);

router.get("/gettingEmploys",getEmploys);

module.exports = router;
