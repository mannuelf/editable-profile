'use strict'

const express = require('express')
const router = express.Router()
const data = require('../../data/en/locations/cities.json')

router.get('/', (req, res, next) => {
  res.json(data)
});

module.exports = router
