const asyncHandler = require('express-async-handler')
const generateToken = require('../config/token')
const Driver = require('../models/driver')
const bcrypt = require('bcryptjs')
// creating a new user (REGISTER)
const registerDriver = asyncHandler(async (req, res) => {
    const { name, email, mobile, password, cpassword,aadhar } = req.body

    // if all the fields are empty
    if (!name || !email || !mobile || !password || !cpassword || !aadhar) {
        res.status(400).json({ "error": "Please fill in all the input fields" })
        return
    }

    // if email is already registered
    const driverExists = await Driver.findOne({ email });
    if (driverExists) {
        res.status(400).json({ "error": "User with this email already exists" })
        return
    }

    // salting the password
    var salt = bcrypt.genSaltSync(12);
    // when there is no signing up error
    const driver = new Driver({
        name, email, mobile,aadhar,
        password: bcrypt.hashSync(password, salt),
        cpassword: bcrypt.hashSync(password, salt),
        isloggedin: false,
        isoccupied: false,

    })
    // save user
    const result = driver.save()
    // registration is successful
    if (result) {
        res.status(201).json({
            _id: driver.id,
            name: driver.name,
            email: driver.email,
            mobile: driver.mobile,
            password: driver.password,
            cpassword: driver.cpassword,
            aadhar: driver.aadhar,
            token: generateToken(driver.id)
        })
    }
    // registration not successful
    else {
        res.status(400).json({ "error": "Failed to create the user" })
    }

})

// verifying a user (LOGIN)
const loginDriver = asyncHandler(async (req, res) => {
    const { email, password, latitude, longitude } = req.body;

    // user finding through email
    const driverFound = await Driver.findOne({ email });

    if (!driverFound) {
        res.status(400).json({ "error": "invalid credentials" })
        return
    }

    // checking password
    if (driverFound) {
        if (bcrypt.compareSync(password, driverFound.password)) {
            const driverUpdated = await Driver.findByIdAndUpdate({ _id: driverFound._id }, {
                isloggedin: true,
                latitude: latitude,
                longitude: longitude

            })
            console.log(driverUpdated)
            res.status(201).json({
                driverUpdated, token: generateToken(driverUpdated._id)
            })

        }
        else {
            res.status(400).json({ "error": "Invalid Credentials" })
        }
    }


})

const getAllAvailableDriver = asyncHandler(async (req, res) => {
    try {
        const availableDriver = await Driver.find({ isloggedin: true, isoccupied: false })
        res.status(201).json({ availableDriver })
    } catch (error) {
        res.status(500).json({ message: "Error in fetching the drivers" })
    }
})

module.exports = { registerDriver, loginDriver, getAllAvailableDriver }