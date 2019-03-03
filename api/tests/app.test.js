const app = require('../app');
const express = require('express');
const request = require('supertest');
const consola = require('consola')
const URI = 'http://localhost:3001'


let stubbedUser = {
  "_id": "5c7ae2d553f9081547abcb8f",
  "aboutMe": "I am a professional football manager. I enjoy reading and classical music. I never bring work home, I promise",
  "displayName": "Rafa",
  "ethnicity": "Caucasian",
  "figure": "happy",
  "gender": "Male",
  "location": "Newcastle Upon Tyne",
  "maritalStatus": "Single",
  "occupation": "Football Manager",
  "profilePicture": "photo",
  "realName": "Rafael Benítez",
  "religion": "Christian",
  "selectedFile": "photo",
  "userHeight": "1.56",
  "__v": 0
}

describe('GET, /user', () => {
  it('responds with json containing a collection of users', (done) => {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

describe('GET, /user/:id', () => {
  it('responds with a user not found', (done) => {
    request(app)
      .get('/users/000') // non existent use ID
      .set('Accept', 'application/json')
      .expect('Content-Type', 'json')
      .expect(404)
      .expect('"user not found"')
      .end((err) => {
        if (err) return done(err)
        done();
      })
  })
})

describe('POST, /user', () => {
  it('respond with 201 created', (done) => {
    request(app)
      .post('/users')
      .send(stubbedUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})


describe('POST, /user', () => {
  it('respond with 400 not created', (done) => {
    request(app)
      .post('/users')
      .send(stubbedUser)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .expect('"user not created"')
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})
