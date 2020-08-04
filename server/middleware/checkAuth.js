const jwt = require("jsonwebtoken");
const keys = require("../config/keys")

module.exports = async (req, res, next) => {
    const token = req.header('x-auth-token')

    // CHECK IF WE EVEN HAVE A TOKEN
    if(!token){
        res.status(401).json({
            errors: [
                {
                    msg: "No token found"
                }
            ]
        })
    }

    try {
        const user = await jwt.verify(token, keys.JWTSecret)
        req.user = user.email
        next()
    } catch (error) {
        res.status(500).json({
            errors: [
                {
                    msg: 'Something is wrong with our server'
                }
            ]
        })
    }




}