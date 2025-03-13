const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected ${connection.connection.host}`.blue.bold);
  } catch (e) {
    console.log("Error", e.Message);
    process.exit();
  }
};

module.exports = { connectDB };
