const router = require('express').Router()
const db = require('../database/db');
const {check, validationResult} = require('express-validator')
const bycrpt = require('bcrypt')
const JWT = require('jsonwebtoken')
const keys = require('../config/keys')
const checkAuth = require('../middleware/checkAuth')

// Path: api/auth/login
// Not Protected
router.post('/login', [
    check('email', 'Please input a valid email')
    .isEmail(),
    check('password', 'Please input a password')
    .not()
    .isEmpty()
], async (req, res) => {
    console.log("called login")
    // Check if the inputs are correct
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }

    const {email, password} = req.body
    // Check if user even exists 
    let user = await db.getDb()
    .collection('users')
    .findOne({email})

    if(!user){
        return res.status(422).json({
            errors: [
                {
                    msg: "Invalid Credentials"
                }
            ]
        })
    }

    // Compare user password with given password
    let isMatch = await bycrpt.compare(password, user.password)

    if(!isMatch){
        return res.status(404).json({
            errors: [
                {
                    msg: "Invalid Credentials" 
                }
            ]
        })
    }

    // Send JSON WEB TOKEN
    const token = await JWT.sign({email}, keys.JWTSecret, {expiresIn: 360000})

    res.json({
        token
    })
})

// Path: api/auth/signup
// Not Protected
router.post('/signup', [
    check('firstName', 'First name is required')
        .not()
        .isEmpty(),
    check('lastName', 'Last name is required')
        .not()
        .isEmpty(),
    check('email', 'Please provide a valid email')
        .isEmail(),
    check('password', 'Password must be greater than 8 characters')
        .isLength({min: 8}),
    check('confirmPassword', 'You must confirm you password')
        .not()
        .isEmpty(),
    check('authenticationCode', 'Authentication code is required')
        .not()
        .isEmpty()
], async (req, res) => {
    // Checking if input results are valid
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }

    const {firstName, lastName, email, password, confirmPassword, authenticationCode} = req.body
    // Checking if passwords match
    if(password !== confirmPassword){
        return res.status(400).json({
            errors: [
                {
                    msg: "Passwords do not match"
                }
            ]
        })
    }

    // Check if authcode is correct
    if(authenticationCode !== keys.authCode){
        return res.status(400).json({
            errors: [
                {
                    msg: "Incorrect authentication code"
                }
            ]
        })
    }

    // Checking if user already exists in the database
    let user = await db.getDb()
    .collection('users')
    .findOne({email})

    if(user) {
        return res.status(400).json({
            errors: [
                {
                    msg: "User already exists"
                }
            ]
        })
    }

    // If user does not exist, hash the password
    const hashedPassword = await bycrpt.hash(password, 10)

    // Save user in the database
    user = await db.getDb()
    .collection('users')
    .insertOne({
        firstName,
        lastName,
        email,
        password: hashedPassword
    })

    // Create JSON web token
    const token = await JWT.sign({email}, keys.JWTSecret, {expiresIn: 360000});

    res.json({
        token
    })
})

// Path: api/auth/loaduser
// Protected
router.get('/', checkAuth, async (req, res) => {

    const email = req.user;

    try {
        const user = await db
        .getDb()
        .collection("users")
        .find({email})
        .project({"password": 0, "_id": 0})
        .toArray()

        res.json(
            user[0]
        )
    } catch (error) {
        res.status(500).json({
            errors: [
                {
                    msg: "Something is wrong with our server"
                }
            ]
        })
    }
})


module.exports = router