const asyncHandler = require("express-async-handler");
const user = require("../Model/userModel");
const nodemailer = require("nodemailer");

const forgotPsw = asyncHandler(async (req, res) => {
  const {email} = req.body;
  try {
    const check = user.findOne({email:email});

    console.log("Email : " + email);

    if (check) {
      console.log("Matched Email");

      var charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&";

      var password = "";
      
      for (var i = 0; i < 8; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Sending Email With React And NodeJs",
        html: `<h1>Congratulations.... Your Password is ${password}</h1>`,
      };

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error", error);
        } else {
          console.log("Email sent " + info.response);
        }
      });
      await user.updateOne({ email }, { psw: password });
      res.json("exist");
    } else if(Email1!==email) {
      res.json("notexist");
    }
  } catch (error) {}
});
module.exports = { forgotPsw };
