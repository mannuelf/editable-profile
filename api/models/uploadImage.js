const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UploadImageSchema = new Schema({
  item: {
    type: String,
  }
})

const UploadImage = mongoose.model('uploadImage', UploadImageSchema)

module.exports = UploadImage
