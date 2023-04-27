const asyncHandler = require("express-async-handler");
const user = require("../Model/userModel");
const nodemailer = require("nodemailer");

const forgotPsw = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    // const check = user.findOne({ email });

    console.log("Email : " + email);

    user.findOne({ email }, (err, user1) => {
      if (err) {
        console.error(err);
        // Handle the error
      } else if (!user1) {
        console.log("User not found");
        res.json("notexist");
      } else {
        console.log("User found");

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
        //  user.updateOne({ email }, { psw: password });

        user.updateOne(
          { email },
          { $set: { psw: password } },
          (err, result) => {
            if (err) {
              console.error(err);
              // Handle the error
            } else if (result.nModified === 0) {
              console.log("Password not updated");
              // Handle the case when the password is not updated
            } else {
              console.log("Password updated successfully");
              // Handle the case when the password is updated successfully
            }
          }
        );
        res.json("exist");
      }
    });
  } catch (error) {}
});
module.exports = { forgotPsw };
