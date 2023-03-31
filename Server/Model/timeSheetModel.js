const mongoose = require("mongoose");
const timeSheetModel = mongoose.Schema({
  cDate: {
    type: String,
    required: true,
  },
  loginTime: {
    type: String,
    required: true,
  },
  logOutTime: {
    type: String,
    required: true,
  },
  lunchStart: {
    type: String,
    required: true,
  },
  lunchStop: {
    type: String,
    required: true,
  },
  totalTime: {
    type: String,
    required: true,
  },
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  //   required: true,
  // },
  projects: [
    {
      proName: {
        type: String,
        required: true,
      },
      totalTime: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
      },
    },
  ],
});
module.exports = mongoose.model("timeSheet", timeSheetModel);
