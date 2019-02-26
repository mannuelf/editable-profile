'use strict'

const express = require('express')
const app = express()
const PORT = 9000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
