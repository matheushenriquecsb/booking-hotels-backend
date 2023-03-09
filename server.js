import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/user.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import connectDb from "./database/index.js";
const app = express();
dotenv.config();

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "*" }));

//middleware to use routes
app.use("/api/auth", authRoute);
app.use("/api/user", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

//server
app.listen(process.env.PORT, () => {
  console.log("Server is running");
  connectDb();
});
