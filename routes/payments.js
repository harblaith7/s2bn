const router = require('express').Router()
const Stripe = require('stripe')
const keys = require('../config/dev')
const dev = require('../config/dev')

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


module.exports = router