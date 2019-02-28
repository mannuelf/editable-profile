'use strict'

const express = require('express')
const router = express.Router()
const User = require('../../models/user.js')

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.send(user)
    }).catch(next)

  // let user = new User(req.body)
  // user.save()
  // res.send({
  //   type: 'POST',
  //   aboutMe: req.body.aboutMe,
  //   displayName: req.body.displayName,
  //   ethnicity: req.body.ethnicity,
  //   figure: req.body.figure,
  //   gender: req.body.gender,
  //   location: req.body.location,
  //   maritalStatus: req.body.maritalStatus,
  //   occupation: req.body.occupation,
  //   profilePicture: req.body.profilePicture,
  //   realName: req.body.realName,
  //   religion: req.body.religion,
  //   selectedFile: req.body.selectedFile,
  //   userHeight: req.body.userHeight,
  // })
})

module.exports = router
