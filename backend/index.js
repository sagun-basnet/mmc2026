// const express = require("express")
import express from "express";
import userRoute from "./router/user.route.js";
import authRoute from "./router/auth.route.js";

const app = express();
app.use(express.json());

const port = 5555;

app.use("/api", userRoute); ///api/get-user
app.use("/auth", authRoute); ///api/get-user

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
