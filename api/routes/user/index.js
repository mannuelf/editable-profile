'use strict'

const express = require('express')
const router = express.Router()
const User = require('../../models/user.js').default
const consola = require('consola')

router.get('/', (req, res, next) => {
  User.find({}).then((users) => {
    res.send(users)
  })
})

router.post('/', (req, res, next) => {
  User.create(req.body).then((user) => {
    consola.info('post', user)
    res.send(user)
  })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then((user) => {
    User.findOne({ _id: req.params.id }).then((user) => {
      res.send(user)
    })
  })
})

router.delete('/:id', (req, res, next) => {
  User.findByIdAndRemove({ _id: req.params.id }).then((user) => {
    res.send(user)
  })
})

module.exports = router
