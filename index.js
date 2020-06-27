const express = require('express');
const app = express()
const db = require('./database/db')

app.get('/', (req, res) => {
    res.send('Hello')
})

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000


db.initDb((err, db) => {
    if(err) console.log(err)
    else {
        app.listen(PORT, () => {
            console.log(`Now listen on PORT ${PORT}`)
        })
    }
})

