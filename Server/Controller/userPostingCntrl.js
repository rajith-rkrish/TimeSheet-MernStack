const user = require("../Model/userModel");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

const postingUser = asyncHandler(async (req, res) => {
  const { email, name, ReporterManager } = req.body;

  console.log("email ID : " + req.body);

  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&";
  var password = "";
  for (var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  const psw = password;
  const data = {
    email: email,
    name: name,
    ReporterManager: ReporterManager,
    psw: psw,
  };
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending Email With React And NodeJs",
      html: `<h1>Congratulations.... Your Password is ${psw}</h1>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
        res.json("not exist");
      } else {
        console.log("Email sent " + info.response);
        // res.status(201).json({ status: 201, info });
        // res.json("exist")

        if (data.email && data.name && data.ReporterManager) {
          user.insertMany([data]);
          res.json("exist");
        } else if (data.email == null && data.ReporterManager && data.name) {
          res.json("not exist");
        } else if (data.email && data.name == null && data.ReporterManager) {
          res.json("not exist");
        } else if (data.email && data.name && data.ReporterManager == null) {
          res.json("not exist");
        } else {
          res.json("not exist");
        }
      }
    });
  } catch (error) {
    res.status(201).json({ status: 401, error });
  }
});
module.exports = { postingUser };
