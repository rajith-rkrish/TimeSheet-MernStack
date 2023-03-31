// const mongoose = require("mongoose");

// const Connection = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     const conn = await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
//     console.log(`DB is connected :${conn.connection.host}`);
//   } catch (error) {
//     console.log("DB is Not Connected...Error.....", error);
//     process.exit(1);
//   }
// };
// module.exports = Connection;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is Connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
