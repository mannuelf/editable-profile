'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const dbName = process.env.NODE_ENV === 'dev' ? 'database-test' : 'database'
const url = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${dbName}:27017?authMechanism=SCRAM-SHA-1&authSource=admin`
const options = {
  userNewUrlParser: true,
  reconnectTries: 60,
  reconnectInterval: 1000
}
const routes = require('./routes/routes.js')
const port = process.env.PORT || 80
const app = express()
const http = require('http').Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', routes)
app.use((req, res) => {
  res.status(404)
})

