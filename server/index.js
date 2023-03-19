const express = require("express")
const app = express()
app.use(express.json())
const PORT = 8000;
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const { connectDB } = require("./databases/database");
const userRoutes = require("./routes/userRoutes")
const driverRoutes = require("./routes/driverRoutes")
const cors = require('cors');

dotenv.config();
app.use(cors({
    "origin": ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))


// routes
app.use('/api/drivers', driverRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log("Backend Server is running !")
})
connectDB();