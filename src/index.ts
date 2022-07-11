import express from "express";
import "dotenv/config";

require("./db/connectDB"); //connect API to MongoDB

import userRoutes from "./routes/userRoutes";
import ticketRoutes from "./routes/ticketRoutes";

//define PORT and backFall Port
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

//Register user routes
app.use("/users", userRoutes);
app.use("/ticket", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
