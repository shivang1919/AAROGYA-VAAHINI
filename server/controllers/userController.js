const asyncHandler = require('express-async-handler')
const generateToken = require('../config/token')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
// creating a new user (REGISTER)
const registerUser = asyncHandler(async(req,res)=>{
    const{name,email,mobile,password,cpassword} = req.body

    // if all the fields are empty
    if(!name || !email || !mobile || !password || !cpassword){
        res.status(400).json({"error":"Please fill in all the input fields"})
        return
    }

    // if email is already registered
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400).json({"error":"User with this email already exists"})
        return
    }

    // salting the password
    var salt = bcrypt.genSaltSync(12);
    // when there is no signing up error
    const user = new User({
        name,email,mobile,
        password:bcrypt.hashSync(password, salt),
        cpassword:bcrypt.hashSync(password, salt)
    }) 
    // save user
    const result = user.save()
    // registration is successful
    if(result){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email: user.email,
            mobile: user.mobile,
            password:user.password,
            cpassword:user.cpassword,
            token : generateToken(user.id)
        })
    }
    // registration not successful
    else{
        res.status(400).json({"error":"Failed to create the user"})
    }

})
// verifying a user (LOGIN)
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    // user finding through email
    const userFound = await User.findOne({email});

    if(!userFound){
        res.status(400).json({"error":"invalid credentials"})
        return
    }

    // checking password
    if(bcrypt.compareSync(password,userFound.password)){
        res.status(201).json({
            _id:userFound.id,
            name:userFound.name,
            email: userFound.email,
            mobile: userFound.password,
            cpassword:userFound.cpassword,
            token : generateToken(userFound.id)
        })

    }
    else{
        res.status(400).json({"error":"Invalid Credentials"})
    }

})

module.exports = {registerUser,loginUser}