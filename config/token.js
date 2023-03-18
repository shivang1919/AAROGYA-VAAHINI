const jwt = require('jsonwebtoken')

//generating a new token and assigning to user on signup
const generateToken = (id) =>{
    return jwt.sign({id},process.env.KEY,{expiresIn:"7d"})
}

module.exports = generateToken