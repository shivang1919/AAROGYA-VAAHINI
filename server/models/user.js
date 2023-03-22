const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema(
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
        latitude: {
            type: Number,
            default:0,
            required: true
        },
        longitude: {
            type: Number,
            default:0,
            required: true
        },
        driverassigned: {

            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
            default: null

        }

    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;