const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  psw: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ReporterManager: {
    type: String,
    required: true,
  },
  // verified: {
  //   type: Boolean,
  //   default: false,
  //   required: true,
  // },
});

module.exports = mongoose.model("user", userSchema);
