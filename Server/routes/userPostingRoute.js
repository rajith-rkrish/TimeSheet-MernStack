const express = require("express");
const router = express.Router();

const { postingUser } = require("../Controller/userPostingCntrl");

router.post("/postingEmploy", postingUser);

module.exports = router;
