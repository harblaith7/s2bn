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




module.exports = router