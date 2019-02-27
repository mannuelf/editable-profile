'use strict'

const express = require('express')
const router = express.Router()
const consola = require('consola')
const MongoClient = require('mongodb').MongoClient

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME || 'mannuel',
//   api_key: process.env.API_KEY || '738337843699865',
//   api_secret: process.env.API_SECRET || '5vTAtjN3DtuH8EZz-xABbfbHhY',
// })

// const storage = cloudinaryStorage({
//   cloudinary: cloudinary,
//   folder: "sparkmedia",
//   allowedFormats: ["jpg", "png"],
//   transformation: [{ width: 500, height: 500, crop: "limit" }]
// })

// const parser = multer({ storage: storage });

// router.post('/', parser.single("image"), (req, res) => {
//   console.log(req.file) // to see what is returned to you
//   const image = {};
//   image.url = req.file.url;
//   image.id = req.file.public_id;
//   Image.create(image) // save image information in database
//     .then(newImage => res.json(newImage))
//     .catch(err => console.log(err));
//   // save to mongo?
// });


// MongoClient.connect('monogodb:localhost:27017/users', (err, db) => {
//   if (err) {
//     throw err
//   }
//   db.collection('users').find().toArray((err, result) => {
//     console.log(result)
//   })
// })

// MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
//   if (err) throw err
//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) throw err
//     console.log(result)
//   })
// })

module.exports = router
