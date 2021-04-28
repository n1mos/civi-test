const express = require('express')
const app = express()
const port = 3000

const messages = require('./messages.json')

app.get('/messages', (req, res) => {
  res.send(messages)
})

app.listen(port)
