import mongoose from "mongoose";

// For database connection (MongoDB)
export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection to Database Successfull.");
  } catch (error) {
    console.log(error);
  }
};
