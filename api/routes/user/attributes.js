'use strict'

const express = require('express')
const router = express.Router()
const consola = require('consola')
const data = require('../../data/en/single_choice_attributes.json')

router.get('/', (req, res, next) => {
  res.json(data)
})

module.exports = router
