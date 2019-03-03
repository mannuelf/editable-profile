const mongoose = require('mongoose')
const Schema = mongoose.Schema
const consola = require('consola')

// create user schema and model
const UserSchema = new Schema({
  aboutMe: {
    type: String,
    required: [true, 'This field is required']
  },
  birthday: {
    type: Date,
  },
  displayName: {
    type: String,
    required: [true, 'Name field is require']
  },
  ethnicity: {
    type: String,
  },
  figure: {
    type: String,
  },
  gender: {
    type: String,
    required: [true, 'This field is required']
  },
  location: {
    type: String,
  },
  maritalStatus: {
    type: String,
    required: [true, 'This field is required']
  },
  occupation: {
    type: String,
  },
  realName: {
    type: String,
    required: [true, 'Real Name field is require']
  },
  religion: {
    type: String,
  },
  selectedFile: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  userHeight: {
    type: String,
  },
})

const User = mongoose.model('user', UserSchema)

module.exports = User
