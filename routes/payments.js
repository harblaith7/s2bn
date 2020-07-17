const router = require('express').Router()
const Stripe = require('stripe')

const stripe = new Stripe(require('../config/dev').stripeSecret)

router.post('/', async (req, res) => {
    const {amount} = req.body

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd'
    })
    res.status(200).send(paymentIntent.client_secret)
})


module.exports = router