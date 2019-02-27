'use strict'

var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')
// var citiesRouter = require('./routes/cities')
var uploadRouter = require('./routes/upload')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
// app.use('/users', usersRouter)
// app.use('/cities', citiesRouter)
app.use('/api/images', uploadRouter)

module.exports = app
