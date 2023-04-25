const express = require("express");
const router = express.Router();

const {forgotPsw}=require("../Controller/forgotCntrl");

router.put("/forgot", forgotPsw);

module.exports = router;