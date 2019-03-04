'use strict'

const express = require('express')
const router = express.Router()
const data = require('../../data/en/single_choice_attributes.json')

router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(data)
})

module.exports = router
