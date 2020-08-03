const router = require('express').Router()
const checkAuth = require('../middleware/checkAuth')
const db = require('../database/db')

router.post('/', checkAuth, async (req, res) => {
    const {chapterName, title, description, googleFormLink} = req.body

    let results = await db
    .getDb()
    .collection('postings')
    .updateOne(
        {chapterName},
        {$push: {opportunities: {
            title,
            description,
            googleFormLink
        }}},
        {upsert: true}
    )

    res.json({
        results
    })

})

router.get('/', async (req, res) => {
    try {
        let postings = await db
        .getDb()
        .collection('postings')
        .find({})
        .toArray()

        res.send(postings)
    } catch (error) {
        res.send('error')
    }
})


module.exports = router