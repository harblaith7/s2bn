const router = require('express').Router()
const db = require('../database/db')
const checkAuth = require("../middleware/checkAuth")
const { check } = require('express-validator')


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

router.post('/member', checkAuth, async (req, res) => {
    const {chapter, name, imageURL, linkedInURL, shortSnippet, position} = req.body

    let results = await db
    .getDb()
    .collection('chapters')
    .updateOne(
        {city: chapter},
        {$push: {
            members: {
                name,
                imageURL,
                linkedInURL,
                shortSnippet,
                position
            }
        }},
        {upsert: true}
    )

    res.json({results})
})

module.exports = router