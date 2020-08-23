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
app.use('/api/auth', require('./routes/auth'))
app.use('/api/messages', require('./routes/messages'))
app.use('/api/events', require('./routes/events'))
app.use('/api/payments', require('./routes/payments'))
app.use('/api/chapters', require('./routes/chapters'))
app.use('/api/postings', require('./routes/volunteer'))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("sure")
})


db.initDb((err, db) => {
    if(err) console.log(err)
    else {
        app.listen(PORT, () => {
            console.log(`Now listen on PORT ${PORT}`)
        })
    }
})

