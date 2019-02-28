'use strict'

const express = require('express')
const router = express.Router()
const consola = require('consola')
const data = require('../../data/en/locations/cities.json')

router.get('/', function (req, res, next) {
  res.json(data)
});

module.exports = router
