'use strict'

const cors = require('cors');
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

const indexRouter = require('./routes/index')
const usersPostRouter = require('./routes/user/post')
const usersRouter = require('./routes/user/attributes')
const citiesRouter = require('./routes/locations/cities')
const uploadRouter = require('./routes/upload/upload')

const app = express().use('*', cors());

mongoose.connect('mongodb://localhost/sparkapp', { useNewUrlParser: true })
mongoose.Promise = global.Promise // mongoose version of Promise is deprecated

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/user', usersPostRouter)
app.use('/user/attributes', usersRouter)
app.use('/locations/cities', citiesRouter)
app.use('/upload', uploadRouter)

module.exports = app
