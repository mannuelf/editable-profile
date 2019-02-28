'use strict'

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors');
const consola = require('consola')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/user/attributes')
const citiesRouter = require('./routes/locations/cities')
const uploadRouter = require('./routes/upload/upload')

const app = express()

const whiteList = [
  'http://localhost:3001',
  'http://localhost:9000'
]
let corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by cors'))
    }
  }
}

app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/user/attributes', usersRouter)
app.use('/locations/cities', citiesRouter)
app.use('/upload', uploadRouter)

module.exports = app
