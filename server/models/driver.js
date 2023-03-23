const mongoose = require("mongoose");
const validator = require("validator");
const User = require("./user");
const DriverSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("not valid email address")
                }
            }
        },
        mobile: {
            type: String,
            required: true,
            maxlength: 10
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        cpassword: {
            type: String,
            required: true,
            min: 8,
        },
        latitude:{
            type:Number,
            default:0,
            required:true
        },
        longitude:{
            type:Number,
            default:0,
            requried:true

        },
        isloggedin:{
            type:Boolean,
            default:false
        },
        isoccupied:{
            type:Boolean,
            default:false
        },
        targetuser:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            default:null
        }
        
    },
    { timestamps: true }
);

const Driver = mongoose.model("Driver", DriverSchema);
module.exports = Driver;