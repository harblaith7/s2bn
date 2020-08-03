const express = require('express');
const app = express()
const db = require('./database/db')
const cors = require('cors')


app.get('/', async (req, res) => {
    res.send('Bye')
})

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// ROUTES
app.use('/auth', require('./routes/auth'))
app.use('/messages', require('./routes/messages'))
app.use('/events', require('./routes/events'))
app.use('/payments', require('./routes/payments'))
app.use('/chapters', require('./routes/chapters'))
app.use('/postings', require('./routes/volunteer'))

const PORT = process.env.PORT || 5000


db.initDb((err, db) => {
    if(err) console.log(err)
    else {
        app.listen(PORT, () => {
            console.log(`Now listen on PORT ${PORT}`)
        })
    }
})

