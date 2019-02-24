const express = require('express')
const Document = require('../models/user/index.js')
const router = express.Router()

router.get('user/all', (req, res, next) => {
  res.app.locals.db.collections('documents').find({}).toArray((err, result) => {
    if (err) {
      res.status(400).send({ 'error': err })
    }
    if (result === undefined || result.length === 0) {
      res.status(400).send({ 'error': 'No users in database' })
    } else {
      res.status(200).send(result)
    }
  })
})

module.exports = router
