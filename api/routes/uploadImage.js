'use strict'

const express = require('express')
const router = express.Router()
const multer = require('multer')
const UploadImage = require('../models/uploadImage').default
const consola = require('consola')

let storage = multer.diskStorage({
  destination: 'assets/uploads/',
  filename: ((req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  })
})

let upload = multer({ storage: storage })

router.post('/', upload.single('upload_file'), (req, res, next) => {
  consola.info(req.body)
  consola.info(req.file)
  let dbData = {
    item: req.file.path
  }
  UploadImage(dbData).save((err, data) => {
    if (err) {
      consola.info("UploadImage:", err)
      throw err
      res.json(data)
    }
  })
})

module.exports = router
