const asyncHandler = require('express-async-handler')
const generateToken = require('../config/token')
const User = require('../models/user')
const Driver = require('../models/driver')
const bcrypt = require('bcryptjs')
const { findByIdAndUpdate } = require('../models/user')
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
    const {email,password,latitude,longitude} = req.body;
    console.log(req.body)
    // user finding through email
    const userFound = await User.findOne({email});

    if(!userFound){
        res.status(400).json({"error":"invalid credentials"})
        return
    }
    if(userFound){
        
        if(bcrypt.compareSync(password,userFound.password)){
            const updatedUser=await User.findByIdAndUpdate({_id:userFound._id},{
                latitude:latitude,
                longitude:longitude
            })
            res.status(201).json({
                updatedUser,token : generateToken(userFound.id)
            })
    
        }
        else{
            res.status(400).json({"error":"Invalid Credentials"})
        }
    }
    // checking password
})
const setuserdetails = asyncHandler(async(req,res)=>{
    try{
        console.log(req.body)
        const setDriver=await Driver.findOne({email:req.body.email});
        console.log(setDriver)
        setDriver.targetuser=req.body.user;
        console.log(setDriver)
        // const setdriver = await Driver.findByIdAndUpdate(req.body.email,{targetuser:req.body.user})
        await setDriver.save();
        res.status(201).json({ setDriver })
    }catch(error){
        res.status(500).json({ message: "Error in setting up driver" })
        console.log(error)
    }

})


module.exports = {registerUser,loginUser,setuserdetails}