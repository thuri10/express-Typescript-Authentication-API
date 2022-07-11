import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connection Successfully");
  } catch (err) {
    console.log(`Unable to connect to MongoDB`);
  }
};

connectDB();