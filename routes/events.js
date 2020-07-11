const router = require('express').Router()
const checkAuth = require('../middleware/checkAuth')
const db = require('../database/db')



router.post('/create', checkAuth, async (req, res) => {
    const {
        name,
        location,
        cardImageUrl,
        startDate,
        endDate,
        shortDescription,
        longDescription,
        price,
        volume,
        firstName
    } = req.body

    let result = await db
    .getDb()
    .collection('events')
    .insertOne({
        name,
        location,
        cardImageUrl,
        startDate,
        endDate,
        shortDescription,
        longDescription,
        price,
        volume,
        firstName
    })

    res.json({
        result
    })
})

router.get('/', checkAuth, async (req, res) => {
    try {
        let events = await db
        .getDb()
        .collection('events')
        .find({})
        .toArray()

        res.json({
            events
        })
    } catch (error) {
        console.log(error)
    }
})




module.exports = router