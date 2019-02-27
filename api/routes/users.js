'use strict'

const express = require('express')
const router = express.Router()
const fs = require('fs')
const data = fs.readFile('../data/en/single_choice_attributes.json')
const userData = JSON.parse(data);

router.get('/', (req, res, next) => {
  res.json(userData)
})

module.exports = router
