const test = require('tape')
const request = require('supertest')
const express = require('express')

const User = require('./models/user/index.js')
const app = require('../index')
let documentId

before(done => {
  app.on('APP_STARTED', () => {
    done()
  })
})

describe('API Integration Test', () => {
  it('Runs all tests', done => {
    test('/api/user/all', assert => {
      request(app)
        .get('/api/user/all')
        .expect(200)
        .end((err, res) => {
          if (err) return assert.fail(JSON.stringify(res))
          documentId = res.body[0]._id
          assert.pass('Got all users successfully, test passed!')
          assert.end()
        })
    })
  })
})
