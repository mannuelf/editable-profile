'use strict'

const config = require('./config/index')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const citiesRouter = require('./routes/locations/cities')
const indexRouter = require('./routes/index')
// const uploadImageRouter = require('./routes/uploadImage')
const userAttributesRouter = require('./routes/user/attributes')
const userRouter = require('./routes/user')

const app = express().use('*', cors())

try {
  mongoose.connect(`${config.mongoURI}/${config.dbName}`, { useNewUrlParser: true })
  mongoose.Promise = global.Promise // mongoose version of Promise is deprecated
} catch (err) {
  consola.error(err)
}

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/locations/cities', citiesRouter)
// app.use('/upload', uploadImageRouter)
app.use('/user', userRouter)
app.use('/user/attributes', userAttributesRouter)

// error handling
app.use((err, req, res, next) => {
  // consola.info('req', req)
  // consola.info('error', err)
  // consola.info('res', res.body)
  res.status(422)
  res.send({ error: err.message })
})

module.exports = app
