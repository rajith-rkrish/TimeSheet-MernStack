const express = require("express");
const router = express.Router();

const { changePsw } = require("../Controller/changeCurPswCntrl");

router.put("/changePsw", changePsw);

module.exports = router;
