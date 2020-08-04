const MongoURI = process.env.MONGO_URI;
const JWTSecret = process.env.JWT_SECRET;
const authCode = process.env.AUTH_CODE;
const stripeAPIKey = process.env.STRIPE_API_KEY
const stripeSecret = process.env.STRIPE_API_SECRET


module.exports = {
    MongoURI,
    JWTSecret,
    authCode,
    stripeSecret,
    stripeAPIKey
}