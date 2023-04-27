const asyncHandler = require("express-async-handler");
const user = require("../Model/userModel");
const bcrypt = require("bcrypt");

const changePsw = asyncHandler(async (req, res) => {
  const { email, cPsw, newPsw } = req.body;

  try {
    const userDoc = await user.findOne({ email });

    if (!userDoc) {
      // Handle the case when the user does not exist
      console.log("user is not exist ");
      res.json("notexist");
    } else {
      const password1 = userDoc.psw;
      console.log("PASSWORD : " + password1);
      console.log("USER PASSWORD : " + cPsw);

      if (cPsw !== password1) {
        // Handle the case when the passwords do not match
        console.log("not matched password");
        res.json("notexist");
      } else if (cPsw === password1) {
        console.log("matched password");
        const result = await user.updateOne(
          { email },
          { $set: { psw: newPsw } }
        );
        if (result.nModified === 0) {
          // Handle the case when the password is not updated
          res.json("notexist");
        } else {
          res.json("exist");
        }
      }
    }
  } catch (error) {}
});
module.exports = { changePsw };
