const router = require('express').Router()
const db = require('../database/db')
const {check, validationResult} = require('express-validator')
const checkAuth = require('../middleware/checkAuth')
const {ObjectID} = require('mongodb')

// User sends a message
// Not protected
router.post('/', [
    check('name', 'How can we address you properly without your name?')
        .not()
        .isEmpty(),
    check('email', 'We need your email to message you back!')
        .isEmail(),
    check('title', 'Please provide a title')
        .not()
        .isEmpty(),
    check('message', 'The whole point was to send us a message wasn\'t it?')
        .not()
        .isEmpty()
], (req, res) => {
    // Check if input is valid
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()
        })
    }

    const {name, email, title, message} = req.body

    // Save message to database
    db.getDb()
    .collection('messages')
    .insertOne({
        name,
        email,
        title,
        message,
        status: 'unread',
        date: new Date()
    })

    res.json({
        msg: "Thank you for contacting us! We'll message you back as soon as we can."
    })
})

// Adminstrator gets all messages in email
// Protected 
router.get('/all', checkAuth, async (req, res) => {
    
    try {
        let messages = await db.getDb()
        .collection('messages')
        .find({})
        .toArray()

        res.json({
            messages
        })
    } catch (error) {
        res.status(500).json({
            errors: [
                {msg: "Something went wrong"}
            ]
        })
    }

    
})

// Update message status
// Protected
router.patch('/updateOne', checkAuth, async (req, res) => {
    const {status, _id} = req.body
    
    let result = await db
    .getDb()
    .collection('messages')
    .updateOne(
        {_id: ObjectID(_id)},
        {$set: {status}},
        { upsert: true }
    )

    res.json({
        result
    })
})

router.post('/deleteUser', checkAuth, async (req, res) => {
    const {_id} = req.body

    let result = await db
    .getDb()
    .collection("messages")
    .deleteOne(
        {_id: ObjectID(_id)}
    )

    res.json({
        result
    })
})

module.exports = router