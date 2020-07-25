const router = require('express').Router()
const db = require('../database/db')
const checkAuth = require("../middleware/checkAuth")


router.post('/', checkAuth, async (req, res) => {

    const {city, snippet} = req.body

    let results = await db
    .getDb()
    .collection('chapters')
    .updateOne(
        {city},
        {$set: {
            snippet
        }},
        {upsert: true}
    )
    

    res.json(results)
})

router.get('/', async (req, res) => {
    let cities = await db
    .getDb()
    .collection('chapters')
    .find({})
    .toArray()

    res.json({
        cities
    })
})

module.exports = router