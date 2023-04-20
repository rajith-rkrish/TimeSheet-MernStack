const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true,
  },
  token: { type: String, required: true },
  createAt: {
    type: Date,
    default: Date.now(),
    expires: 3600,
  },
});
module.exports = mongoose.model("token", tokenSchema);









// const VerificationShema = new mongoose.Schema({
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     required: true,
//   },
//   token: {
//     type: String,
//     required: true,
//   },
//   createaAt: {
//     type: Date,
//     expires: 3600,
//     default: Date.now(),
//   },
// });

// VerificationShema.pre("save", async function (next) {
//   if (this.isModified("token")) {
//     const hash = await bcrypt.hash(this.token, 8);
//     this.token = hash;
//   }
//   next();
// });

// VerificationShema.methods.compareToken = async function (token) {
//   const result = await bcrypt.compareSync(token, this.token);
//   return result;
// };
// module.exports = mongoose.model("Verification", VerificationShema);