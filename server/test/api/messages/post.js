const expect = require('chai').expect;
const request = require('supertest')
const Mockgoose = require('mockgoose').Mockgoose

const app = require('../../../index')
const conn = require('../../../database/db')



describe('POST /messages', () => {
    before((done) => {
        conn.initDb()
        .then(() => done)
        .catch((err) => done(err))
    })
})

it('OK, creating a new message works', (done) => {
    request(app).post('/api/messages')
    .send({
        name: "Jake",
        email: "harblaith7@gmail.com",
        title: "doing things",
        message: "i want to message"
    })
    .then((res) => {
        const body = res.body
        expect(body).to.contain.property("msg")
        done()
    })
})