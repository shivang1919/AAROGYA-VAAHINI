const express = require("express")
const app = express()
const PORT = 8000;
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const { connectDB } = require("./databases/database");

dotenv.config();
app.listen(PORT, () => {
    console.log("Backend Server is running !")
})
connectDB();