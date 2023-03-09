import mongoose from "mongoose";

mongoose.set("strictQuery", true);

//connect to mongodb

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
