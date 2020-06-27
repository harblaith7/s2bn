const {MongoClient} = require('mongodb')
const keys = require('../config/dev');


let _db;


const initDb = callback => {
    // Is there a database initialized 
    if(_db) return callback(null, _db)

    // If not, then we initialize the database
    MongoClient.connect(keys.MongoURI, { useUnifiedTopology: true } )
    .then(client => {
        console.log('connected to db')
        _db = client.db();
        callback(null, _db)
    })
    .catch(error => {
        callback(error)
    })
}


const getDb = callback => {
    if(!_db){
        throw new Error('Database is not initialized')
    }
    return _db
}


module.exports = {
    initDb,
    getDb
}