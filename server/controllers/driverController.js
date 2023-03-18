const asyncHandler = require('express-async-handler')
const generateToken = require('../config/token')
const Driver = require('../models/driver')
const bcrypt = require('bcryptjs')
// creating a new user (REGISTER)
const registerDriver = asyncHandler(async(req,res)=>{
    const{name,email,mobile,password,cpassword} = req.body

    // if all the fields are empty
    if(!name || !email || !mobile || !password || !cpassword){
        res.status(400).json({"error":"Please fill in all the input fields"})
        return
    }

    // if email is already registered
    const driverExists = await Driver.findOne({email});
    if(driverExists){
        res.status(400).json({"error":"User with this email already exists"})
        return
    }

    // salting the password
    var salt = bcrypt.genSaltSync(12);
    // when there is no signing up error
    const driver = new Driver({
        name,email,mobile,
        password:bcrypt.hashSync(password, salt),
        cpassword:bcrypt.hashSync(password, salt),

    }) 
    // save user
    const result = driver.save()
    // registration is successful
    if(result){
        res.status(201).json({
            _id:driver.id,
            name:driver.name,
            email: driver.email,
            mobile: driver.mobile,
            password:driver.password,
            cpassword:driver.cpassword,
            token : generateToken(driver.id)
        })
    }
    // registration not successful
    else{
        res.status(400).json({"error":"Failed to create the user"})
    }

})
// verifying a user (LOGIN)
const loginDriver = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    // user finding through email
    const driverFound = await Driver.findOne({email});

    if(!driverFound){
        res.status(400).json({"error":"invalid credentials"})
        return
    }

    // checking password
    if(bcrypt.compareSync(password,driverFound.password)){
        res.status(201).json({
            _id:driverFound.id,
            name:driverFound.name,
            email: driverFound.email,
            mobile: driverFound.mobile,
            password: driverFound.password,
            cpassword:driverFound.cpassword,
            token : generateToken(driverFound.id)
        })

    }
    else{
        res.status(400).json({"error":"Invalid Credentials"})
    }

})

module.exports = {registerDriver,loginDriver}