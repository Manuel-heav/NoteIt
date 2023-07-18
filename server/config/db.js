const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
