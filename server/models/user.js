const mongoose = require("mongoose");
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
            unique: true
        },
        mobile: {
            type: String,
            required: true,
            maxlength: 10
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        cpassword: {
            type: String,
            required: true,
            min: 6
        },
        
    },
    { timestamps: true }
)
const User = mongoose.model("User", UserSchema);
module.exports = User;