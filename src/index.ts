import express from "express";
import "dotenv/config";
require("./db/connectDB"); //connect API to MongoDB

import userRoutes from "./routes/userRoutes";
import ticketRoutes from "./routes/ticketRoutes";
import { tokenVerification } from "./middlewares/authMiddleware";
import authRoutes from "./routes/authRoutes";

//define PORT and Backfall Port
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/", authRoutes);
app.use(tokenVerification); //Protect all routes below here
app.use("/users", userRoutes);
app.use("/ticket", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
