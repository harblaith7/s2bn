const router = require('express').Router()
const Stripe = require('stripe')
const keys = require('../config/dev')
const dev = require('../config/dev')
const db = require('../database/db')
const {ObjectID} = require('mongodb')

const stripe = new Stripe(dev.stripeSecret)

router.post('/', async (req, res) => {
   
    try {
        const {amount} = req.body
        console.log(amount)

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "cad"
        })

        res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }

})

router.post('/save-user', async (req, res) => {
    const {name, email, phone, id} = req.body

    console.log(name)

    try {
        let newUser = await db
        .getDb()
        .collection("events")
        .updateOne(
            {_id: ObjectID(id)},
            { $push : {
                attendes: {
                    name,
                    email,
                    phone
                }
            }}
        )

        res.json({newUser})
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})


module.exports = router