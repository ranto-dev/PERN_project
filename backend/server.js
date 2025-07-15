const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const pool = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/todo", require("./routes/app.routes"));

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
