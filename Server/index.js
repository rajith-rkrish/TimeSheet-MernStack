const express = require("express");
const dotenv = require("dotenv").config();
const Connection = require("./Database/db.js");
const port = process.env.PORT || 5000;
const cors = require("cors");

Connection();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/userRoute.js"));

app.use("/", require("./routes/timeSheetRoute"));

app.use("/", require("./routes/employeStatusRoute"));

app.use("/", require("./routes/userPostingRoute"));

app.use("/", require("./routes/forgotRoute"));

app.use("/", require("./routes/changePswRoute"));

console.log("Entering the index.js");

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
