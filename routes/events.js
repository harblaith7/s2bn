const router = require('express').Router()
const checkAuth = require('../middleware/checkAuth')
const db = require('../database/db')
const {ObjectID} = require('mongodb')

// Create new event
// Private
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
        firstName,
        filterWords
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
        firstName,
        filterWords,
        attendes: []
    })

    res.json({
        result
    })
})

// Get all events 
// Public
router.get('/', async (req, res) => {
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

// Update one event fields
// Private
router.patch('/', checkAuth, async (req, res) => {
    const {_id, changes} = req.body
    let changesObj = {}

    for(let element of changes){
        if("location" in element){
            changesObj = {
                ...changesObj,
                ...element,
                filterWords: element.location.split(", ")
            }
        } else {
            changesObj = {
                ...changesObj,
                ...element
            }
        }
    }

    try {
        let updatedEvent = await db
        .getDb()
        .collection('events')
        .updateOne(
            {_id: ObjectID(_id)},
            {$set: changesObj}
        )

        res.json({
            updatedEvent
        })
    } catch (error) {
        console.log(error)
    }
})

// Delete Event 
// Private 
router.delete('/:id', checkAuth, async (req, res) => {
    const {id} = req.params
    console.log(id)
    let results = await db
    .getDb()
    .collection("events")
    .deleteOne(
        {_id: ObjectID(id)}
    )

    res.send(results)
})

module.exports = router